app.component('helloUser', {
  templateUrl: 'hello-user/hello-user.template.html',
  controller: ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {
    $timeout(function() {
      $scope.test = 'timer done!'
    }, 2000)

    $scope.test = 'works?'
  }]
})


