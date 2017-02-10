export default class User{
    constructor(CommonConstants,$http,$state){
            'ngInject';
        this._commConst = CommonConstants;
        this._$http = $http;
        this._$state = $state;
        this.current = null;
    }
     attemptAuth(credentials) {
        return this._$http({
            url: this._commConst.api+'/users/login',
      method: 'POST',
      data: {
        user: credentials
      }
      }).then(
        // On success...
        (res) => {
            // Set the JWT token
            this._JWT.save(res.data.user.token);
            // Store the user's info for easy lookup
            this.current = res.data.user;
            alert("autherized");
            return res;
        }
     );
    }
}