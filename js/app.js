(function(){

var app = angular.module('snafuApp', ['ui.bootstrap','ngMap','google-maps']);

app.controller('SnafuController',["$scope", "$http",function($scope, $http){
    $scope.lon = "";
    $scope.lat = "";
    $scope.basket = 0;
    $scope.city = "";
    $scope.groupsx = [];
    $scope.weather = {};
    $scope.traffic = {};
    // $scope.group["title"] = "Weather information";
    // $scope.groupsx.push($scope.group);
     // $scope.text = 'hello - city me!';
    $scope.map = {center:
              {
              latitude: 0,
              longitude: 0
                },
                zoom: 11
              }
    $scope.marker = {
            id:0,
            coords: {
                latitude: 51,
                longitude: 0.1275
            }
        }
    // $scope.getWeather("London");

   
// Map code
    // $scope.list = [];
      $scope.text = 'London';

        // $http.get("http://api.openweathermap.org/data/2.5/weather?q=London").success(function(data){
        // $scope.weatherData = data;
        // $scope.weatherDescription = $interpolate('Description: {{data.weather[0].description}}');
        // $scope.weatherTemp = $interpolate('Temp: {{data.main.temp/10}}');
        //  })


      $scope.submit = function() {
      console.log("here")
        if ($scope.text) {
        $scope.getWeather($scope.text);
          console.log("here2")
          console.log($scope.lon)
        // $scope.getCenter($scope.lon, $scope.lat);    
      }
    }; 

      $scope.getWeather = function(city){
        var city = "SW1";
        var httpCall = "";

        console.log(city)

        httpCall = "http://www.myweather2.com/developer/forecast.ashx?uac=gCkW7nA4uM&output=json&query="+city;

     

        console.log(httpCall)

        $http.get(httpCall).success(function(data){
        console.log("here3")
        console.log(data)
        $scope.weatherData = data;
        $scope.lon = data.coord.lon;
        $scope.lat = data.coord.lat;
        $scope.setCenter($scope.lat,$scope.lon)
        $scope.setMarker($scope.lat,$scope.lon)
        console.log($scope.lat)
        $scope.weatherDescription = data.weather[0].description;
        $scope.temp = data.main.temp - 272;
         $scope.temp = Math.round($scope.temp);

        console.log($scope.temp)
        $scope.weather["title"] = "Weather information";
        $scope.weather["content"] = $scope.weatherDescription;
        $scope.weather["temp"] = $scope.temp;

        $scope.traffic["title"] = "Traffic information";
        $scope.traffic["content"] = "placeholder"
        $scope.traffic["accident"] = "placeholder"


        $scope.groupsx.push($scope.weather)
          $scope.groupsx.push($scope.traffic)
        console.log($scope.groupsx[0])


        // $scope.weatherDescription = $interpolate('Description: {{data.weather[0].description}}');
        // $scope.weatherTemp = $interpolate('Temp: {{data.main.temp/10}}');
      })
    }

  $scope.setCenter = function (lat, lon) {
      console.log("here4")
      console.log(lat)

      console.log(lon)

          $scope.map.center =  {
              latitude: lat,
              longitude: lon
                }
              }

     $scope.setMarker = function(lat,lon){
        $scope.marker = {
            id:0,
            coords: {
                latitude: 51,
                longitude: 0.1275
            }
        }

     }         


    $scope.oneAtATime = true;
  

      // $scope.weatherDescription = $scope.weatherData.weather[0].description;
// Accordian code
    $scope.oneAtATime = true;

    // $scope.groups = [
    //       {
    //         title: 'Weather information',
    //         content: 'some '
    //       },
    //       {
    //         title: 'Traffic Information',
    //         content: 'Dynamic Group Body - 2'
    //       }
    //     ];

  // $scope.items = ['{{$scope.weatherDescription}}', '{{$scope.weatherTemp}}', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
//initial setup of the map and weather information
   city = "London";
    console.log(city); 
    $scope.getWeather(city);
     // $scope.marker = {
     //        id:0,
     //        coords: {
     //            latitude: 51,
     //            longitude: 0.1275
     //        }
     //    }

}]);



})();