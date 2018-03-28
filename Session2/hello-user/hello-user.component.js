app.component('helloUser', {
  templateUrl: 'hello-user/hello-user.template.html',
  controller: function () {
    //this = $ctrl
    this.user = 'test...this works'
  }
})