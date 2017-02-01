(function() {
  'use strict';

  angular
    .module('calApp')
    .controller('MainController', MainController)
    .controller('eventController',  function($scope){
    $scope.sortType = '';
    $scope.sortReverse = false;
    $scope.searchEvent = '';
  
    $scope.events = [
        {
          startDate : '20150704T190000',
          endDate : '20150704T210000',
          title : 'Fourth of July Fireworks',
          location : 'Battery Park City, New York, NY',
          className : 'btn btn-sm btn-default dropdown-toggle',
          description : 'Celebrate the independence of the United States with fireworks in one of the greatest cities in the world.',
          btnText : 'Add to calendar'
        },{
           startDate : '20160504120000',
          endDate : '20160504180000',
          title : 'Star Wars Day Party',
          location : 'Tatooine',
          className : 'btn btn-sm btn-default dropdown-toggle',
          description : 'May the force be with you',
          btnText : 'Add to calendar'
        }
    ]
    });

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1485616894180;
    vm.showToastr = showToastr;

   

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
