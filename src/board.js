<<<<<<< HEAD
import plus from './img/plus.svg';
import paper_bin from './img/bin.svg';
import board from './img/board.jpg';
import logo from './img/logo.png';
import { createModal } from './modal';

//create board function
export const createBoard = function() {

    document.body.style.cssText=`background-image: url(${board}); background-size: cover; height: 95vh`;

    const wrap = document.createElement('div');
    wrap.classList.add('wrap');

    const header = document.createElement('div');
    header.classList.add('header');
    header.innerHTML = `<img src=${logo}>`;

    const stepTodo = document.createElement('div');
    stepTodo.classList.add('step');
    stepTodo.classList.add('to-do');
    stepTodo.setAttribute('data-status', 'To do');
    stepTodo.insertAdjacentHTML('afterbegin', `<div class="step-title"><span>To Do</span></div>`);
    stepTodo.insertAdjacentHTML('afterbegin', `<button class="add-task"><img src="${plus}" draggable="false" alt="plus"></button>`);
    
    const stepInProgress = document.createElement('div');
    stepInProgress.classList.add('step');
    stepInProgress.classList.add('in-progress');
    stepInProgress.setAttribute('data-status', 'In progress');
    stepInProgress.insertAdjacentHTML('afterbegin', `<div class="step-title"><span>In Progress</span></div>`);

    const stepDone = document.createElement('div');
    stepDone.classList.add('step');
    stepDone.classList.add('done');
    stepDone.setAttribute('data-status', 'Done');
    stepDone.insertAdjacentHTML('afterbegin', `<div class="step-title"><span>Done</span></div>`);

    const bin = document.createElement('div');
    bin.classList.add('bin');
    bin.insertAdjacentHTML('afterbegin', `<img src="${paper_bin}" draggable="false" width="40px" alt="paper bin">`);

    wrap.append(createModal(), header, stepTodo, stepInProgress, stepDone, bin);

    return wrap;
=======
import plus from './img/plus.svg';
import paper_bin from './img/bin.svg';
import board from './img/board.jpg';
import logo from './img/logo.png';
import { createModal } from './modal';

//create board function
export const createBoard = function() {

    document.body.style.cssText=`background-image: url(${board}); background-size: cover; height: 95vh`;

    const wrap = document.createElement('div');
    wrap.classList.add('wrap');

    const header = document.createElement('div');
    header.classList.add('header');
    header.innerHTML = `<img src=${logo}>`;

    const stepTodo = document.createElement('div');
    stepTodo.classList.add('step');
    stepTodo.classList.add('to-do');
    stepTodo.setAttribute('data-status', 'To do');
    stepTodo.insertAdjacentHTML('afterbegin', `<div class="step-title"><span>To Do</span></div>`);
    stepTodo.insertAdjacentHTML('afterbegin', `<button class="add-task"><img src="${plus}" draggable="false" alt="plus"></button>`);
    
    const stepInProgress = document.createElement('div');
    stepInProgress.classList.add('step');
    stepInProgress.classList.add('in-progress');
    stepInProgress.setAttribute('data-status', 'In progress');
    stepInProgress.insertAdjacentHTML('afterbegin', `<div class="step-title"><span>In Progress</span></div>`);

    const stepDone = document.createElement('div');
    stepDone.classList.add('step');
    stepDone.classList.add('done');
    stepDone.setAttribute('data-status', 'Done');
    stepDone.insertAdjacentHTML('afterbegin', `<div class="step-title"><span>Done</span></div>`);

    const bin = document.createElement('div');
    bin.classList.add('bin');
    bin.insertAdjacentHTML('afterbegin', `<img src="${paper_bin}" draggable="false" width="40px" alt="paper bin">`);

    wrap.append(createModal(), header, stepTodo, stepInProgress, stepDone, bin);

    return wrap;
>>>>>>> 5d3d2be29d99415752a01041fced2566ad003224
}