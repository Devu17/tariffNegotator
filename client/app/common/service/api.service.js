export default class Api{
    constructor(CommonConstants,$http){
            'ngInject';
        this._commConst = CommonConstants;
        this._$http = $http;

    }
    getTariffNegotiation(callback,options) {
      return this._$http.get(`${this._commConst.api}api/tariff-negotiator/`, { params: options }).then(callback);
    }
getCostComparision(callback,options)
{
  return this._$http.get(`${this._commConst.api}api/storage/`,{ params: options }).then(callback);
}
}
