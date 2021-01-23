const root = document.getElementById('root');

const wrap = document.createElement('div');
wrap.classList.add('wrap');

const stepTodo = document.createElement('div');
stepTodo.classList.add('step');
stepTodo.classList.add('todo');

const stepInProgress = document.createElement('div');
stepInProgress.classList.add('step');
stepInProgress.classList.add('in-progress');

root.append(wrap);
wrap.append(stepTodo, stepInProgress);
//root.append(stepInProgress);