"use strict";

var listElement = document.querySelector('.list');
var itemElementList = listElement.children;

var statisticTotal = document.querySelector('.statistic__total');
var statisticDone = document.querySelector('.statistic__done');
var statisticLeft = document.querySelector('.statistic__left');

var templateElement = document.getElementById('todoTemplate');
var templateContainer = 'content' in templateElement ? templateElement.content : templateElement;

// сформируем задачки
var todoList = [
    {
        name: 'Позвонить в сервис',
        status: 'todo'
    },
    {
        name: 'Купить хлеб',
        status: 'done'
    },
    {
        name: 'Захватить мир',
        status: 'todo'
    },
    {
        name: 'Добавить тудушку в список',
        status: 'todo'
    }
];

// функция по генерации элементов
function addTodoFromTemplate(todo) {
    var newElement = templateContainer.querySelector('.task').cloneNode(true);
    newElement.querySelector('.task__name').textContent = todo.name;
    setTodoStatusClassName(newElement, todo.status === 'todo');
    return newElement;
}

function setTodoStatusClassName(todo, flag) {
    todo.classList.toggle('task_todo', flag);
    todo.classList.toggle('task_done', !flag);
}

function onListClick(event) {
    var target = event.target;
    var element;

    if (isStatusBtn(target)) {
        element = target.parentNode;
        changeTodoStatus(element);
        changeStatisticsIfChangeTaskStatus(element);
    }

    if (isDeleteBtn(target)) {
        element = target.parentNode;
        deleteTodo(element);
        changeStatisticsIfDeleteTask(element);
    }
}

function isStatusBtn(target) {
    return target.classList.contains('task__status');
}

function isDeleteBtn(target) {
    return target.classList.contains('task__delete-button');
}

function changeTodoStatus(element) {
    var isTodo = element.classList.contains('task_todo');
    setTodoStatusClassName(element, !isTodo);
}

function deleteTodo(element) {
    listElement.removeChild(element);
}

function onInputKeydown(event) {
    if (event.keyCode !== 13) {
        return;
    }

    var ENTER_KEYCODE = 13;
    if (event.keyCode !== ENTER_KEYCODE) {
        return;
    }

    var todoName = inputElement.value.trim();

    if (todoName.length === 0 || checkIfTodoAlreadyExists(todoName)) {
        return;
    }

    var todo = createNewTodo(todoName);
    insertTodoElement(addTodoFromTemplate(todo));
    changeStatisticsIfNewTask();
    inputElement.value = '';
}

function checkIfTodoAlreadyExists(todoName) {
    var todoElements = listElement.querySelectorAll('.task__name');
    var namesList = Array.prototype.map.call(todoElements, function(element) {
        return element.textContent;
    });
    return namesList.indexOf(todoName) > -1;
}

function createNewTodo(name) {
    return {
        name: name,
        status: 'todo'
    }
}

todoList
    .map(addTodoFromTemplate)
    .forEach(insertTodoElement);

StartStatistics();
listElement.addEventListener('click', onListClick);

var inputElement = document.querySelector('.add-task__input');
inputElement.addEventListener('keydown', onInputKeydown);

// Задача:
// исправьте багу с добавлением insertBefore в пустой массив
// создайте статистику
//
function insertTodoElement(elem) {
    if (listElement.children) {
        listElement.insertBefore(elem, listElement.firstElementChild);
    } else {
        listElement.appendChild(elem);
    }
}

// Фильтры

var filterElement = document.querySelector('.filters');
var selectedElement = document.querySelector('.filters__item_selected');

filterElement.addEventListener('click', onFilterClick);

function onFilterClick(event) {
    var target = event.target;
    var filter = target.getAttribute('data-filter');

    if (target != selectedElement) {
        setSelectedFilter(target);
    }
    if (filter == 'all'){
        showAllTasks();
    }
    else if (filter == 'done') {
        showDoneTasks();
    }
    else if (filter == 'todo'){
        showTodoTasks();
    }
}

function showAllTasks(){
    var element;
    for (var i = 0; i < listElement.children.length; i++) {
        element = listElement.children[i];
        element.style.display = '';
    }
}
function showDoneTasks(){
    var element;
    for (var i = 0; i < listElement.children.length; i++) {
        element = listElement.children[i];
        if (isTaskToDo(element) ){
            element.style.display = 'none';
        }
        else {
            element.style.display = '';
        }
    }
}
function showTodoTasks(){
    var element;
    for (var i = 0; i < listElement.children.length; i++) {
        element = listElement.children[i];
        if (isTaskDone(element) ){
            element.style.display = 'none';
        }
        else {
            element.style.display = '';
        }
    }
}

function isTaskToDo(target) {
    return target.classList.contains('task_todo');
}
function isTaskDone(target) {
    return target.classList.contains('task_done');
}
function setSelectedFilter(target) {
    selectedElement.classList.remove('filters__item_selected');
    target.classList.add('filters__item_selected');
    selectedElement = target;
}

//Статистика

function StartStatistics () {
    statisticTotal.innerHTML = listElement.children.length;
    var taskTodo = document.querySelectorAll('.task_todo');
    statisticLeft.innerHTML = taskTodo.length;
    var taskDone = document.querySelectorAll('.task_done');
    statisticDone.innerHTML = taskDone.length;
}
function changeStatisticsIfNewTask () {
    var total = + statisticTotal.textContent;
    var left = + statisticLeft.textContent;
    statisticTotal.innerHTML = ++ total ;
    statisticLeft.innerHTML = ++ left;
}
function changeStatisticsIfChangeTaskStatus(element) {
    var isTodo = element.classList.contains('task_todo');
    var left = + statisticLeft.textContent;
    var done = + statisticDone.textContent;
    if (isTodo) {
        statisticLeft.innerHTML = ++ left;
        statisticDone.innerHTML = -- done;
    }
    else {
        statisticLeft.innerHTML = -- left;
        statisticDone.innerHTML = ++ done;
    }
}
function changeStatisticsIfDeleteTask(element) {
    var isTodo = element.classList.contains('task_todo');
    var left = + statisticLeft.textContent;
    var done = + statisticDone.textContent;
    var total = + statisticTotal.textContent;
    if (isTodo) {
        statisticLeft.innerHTML = -- left;
        statisticTotal.innerHTML = -- total ;
    }
    else {
        statisticDone.innerHTML = -- done;
        statisticTotal.innerHTML = -- total ;
    }
}