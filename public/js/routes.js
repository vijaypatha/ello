angular
.module('elloApp')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('login', {
      url: "/",
      templateUrl: "../views/login.template.html"
    })
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "../views/home.html"
      })


})//UI.ROUTER
