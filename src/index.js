import { createBoard } from './board';
import { dragStart, dragEnd, dragOver, dragEnter, dragEnterBin, 
        dragLeave, dragLeaveBin, dragDrop, setDate, updateLocalStorage, init, dragCards } from './functions';
import { createModal, editCard, showModal, closeModal } from './modal';
import { createCard, store } from './card';
      

function root() {
  const root = document.getElementById('root');
  root.append(createBoard());
};

root();
init();
closeModal();

let steps = document.querySelectorAll('.step');

let processedCard;

//-- dublicated code !!!

let cards = document.querySelectorAll('.card');
cards.forEach( el => {
  el.addEventListener('dragstart', function() {
    setTimeout(() => {
      el.classList.add('hide');
    }, 0);
    processedCard = el;
})});

cards.forEach(function(el) {el.addEventListener('dragend', dragEnd)});
editCard();
//--

const addTask = document.querySelector('.add-task');
addTask.addEventListener('click', function() {
  showModal(setDate(), store.init.status);

  document.querySelector('.submit').onclick = function(evt) {
    evt.preventDefault();
    const cardInfo = {
      'id': Date.parse(new Date()),
      'creatingCardDate': setDate(),
      'subject': document.querySelector('input').value,
      'description': document.querySelector('textarea').value,
      'status': store.init.status,
      addIdInCard: function() { return this.id },
      addDateInModal: function() { return this.creatingCardDate },
      addSubjectInCard: function() { return this.subject }
  }  

    store['cards'].push(cardInfo);
    updateLocalStorage();
       
    document.querySelector('input').value = '';
    document.querySelector('textarea').value = '';

    createCard(cardInfo.addIdInCard(), cardInfo.addSubjectInCard());
    editCard();
    //-- dublicated code !!!
    let cards = document.querySelectorAll('.card');
    cards.forEach( el => {
      el.addEventListener('dragstart', function() {
        setTimeout(() => {
          el.classList.add('hide');
        }, 0);
        processedCard = el;
      })
    });

    cards.forEach(function(el) {el.addEventListener('dragend', dragEnd)});
    //--
  }
});

steps.forEach((el) => el.addEventListener('dragover', dragOver)); 
steps.forEach((el) => el.addEventListener('dragenter', dragEnter)); 
steps.forEach((el) => el.addEventListener('dragleave', dragLeave)); 
steps.forEach((el) => el.addEventListener('drop', function() {
  this.append(processedCard);
  this.classList.remove('hovered');

  store['cards'].forEach(elem => {
    if (elem.id === +processedCard.id) {
      elem.status = this.getAttribute('data-status');
    }
  })
  updateLocalStorage();
})); 

document.querySelector('.bin img').addEventListener('dragover', dragOver);
document.querySelector('.bin img').addEventListener('dragenter', dragEnterBin);
document.querySelector('.bin img').addEventListener('dragleave', dragLeaveBin);
document.querySelector('.bin img').addEventListener('drop', function() {
  
  processedCard.remove();

  store['cards'].forEach((el, i) => {
    if (el.id === +processedCard.id) {
      store['cards'].splice(i, 1);
    }
  });

  this.classList.remove('hovered-bin');
  updateLocalStorage();
})


