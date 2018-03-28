app.component('helloUser', {
  templateUrl: 'hello-user/hello-user.template.html',
  controller: ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {
    $http.get('http://www.findfreewifi.co.za/publicjson/locationsnear?lat=-26.04375187772609&lng=28.09076412071545')
      .then(function (response) {
        //success
        console.log('response received')
        console.log(typeof response.data.data)
        $scope.data = response.data.data
        $scope.filteredData = $scope.data
      }, function (response) {
        //failure
      })

    $scope.data = []
    $scope.filteredData = []
    $scope.search = {}

    $scope.$watch('search', function(newValue, oldValue) {
      $scope.filteredData = $scope.data.filter(function(item) {
        return Object.keys($scope.search).reduce(function (acc, key) {
          return item.Address.indexOf($scope.search) !== -1
        })
      })
    })
  }]
})