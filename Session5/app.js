var app = angular.module('trainingApp', [])

app.service('coolService', function() {
  this.changeName = function (name) {
    return 'no longer ' + name
  }
})

app.filter('translateThis', function () {
  return function (txt) {
    return "translated: " + txt
  }
})