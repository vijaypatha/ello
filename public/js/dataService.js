angular
.module('elloApp')
.service('dataService',function($http){

  this.listName = function(listName){
    console.log(listName);
    return $http.post('/list', {list: listName}).then(function(response){
      return response.data;
    });
  };

  this.getDataFromServer = function(){
    return $http.get('/list')
    .then(function(response){
      console.log(response);
      return response.data;
    });
  }

  //deleteList
  this.deleteList = function(list){
    console.log(list);
    return $http.delete('/list/'+list._id)
    .then(function(response){
      console.log(response);
      return response.data;
    });

  }

  //TASKS service

  this.addTask = function(newTask,listId){
    return $http.post('/task',{task: newTask, list: listId})
    .then(function(response){
      console.log(response);
      return response.data;
    })
  } //POST

  // this.getDataFromServer = function(){
  //   return $http.get('/task')
  //   .then(function(response){
  //     console.log(response);
  //     return response.data;
  //   });
  // }
  //
  // //deleteList
  this.deleteTask = function(task){
    console.log(task);
    return $http.delete('/task/'+task._id)
    .then(function(response){
      console.log(response);
      return response.data;
    });

  }









});//dataService
