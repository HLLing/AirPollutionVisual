// Define an AugularJS app module
var app = angular.module('myApp', []);

var greenIconDataUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB3aWR0aD0iNTMzLjMzMzMzMzMzMzMzMzMiIGhlaWdodD0iNTMzLjMzMzMzMzMzMzMzMzMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxnIGlkPSJnODMwIj4KICAgPHBhdGggZmlsbD0iIzQ1RTM0NiIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIGlkPSJwYXRoNjk1IiBkPSJtMzQuMDQxNjYsNDQuNzY3ODc5YzAsMCA0NDkuMjQ4MTk2LC0xLjI2MjAwMSA0NDcuOTg2MjAyLC0xLjI2MjAwMWMtMS4yNjE5OTMsMCAtMS4yNjE5OTMsMjc2LjM2MzExIC0xLjI2MTk5MywyNzYuMzYzMTFsLTE4OS4yOTAwMDksMGwtMzEuNTQ5MDExLDE0Ny42NDcwMDNsLTQ0LjE2Njk5MiwtMTQ2LjM4NTAxbC0xODEuNzE4MTk3LDIuNTIzOTg3bDAsLTI3OC44ODcwODl6Ii8+CiAgIDxwYXRoIGZpbGw9IiM0NUUzNDYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBpZD0icGF0aDU1MiIgZD0ibTIyLjcxNDgsMzEuODIyOTAxYzAsMCA0NDkuMjQ4MjEzLC0xLjI2MjAwMSA0NDcuOTg2MTg5LC0xLjI2MjAwMWMtMS4yNjE5OTMsMCAtMS4yNjE5OTMsMjc2LjM2MzExMSAtMS4yNjE5OTMsMjc2LjM2MzExMWwtMTg5LjI5MDAwOSwwbC0zMS41NDg5ODEsMTQ3LjY0NzAwM2wtNDQuMTY3MDA3LC0xNDYuMzg1MDFsLTE4MS43MTgxOTksMi41MjM5ODdsMCwtMjc4Ljg4NzA5MXoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPg==';
var yellowIconDataUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB3aWR0aD0iNTMzLjMzMzMzMzMzMzMzMzMiIGhlaWdodD0iNTMzLjMzMzMzMzMzMzMzMzMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxnIGlkPSJnODMwIj4KICAgPHBhdGggZmlsbD0iI0Y1RjY0OCIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIGlkPSJwYXRoNjk1IiBkPSJtMzQuMDQxNjYsNDQuNzY3ODc5YzAsMCA0NDkuMjQ4MTk2LC0xLjI2MjAwMSA0NDcuOTg2MjAyLC0xLjI2MjAwMWMtMS4yNjE5OTMsMCAtMS4yNjE5OTMsMjc2LjM2MzExIC0xLjI2MTk5MywyNzYuMzYzMTFsLTE4OS4yOTAwMDksMGwtMzEuNTQ5MDExLDE0Ny42NDcwMDNsLTQ0LjE2Njk5MiwtMTQ2LjM4NTAxbC0xODEuNzE4MTk3LDIuNTIzOTg3bDAsLTI3OC44ODcwODl6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGNUY2NDgiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBpZD0icGF0aDU1MiIgZD0ibTIyLjcxNDgsMzEuODIyOTAxYzAsMCA0NDkuMjQ4MjEzLC0xLjI2MjAwMSA0NDcuOTg2MTg5LC0xLjI2MjAwMWMtMS4yNjE5OTMsMCAtMS4yNjE5OTMsMjc2LjM2MzExMSAtMS4yNjE5OTMsMjc2LjM2MzExMWwtMTg5LjI5MDAwOSwwbC0zMS41NDg5ODEsMTQ3LjY0NzAwM2wtNDQuMTY3MDA3LC0xNDYuMzg1MDFsLTE4MS43MTgxOTksMi41MjM5ODdsMCwtMjc4Ljg4NzA5MXoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPg==';
var orangeIconDataUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB3aWR0aD0iNTMzLjMzMzMzMzMzMzMzMzMiIGhlaWdodD0iNTMzLjMzMzMzMzMzMzMzMzMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxnIGlkPSJnODMwIj4KICAgPHBhdGggZmlsbD0iI0Y2OUI0NyIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIGlkPSJwYXRoNjk1IiBkPSJtMzQuMDQxNjYsNDQuNzY3ODc5YzAsMCA0NDkuMjQ4MTk2LC0xLjI2MjAwMSA0NDcuOTg2MjAyLC0xLjI2MjAwMWMtMS4yNjE5OTMsMCAtMS4yNjE5OTMsMjc2LjM2MzExIC0xLjI2MTk5MywyNzYuMzYzMTFsLTE4OS4yOTAwMDksMGwtMzEuNTQ5MDExLDE0Ny42NDcwMDNsLTQ0LjE2Njk5MiwtMTQ2LjM4NTAxbC0xODEuNzE4MTk3LDIuNTIzOTg3bDAsLTI3OC44ODcwODl6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGNjlCNDciIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBpZD0icGF0aDU1MiIgZD0ibTIyLjcxNDgsMzEuODIyOTAxYzAsMCA0NDkuMjQ4MjEzLC0xLjI2MjAwMSA0NDcuOTg2MTg5LC0xLjI2MjAwMWMtMS4yNjE5OTMsMCAtMS4yNjE5OTMsMjc2LjM2MzExMSAtMS4yNjE5OTMsMjc2LjM2MzExMWwtMTg5LjI5MDAwOSwwbC0zMS41NDg5ODEsMTQ3LjY0NzAwM2wtNDQuMTY3MDA3LC0xNDYuMzg1MDFsLTE4MS43MTgxOTksMi41MjM5ODdsMCwtMjc4Ljg4NzA5MXoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPg==';
var redIconDataUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB3aWR0aD0iNTMzLjMzMzMzMzMzMzMzMzMiIGhlaWdodD0iNTMzLjMzMzMzMzMzMzMzMzMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxnIGlkPSJnODMwIj4KICAgPHBhdGggZmlsbD0iI0Y2NDc0NyIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIGlkPSJwYXRoNjk1IiBkPSJtMzQuMDQxNjYsNDQuNzY3ODc5YzAsMCA0NDkuMjQ4MTk2LC0xLjI2MjAwMSA0NDcuOTg2MjAyLC0xLjI2MjAwMWMtMS4yNjE5OTMsMCAtMS4yNjE5OTMsMjc2LjM2MzExIC0xLjI2MTk5MywyNzYuMzYzMTFsLTE4OS4yOTAwMDksMGwtMzEuNTQ5MDExLDE0Ny42NDcwMDNsLTQ0LjE2Njk5MiwtMTQ2LjM4NTAxbC0xODEuNzE4MTk3LDIuNTIzOTg3bDAsLTI3OC44ODcwODl6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGNjQ3NDciIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBpZD0icGF0aDU1MiIgZD0ibTIyLjcxNDgsMzEuODIyOTAxYzAsMCA0NDkuMjQ4MjEzLC0xLjI2MjAwMSA0NDcuOTg2MTg5LC0xLjI2MjAwMWMtMS4yNjE5OTMsMCAtMS4yNjE5OTMsMjc2LjM2MzExMSAtMS4yNjE5OTMsMjc2LjM2MzExMWwtMTg5LjI5MDAwOSwwbC0zMS41NDg5ODEsMTQ3LjY0NzAwM2wtNDQuMTY3MDA3LC0xNDYuMzg1MDFsLTE4MS43MTgxOTksMi41MjM5ODdsMCwtMjc4Ljg4NzA5MXoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPg==';
var purpleIconDataUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB3aWR0aD0iNTMzLjMzMzMzMzMzMzMzMzMiIGhlaWdodD0iNTMzLjMzMzMzMzMzMzMzMzMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxnIGlkPSJnODMwIj4KICAgPHBhdGggZmlsbD0iI0FENDQ3OCIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIGlkPSJwYXRoNjk1IiBkPSJtMzQuMDQxNjYsNDQuNzY3ODc5YzAsMCA0NDkuMjQ4MTk2LC0xLjI2MjAwMSA0NDcuOTg2MjAyLC0xLjI2MjAwMWMtMS4yNjE5OTMsMCAtMS4yNjE5OTMsMjc2LjM2MzExIC0xLjI2MTk5MywyNzYuMzYzMTFsLTE4OS4yOTAwMDksMGwtMzEuNTQ5MDExLDE0Ny42NDcwMDNsLTQ0LjE2Njk5MiwtMTQ2LjM4NTAxbC0xODEuNzE4MTk3LDIuNTIzOTg3bDAsLTI3OC44ODcwODl6Ii8+CiAgIDxwYXRoIGZpbGw9IiNBRDQ0NzgiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBpZD0icGF0aDU1MiIgZD0ibTIyLjcxNDgsMzEuODIyOTAxYzAsMCA0NDkuMjQ4MjEzLC0xLjI2MjAwMSA0NDcuOTg2MTg5LC0xLjI2MjAwMWMtMS4yNjE5OTMsMCAtMS4yNjE5OTMsMjc2LjM2MzExMSAtMS4yNjE5OTMsMjc2LjM2MzExMWwtMTg5LjI5MDAwOSwwbC0zMS41NDg5ODEsMTQ3LjY0NzAwM2wtNDQuMTY3MDA3LC0xNDYuMzg1MDFsLTE4MS43MTgxOTksMi41MjM5ODdsMCwtMjc4Ljg4NzA5MXoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPg==';
var brownIconDataUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB3aWR0aD0iNTMzLjMzMzMzMzMzMzMzMzMiIGhlaWdodD0iNTMzLjMzMzMzMzMzMzMzMzMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxnIGlkPSJnODMwIj4KICAgPHBhdGggZmlsbD0iIzk5NDM1QiIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIGlkPSJwYXRoNjk1IiBkPSJtMzQuMDQxNjYsNDQuNzY3ODc5YzAsMCA0NDkuMjQ4MTk2LC0xLjI2MjAwMSA0NDcuOTg2MjAyLC0xLjI2MjAwMWMtMS4yNjE5OTMsMCAtMS4yNjE5OTMsMjc2LjM2MzExIC0xLjI2MTk5MywyNzYuMzYzMTFsLTE4OS4yOTAwMDksMGwtMzEuNTQ5MDExLDE0Ny42NDcwMDNsLTQ0LjE2Njk5MiwtMTQ2LjM4NTAxbC0xODEuNzE4MTk3LDIuNTIzOTg3bDAsLTI3OC44ODcwODl6Ii8+CiAgIDxwYXRoIGZpbGw9IiM5OTQzNUIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBpZD0icGF0aDU1MiIgZD0ibTIyLjcxNDgsMzEuODIyOTAxYzAsMCA0NDkuMjQ4MjEzLC0xLjI2MjAwMSA0NDcuOTg2MTg5LC0xLjI2MjAwMWMtMS4yNjE5OTMsMCAtMS4yNjE5OTMsMjc2LjM2MzExMSAtMS4yNjE5OTMsMjc2LjM2MzExMWwtMTg5LjI5MDAwOSwwbC0zMS41NDg5ODEsMTQ3LjY0NzAwM2wtNDQuMTY3MDA3LC0xNDYuMzg1MDFsLTE4MS43MTgxOTksMi41MjM5ODdsMCwtMjc4Ljg4NzA5MXoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPg==';

// Define the controller for this app module
app.controller('myCtrl', function ($scope, $http) {
  var map = new BMap.Map("allmap");
  var point = new BMap.Point(114.0579, 22.5431);
  map.centerAndZoom(point, 13);
  var points;
  $scope.date = new Date();
  $scope.hour = new Date();

  $scope.click = function () {
    $http({
      method: 'GET',
      url: 'http://localhost:5000/map/' + $scope.date + '/' + $scope.hour
    }).then(function (res) {
      console.log(res);
      points = res.data.data;
      console.log(points[1]);

      function addMarker(point) {
        var newPoint = new BMap.Point(point.logitude, point.latitude);
        var pm2d5 = (point.pm2d5 * 10) / 10;
        var iconDataUrl;

        if (pm2d5 <= 12) {
          iconDataUrl = greenIconDataUrl;
        } else if (pm2d5 <= 35.4) {
          iconDataUrl = yellowIconDataUrl;
        } else if (pm2d5 <= 55.4) {
          iconDataUrl = orangeIconDataUrl;
        } else if (pm2d5 <= 150.4) {
          iconDataUrl = redIconDataUrl;
        } else if (pm2d5 <= 250.4) {
          iconDataUrl = purpleIconDataUrl;
        } else {
          iconDataUrl = brownIconDataUrl;
        }

        var myIcon = new BMap.Icon(iconDataUrl, new BMap.Size(45, 45), {
          anchor: new BMap.Size(22.5, 45),
          imageOffset: new BMap.Size(0, 0),
          imageSize: new BMap.Size(45, 45),
        });
        var marker = new BMap.Marker(newPoint, {icon: myIcon});
        map.addOverlay(marker);
        var label = new BMap.Label(Math.round(pm2d5, {offset: new BMap.Size(0, 0)}));
        marker.setLabel(label);
        label.setStyle({
          borderColor:"#808080",
          color:"#010101",
          fontSize: "14px",
          fontWeight: "bold",
          backgroundColor:"#fdfdfd"
        });
      }

      points.forEach(point => addMarker(point));
    });
  }
});




