angular
.module('elloApp')
.controller('mainCtrl',function($scope,dataService){
  $scope.test = "ello";

  $scope.addList = function(listName){
    dataService.listName(listName)
    .then(function(response){
      console.log("addFromServer",response);
      $scope.listData.push(response);
      return response;
    });//.then promise
  } //addList function. ON ng-click

  $scope.listDataFromService = function(){
    dataService.getDataFromServer()
    .then(function(response){
      $scope.listData = response;
      console.log(response);
    })
  }

  $scope.listDataFromService();

  //Delete list

  $scope.deleteList = function(list){
    var index = $scope.listData.indexOf(list);

    $scope.listData.splice(index,1);
    dataService.deleteList(list)
    .then(function(response){
      return response;
    });
  }

  //TASKS

  $scope.addTask = function(newTask,listId){
    dataService.addTask(newTask,listId)
    .then(function(response){
      // return response;
      $scope.listDataFromService();
    });//.then promise
  } //addTask function. ON ng-click

  $scope.listDataFromService = function(){
    dataService.getDataFromServer()
    .then(function(response){
      $scope.listData = response;
      console.log(response);
    })
  }

  $scope.listDataFromService();

  //Delete task

  $scope.deleteTask = function(task, listIndex, taskIndex){

    // var index = $scope.listData.indexOf(task);

    // $scope.listData.splice(index,1);

    $scope.listData[listIndex].tasks.splice(taskIndex,1);
    dataService.deleteTask(task)
    .then(function(response){
      return response;
    });
  }












});//mainCtrl
