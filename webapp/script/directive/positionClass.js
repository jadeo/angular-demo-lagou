'use strict';
angular.module('app').directive('appPositionClass', [function(){
  return {
    restrict: 'A',
    replace: true,
    scope: {
      com: '='
    },
    templateUrl: 'view/template/positionClass.html',
    link: function($scope) {
      $scope.showPositionList = function(idx) {
        /*这样可以控制显示的是哪一个列表*/
        $scope.positionList = $scope.com.positionClass[idx].positionList; 
        // 确定点击的是哪一个
        $scope.isActive = idx;
        console.log(idx);
      }

      $scope.$watch('com', function(newVal){
        // 进行初始化操作，要有一个列表是显示的
        if(newVal) $scope.showPositionList(0); 
        console.log(newVal);
      });
    }
  };
}]);
