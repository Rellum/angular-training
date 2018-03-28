app.component('helloUser', {
  templateUrl: 'hello-user/hello-user.template.html',
  controller: helloUserController 
})

function helloUserController($scope) {
  $scope.myName = 'helloUser'
}
