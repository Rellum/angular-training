app.component('helloUser', {
  templateUrl: 'hello-user/hello-user.template.html',
  controller: ['$scope', '$http', 'coolService', function ($scope, $http, coolService) {
    var newName = coolService.changeName("simon")
    console.log(newName)

    $scope.newName = newName
  }]
})