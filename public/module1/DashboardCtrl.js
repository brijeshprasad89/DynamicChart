angular.module('DashboardCtrl', [])
.controller('DashboardCtrl', function($scope, $http, $timeout,$window) {

  // Function to get the data
  $scope.getData = function(){
    $http.get('./MOCK_DATA_roll.json')
      .success(function(data, status, headers, config) {

$.each(data, function (i, point) {
    point.y = point.roll_number;
    point.x = point.roll_number;
});


var chart = new Highcharts.Chart({

    chart: {
        renderTo: 'container',
        type: 'pie',
        
    },
 plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            point: {
                events: {
                    click: function(event) {
                        // alert("CLicked");
                        $window.open("dashboard.html", "popup", "width=300,height=200,left=10,top=150");
                    }
                }
            },
            showInLegend: false,
            dataLabels: {
                enabled: true,
                color: '#000000',
                connectorColor: '#000000',

                formatter: function() {
                    return '<b>' + this.point.first_name + '</b>: ' + this.point.roll_number;
                }

            }
        }
    },
tooltip: {
        formatter: function() {
          return '<b>'+ this.point.roll_number +'</b><br/>'+
          this.point.first_name +' '+ this.point.last_name;
        }
      },
    series: [{
        data: data
    }]



});


    //     var options = {
    //   chart: {
    //     renderTo: 'container',
    //     type: 'line',
    //     marginRight: 130,
    //     marginBottom: 25
    //   },
    //   title: {
    //     text: 'hits by time',
    //     x: -20 //center
    //   },
    //   subtitle: {
    //     text: 'Source:',
    //     x: -20
    //   },
    //   xAxis: {
    //     categories: [/*'8am', '9am', '10am', '11am', '12pm', '1pm',
    //     '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'*/]
    //   },
    //   yAxis: {
    //     title: {
    //       text: 'Hits'
    //     },
    //     plotLines: [{
    //       value: 1,
    //       width: 10,
    //       color: '#888888'
    //     }]
    //   },
    //   tooltip: {
    //     formatter: function() {
    //       return '<b>'+ this.series.first_name +'</b><br/>'+
    //       this.x +': '+ this.y;
    //     }
    //   },
    //   legend: {
    //     layout: 'vertical',
    //     align: 'right',
    //     verticalAlign: 'top',
    //     x: -10,
    //     y: 100,
    //     borderWidth: 0
    //   },
    //   series: []
    // };

    // options.series = data; 
    // chart = new Highcharts.Chart(options);
    // chart.render();
      });
  };

   // $scope.getData()

  // Function to replicate setInterval using $timeout service.
  $scope.intervalFunction = function(){
    // $timeout(function() {
    //   $scope.getData();
    //   $scope.intervalFunction();
    // }, 3000)
     $scope.getData();
  };

  // Kick off the interval
  $scope.intervalFunction();

});