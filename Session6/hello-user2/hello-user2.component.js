app.component('helloUser2', {
  templateUrl: 'hello-user2/hello-user2.template.html',
  controller: function ($scope, $rootScope) {
    $scope.myName = 'helloUser2'
    $scope.ticks = 0

    $rootScope.$on('ticked', function(evt, arg) {
      $scope.ticks = arg.data
    })
  }
})