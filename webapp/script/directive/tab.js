'use strict';
angular.module('app').directive('appTab', [function(){
  return {
    restrict: 'A',
    replace: true,
    scope: {
      list: '=',
      tabClick: '&'
    },
    templateUrl: 'view/template/tab.html',
    link: function($scope) {
      $scope.click = function(tab) {
        // selected 是没有意义的,但是它被赋予值后意义就不一样了。
        // 传入的参数是item,但是item呢，item in list,就是实参，可以拿到item的所有属性。
        $scope.selectId = tab.id;
        // console.log(tab.id);
        // city salary scale
        $scope.tabClick(tab);

      };
    }
  };
}]);
