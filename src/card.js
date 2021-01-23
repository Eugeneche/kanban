<<<<<<< HEAD
import cardMenu from './img/card_menu.svg';

export const store = {
    'init': {
        'subject': '',
        'description': '',
        'status': 'To do'
    },
    'cards': []
};

export const createCard = function(id, subject) {
    const card = document.createElement('div');
    card.setAttribute('id', id);
    card.classList.add('card');
    card.setAttribute('draggable', 'true');
    card.insertAdjacentHTML('afterbegin', ` <button class="edit-card">
                                                <img src="${cardMenu}" alt="menu image">
                                            </button>
                                            <div class="subject">${subject}</div>`);


    document.querySelector('.to-do').appendChild(card);
=======
import cardMenu from './img/card_menu.svg';

export const store = {
    'init': {
        'subject': '',
        'description': '',
        'status': 'To do'
    },
    'cards': []
};

export const createCard = function(id, subject) {
    const card = document.createElement('div');
    card.setAttribute('id', id);
    card.classList.add('card');
    card.setAttribute('draggable', 'true');
    card.insertAdjacentHTML('afterbegin', ` <button class="edit-card">
                                                <img src="${cardMenu}" alt="menu image">
                                            </button>
                                            <div class="subject">${subject}</div>`);


    document.querySelector('.to-do').appendChild(card);
>>>>>>> 5d3d2be29d99415752a01041fced2566ad003224
}