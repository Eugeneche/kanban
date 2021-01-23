<<<<<<< HEAD
import close from './img/close.svg';
import { createCard, store } from './card';
import { setDate, updateLocalStorage } from './functions';

export const createModal = function() {
    const shadow = document.createElement('div');
    shadow.classList.add('shadow');
    shadow.classList.add('hide');

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = ` <button class="close">
                            <img src="${close}" class="close" alt="close sign">
                        </button>
                        <div class="date"></div>
                        <form>
                            <div class="subject"><input type="text"></div>
                            <div class="description"><textarea></textarea></div>
                            <div class="status"></div>
                            <button class="submit">OK</button>
                        </form>`

    shadow.appendChild(modal);   
    return shadow;   
}

//edit card info function
export const editCard = function() {
    let editCardBtns = document.querySelectorAll('.edit-card');
    editCardBtns.forEach( el => {
        el.addEventListener('click', () => {
            const changedElemId = +el.closest('.card').id;
            const getCurrentCardValues = function(param) {
                let entireLocalStorage = JSON.parse(localStorage.getItem('store'));
                let valueOfParam;
                entireLocalStorage['cards'].forEach((elem) => {
                    if (elem.id === changedElemId) {
                        valueOfParam = elem[param];
                    }
                    return valueOfParam;
                });
                return valueOfParam;               
            }
            showModal(getCurrentCardValues('creatingCardDate'), getCurrentCardValues('status'), getCurrentCardValues('subject'), getCurrentCardValues('description'));   

            document.querySelector('.submit').onclick = function(evt) {
                evt.preventDefault();
                let updatedSubject;
                store['cards'].forEach(el => {
                    if (el.id === changedElemId) {
                        el.description = document.querySelector('textarea').value;
                        el.subject = document.querySelector('input').value;
                        updatedSubject = el.subject;
                    }
                    return updatedSubject;
                });
                let currentElementId = document.getElementById(changedElemId);
                currentElementId.querySelector('.subject').outerHTML = `<div class="subject">${updatedSubject}</div>`;

                document.querySelector('input').value = '';
                document.querySelector('textarea').value = '';
                updateLocalStorage();            
            }        
        });       
    });  
}

export const showModal = function(date, status, subject = '', description = '') {
    document.querySelector('.shadow').classList.remove('hide');
    document.querySelector('.date').innerHTML = `<span>${date}</span>`;
    document.querySelector('.status').innerHTML = `Status: <span>${status}</span>`;
    document.querySelector('input').value = subject;
    document.querySelector('textarea').value = description;
}

export const closeModal = function() {
    document.querySelector('.shadow').addEventListener('click', (e) => {
        (e.target.classList.value === 'shadow' ||
         e.target.classList.value === 'close' ||
         e.target.classList.value === 'submit') && 
         document.querySelector('.shadow').classList.add('hide');
    });
=======
import close from './img/close.svg';
import { createCard, store } from './card';
import { setDate, updateLocalStorage } from './functions';

export const createModal = function() {
    const shadow = document.createElement('div');
    shadow.classList.add('shadow');
    shadow.classList.add('hide');

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = ` <button class="close">
                            <img src="${close}" class="close" alt="close sign">
                        </button>
                        <div class="date"></div>
                        <form>
                            <div class="subject"><input type="text"></div>
                            <div class="description"><textarea></textarea></div>
                            <div class="status"></div>
                            <button class="submit">OK</button>
                        </form>`

    shadow.appendChild(modal);   
    return shadow;   
}

//edit card info function
export const editCard = function() {
    let editCardBtns = document.querySelectorAll('.edit-card');
    editCardBtns.forEach( el => {
        el.addEventListener('click', () => {
            const changedElemId = +el.closest('.card').id;
            const getCurrentCardValues = function(param) {
                let entireLocalStorage = JSON.parse(localStorage.getItem('store'));
                let valueOfParam;
                entireLocalStorage['cards'].forEach((elem) => {
                    if (elem.id === changedElemId) {
                        valueOfParam = elem[param];
                    }
                    return valueOfParam;
                });
                return valueOfParam;               
            }
            showModal(getCurrentCardValues('creatingCardDate'), getCurrentCardValues('status'), getCurrentCardValues('subject'), getCurrentCardValues('description'));   

            document.querySelector('.submit').onclick = function(evt) {
                evt.preventDefault();
                let updatedSubject;
                store['cards'].forEach(el => {
                    if (el.id === changedElemId) {
                        el.description = document.querySelector('textarea').value;
                        el.subject = document.querySelector('input').value;
                        updatedSubject = el.subject;
                    }
                    return updatedSubject;
                });
                let currentElementId = document.getElementById(changedElemId);
                currentElementId.querySelector('.subject').outerHTML = `<div class="subject">${updatedSubject}</div>`;

                document.querySelector('input').value = '';
                document.querySelector('textarea').value = '';
                updateLocalStorage();            
            }        
        });       
    });  
}

export const showModal = function(date, status, subject = '', description = '') {
    document.querySelector('.shadow').classList.remove('hide');
    document.querySelector('.date').innerHTML = `<span>${date}</span>`;
    document.querySelector('.status').innerHTML = `Status: <span>${status}</span>`;
    document.querySelector('input').value = subject;
    document.querySelector('textarea').value = description;
}

export const closeModal = function() {
    document.querySelector('.shadow').addEventListener('click', (e) => {
        (e.target.classList.value === 'shadow' ||
         e.target.classList.value === 'close' ||
         e.target.classList.value === 'submit') && 
         document.querySelector('.shadow').classList.add('hide');
    });
>>>>>>> 5d3d2be29d99415752a01041fced2566ad003224
}