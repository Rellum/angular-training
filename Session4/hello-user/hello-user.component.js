app.component('helloUser', {
  templateUrl: 'hello-user/hello-user.template.html',
  controller: function ($scope) {
    $scope.attendees = [
      {
        name: 'Person 1',
        data: 'Other data 1'
      }, {
        name: 'Person 2',
        data: 'Other data 2'
      }, {
        name: 'Person 3',
        data: 'Other data 3'
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

    $scope.handleAttendeeClick = function(evt, attendee) {
      evt.preventDefault()
      alert(attendee.data)
    }
  }
})


