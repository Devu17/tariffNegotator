class AuthController {
  constructor(User,$state) {
    'ngInject';
    this.name = 'auth';
    this._$state = $state;
    this.title = $state.current.title;
    this.user = User;
  }
  submitForm () {
    this.user.attemptAuth(this.formData)
     this._$state.go('app.home');
  }
}

export default AuthController;
