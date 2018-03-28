app.component('helloUser', {
  templateUrl: 'hello-user/hello-user.template.html',
  controller: function ($scope) {
    $scope.attendees = [
      {
        name: 'Person 1'
      }, {
        name: 'Person 2'
      }, {
        name: 'Person 3'
      }
    ]

    $scope.hasAValue = true
    $scope.myColor = 'blue'
    $scope.myName = 'simon'

    $scope.changeValue = function(evt) {
      evt.preventDefault()
      $scope.myName = "new value"
    }

    $scope.toggleValue = function(evt) {
      evt.preventDefault()
      $scope.hasAValue = !$scope.hasAValue
    }
  }
})


