var app = angular.module('trainingApp', [])

app.run(function($rootScope) {
  $rootScope.myRootName = 'root name here'
})