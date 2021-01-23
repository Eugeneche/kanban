import { createCard, store } from './card';
import cardMenu from './img/card_menu.svg';

//init function
export const init = function() {
    let initLocalStorageCards;
    if (localStorage.store) {
        let initLocalStorage = JSON.parse(localStorage.getItem('store'));
        initLocalStorageCards = initLocalStorage['cards'];
        if (initLocalStorageCards.length > 0) {
            store['cards'] = initLocalStorageCards;
        }
    } else {
        return false;
    }
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {

        initLocalStorageCards.forEach(cardItem => {
            if (cardItem['status'] === step.getAttribute('data-status')) {
                const card = document.createElement('div');
                card.setAttribute('id', cardItem.id);
                card.classList.add('card');
                card.setAttribute('draggable', 'true');
                card.insertAdjacentHTML('afterbegin', ` <button class="edit-card">
                                                            <img src="${cardMenu}" alt="menu image">
                                                        </button>
                                                        <div class="subject">${cardItem.subject}</div>`);

                                                        step.appendChild(card);
        }});
    });   
}

//drag and drop functions
// dragCards function - is not used
export const dragCards = function(currentCard) {
    let cards = document.querySelectorAll('.card');
    cards.forEach( el => {
      el.addEventListener('dragstart', function() {
        setTimeout(() => {
          el.classList.add('hide');
        }, 0);
        return currentCard = el;
    })});

    cards.forEach(function(el) {el.addEventListener('dragend', dragEnd)});
    return currentCard;
}

export const dragEnd = function() {
    this.classList.remove('hide');
}

export const dragOver = function(e) {
    e.preventDefault();
}

export const dragEnter = function() {
    this.classList.add('hovered');
}

export const dragEnterBin = function() {
    this.classList.add('hovered-bin');
}

export const dragLeave = function() {
    this.classList.remove('hovered');
}

export const dragLeaveBin = function() {
    this.classList.remove('hovered-bin');
}

export const dragDrop = function(el) {
    this.append(el);
}

//creating date function
export const setDate = function() {
    let date = new Date();

    let day = date.getDate();
    if (day < 10) day = '0' + day;

    let mon = date.getMonth() + 1;
    if (mon < 10) mon = '0' + mon;

    let min = date.getMinutes();
    if (min < 10) min = '0' + min;

    let creatingCardDate = `${day}.${mon}.${date.getFullYear()} ${date.getHours()}:${min}`;
    
    return creatingCardDate;
}

//update localStorage
export const updateLocalStorage = function() {
    if (localStorage.getItem('store')) {
        localStorage.removeItem('store');
    }
    localStorage.setItem('store', JSON.stringify(store));
}


