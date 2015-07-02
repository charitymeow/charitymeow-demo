var m = angular.module('charityCard', []);
m.directive('charityCard', function() {
  return {
    restrict: 'E',
    templateUrl: 'charityCard/charityCard.tpl.html'
  };  
});