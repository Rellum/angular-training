app.component('helloUser', {
  templateUrl: 'hello-user/hello-user.template.html',
  controller: ['$scope', '$http', 'coolService', function ($scope, $http, coolService) {
    $scope.birthday = new Date()
  }]
})