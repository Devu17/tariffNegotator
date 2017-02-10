import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import Api from './service/api.service';
import constants from './constants/common.constants';
import UserService from './service/user.service';


let commonModule = angular.module('app.common', [
  Navbar,
  Hero
])
.constant('CommonConstants', constants)
.service('User',UserService)
.service('Apiname',Api)
.name;
export default commonModule;
