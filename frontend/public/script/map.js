// Define an AugularJS app module
var app = angular.module('myApp', []);

// Define the controller for this app module
app.controller('myCtrl', function ($scope, $http) {
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(114.0579, 22.5431);
    map.centerAndZoom(point, 13);
    var points;
    $scope.date = new Date();
    $scope.hour = new Date();

    $scope.click = function () {
        //console.log($scope.date.getTime());
        //console.log($scope.date.getTime());

        $http({
            method: 'GET',
            url: 'http://localhost:5000/map/' + $scope.date + '/' + $scope.hour
        }).then(function (res) {
                console.log(res);
                points = res.data.data;
                console.log(points[1]);

                function addMarker(point) {
                    var newPoint = new BMap.Point(point.logitude, point.latitude);
                    var marker = new BMap.Marker(newPoint);
                    map.addOverlay(marker);
                    var label = new BMap.Label(point.pm2d5, {offset: new BMap.Size(20, -10)});
                    marker.setLabel(label);
                }

                points.forEach(point => addMarker(point));
            }
        );

    }

});




