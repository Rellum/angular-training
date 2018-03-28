app.component('helloUser', {
  templateUrl: 'hello-user/hello-user.template.html',
  controller: ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {
    $http.get('http://www.findfreewifi.co.za/publicjson/locationsnear?lat=-26.04375187772609&lng=28.09076412071545')
    .then(function (response) {
      //success
      console.log(response.data.data)
    }, function (response) {
      //failure
    })
  }]
})
