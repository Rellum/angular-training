var app = angular.module('trainingApp', [])

app.service('coolService', function() {
  this.changeName = function (name) {
    return 'no longer ' + name
  }
})