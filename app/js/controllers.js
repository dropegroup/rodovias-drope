'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
   controller('ControllerControles', ['$scope', 'drawMap', function($scope, drawMapService) {
	    $scope.estado = { sigla:  '' };
	    $scope.ano    = { numero: '' };
	    $scope.mes    = { numero: '' };
	    $scope.estados = [ { sigla: 'AC' }, { sigla: 'AL' }, { sigla: 'AM' }, { sigla: 'AP' }, { sigla: 'BA' },
	      { sigla: 'CE' }, { sigla: 'DF' }, { sigla: 'ES' }, { sigla: 'GO' }, { sigla: 'MA' }, { sigla: 'MG' },
	      { sigla: 'MS' }, { sigla: 'MT' }, { sigla: 'PA' }, { sigla: 'PB' }, { sigla: 'PE' }, { sigla: 'PI' },
	      { sigla: 'PR' }, { sigla: 'RJ' }, { sigla: 'RN' }, { sigla: 'RO' }, { sigla: 'RR' }, { sigla: 'RS' },
	      { sigla: 'SC' }, { sigla: 'SE' }, { sigla: 'SP' }, { sigla: 'TO' } ];
	    $scope.anos = [ { numero: '2007' }, { numero: '2008' }, { numero: '2009' }, { numero: '2010' }, 
	      { numero: '2011' }, { numero: '2012' }, { numero: '2013' } ];
	    $scope.meses = [ { numero: '1', nome: 'Janeiro' }, { numero: '2', nome: 'Fevereiro' },
	      { numero: '3', nome: 'Março' }, { numero: '4', nome: 'Abril' }, { numero: '5', nome: 'Maio' },
	      { numero: '6', nome: 'Junho' }, { numero: '7', nome: 'Julho' }, { numero: '8', nome: 'Agosto' },
	      { numero: '9', nome: 'Setembro' }, { numero: '10', nome: 'Outubro' }, { numero: '11', nome: 'Novembro' },
	      { numero: '12', nome: 'Dezembro' } ];
	    
	    $scope.drawMap = function(uf, ano, mes) { drawMapService(uf, ano, mes) };

   }])
  .controller('ControllerMapa', ['$scope', 'drawMap', function($scope, drawMapService) {
    drawMapService();
    $scope.drawMap = function(uf, ano, mes) { drawMapService(uf, ano, mes) };

  }])
  ;
