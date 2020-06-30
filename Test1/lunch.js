(function(){
    'use strict';
    angular.module('LunchApp',[])
    .controller('controller',lunchContoller);
    lunchContoller.$inject=['$scope'];
    function lunchContoller($scope){
        $scope.item="";  
        $scope.check=function(){
            var items=$scope.item;
            var test=items.split(',');
            console.log(test);
            console.log(test.length);
            if(test.length<=3)
                $scope.item="Enjoy!"
            else
                $scope.item="Too Much!"

        }
    }
})();