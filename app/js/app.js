'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
	// $routeProvider.when('/controles',  {templateUrl: 'partials/controles.html',     controller: 'ControllerControles'});
    // $routeProvider.when('/mapa',       {templateUrl: 'partials/mapa.html',          controller: 'ControllerMapa'});
    // $routeProvider.otherwise({redirectTo: '/mapa'});
  }]);

