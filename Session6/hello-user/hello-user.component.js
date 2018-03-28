app.component('helloUser', {
  templateUrl: 'hello-user/hello-user.template.html',
  controller: helloUserController 
})

function helloUserController($scope, $rootScope) {
  $scope.myName = 'helloUser'
  $scope.ticks = 0

  $scope.tick = function() {
    $scope.ticks++
    $rootScope.$broadcast('ticked', {data: $scope.ticks })
  }
}
