app.component('helloUser', {
  templateUrl: 'hello-user/hello-user.template.html',
  controller: function ($scope) {
    $scope.myName = 'helloUser'
  }
})