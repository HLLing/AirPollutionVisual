// Define an AugularJS app module
var app = angular.module('myApp', []);

// Define the controller for this app module
app.controller('myCtrl', function($scope, $http) {
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(114.0579, 22.5431);
    map.centerAndZoom(point, 15);

    $scope.click = function() {
        var bounds = map.getBounds();
        var sw = bounds.getSouthWest();
        var ne = bounds.getNorthEast();
        var lngSpan = Math.abs(sw.lng - ne.lng);
        var latSpan = Math.abs(ne.lat - sw.lat);
        var oldDate = String($scope.date);
        var oldHour = String($scope.hour);
        var newDate= oldDate.split(" ").join("+");
        var newHour= oldHour.split(" ").join("+");
        console.log(newDate);
        console.log(newHour);

        $http({
            method : 'GET',
            url : 'http://localhost:5000/map/' + $scope.date + '/' + $scope.hour
        }).success(function(res, status, headers, config) {
                $scope.topics = res;
                $scope.date = '';
                $scope.hour = '';
            }
        ).error(function (res, status, headers, config) {
            console.log(res);
        });

        function addMarker(point) {
            var marker = new BMap.Marker(point);
            map.addOverlay(marker);
            var label = new BMap.Label("label",{offset:new BMap.Size(20,-10)});
            marker.setLabel(label);
        }

        var points = [];
        for(var i = 0; i < 25; i++) {
            points.push([sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7)]);
        }

        points.map(point => new BMap.Point(point[0], point[1]))
            .forEach(point => addMarker(point));
    }
});




