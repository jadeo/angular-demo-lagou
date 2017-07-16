'use strict';
angular.module('app').controller('searchCtrl', ['dict', '$http', '$scope', function(dict, $http, $scope){
  $scope.name = '';
  $scope.search = function() {
    $http.get('data/positionList.json?name='+$scope.name).success(function(resp) {
      $scope.positionList = resp;
    });
  };
  $scope.search();
  $scope.sheet = {};
  $scope.tabList = [{
    id: 'city',
    name: '城市'
  }, {
    id: 'salary',
    name: '薪水'
  }, {
    id: 'scale',
    name: '公司规模'
  }];
  $scope.filterObj = {};
  var tabId = '';
  $scope.tClick = function(id,name) {
    tabId = id;
    $scope.sheet.list = dict[id];  /*可以拿到dict.city,salary*/
    // console.log(dict[i]);
    // console.log(dict);
    // Object {salary: Array(8), city: Array(4), scale: Array(5)}
    // console.log(dict[id]);
    // (4) [Object, Object, Object, Object]
    // name:"全国"
    
    $scope.sheet.visible = true;
  };
// tab.js
// angular.module('app').directive('appTab', [function(){
//   return {
//     restrict: 'A',
//     replace: true,
//     scope: {
//       list: '=',
//       tabClick: '&'
//     },
//     templateUrl: 'view/template/tab.html',
//     link: function($scope) {
//       $scope.click = function(tab) {
//         $scope.selectId = tab.id;
//         $scope.tabClick(tab);
        
//       };
//     }
//   };
// }]);
  $scope.sClick = function(id,name) {
    if(id) {
      angular.forEach($scope.tabList, function(item){
        if(item.id===tabId) {
          // item 是传进来的tablist  ,确定点击的是哪一个 
          // name 传进来的 城市：全国，北京，上海，广州  ；或者薪资：几千 几千的
          item.name = name;
        }
      });
      $scope.filterObj[tabId + 'Id'] = id;
    } else {
      delete $scope.filterObj[tabId + 'Id'];
      angular.forEach($scope.tabList, function(item){
        if(item.id===tabId) {
          switch (item.id) {
            case 'city':
              item.name = '城市';
              break;
            case 'salary':
              item.name = '薪水';
              break;
            case 'scale':
              item.name = '公司规模';
              break;
            default:
          }
        }
      });
    }
  }
}]);
