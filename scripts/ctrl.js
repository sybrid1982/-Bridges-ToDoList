'use strict';

function ToDoListCtrl() {
    let vm = this;
    vm.list = [];
    vm.addToList = (newListItem) => {
        vm.list.push({text: newListItem});
    }
    vm.completeTask = (index) => {
        vm.list[index].classes = {completed: true};
    }
    vm.removeFromList = (index) => {
        vm.list.splice(index, 1);
    }
}

angular
    .module('ToDoList')
    .controller('ToDoListCtrl', ToDoListCtrl);