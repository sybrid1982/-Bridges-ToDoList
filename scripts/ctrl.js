'use strict';

function ToDoListCtrl() {
    let vm = this;
    vm.list = [];
    vm.addTask = (newListItem) => {
        vm.list.push({text: newListItem});
    }
    vm.completeTask = (index) => {
        vm.list[index].classes = {completed: true};
    }
    vm.removeTask = (index) => {
        vm.list.splice(index, 1);
    }
    vm.editTask = (index) => {
        vm.list[index].edit = true;
    }
    vm.completeEdit = (index) => {
        vm.list[index].edit = false;
    }
}

angular
    .module('ToDoList')
    .controller('ToDoListCtrl', ToDoListCtrl);