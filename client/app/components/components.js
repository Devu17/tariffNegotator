import angular from 'angular';
import Home from './home/home';
//import About from './about/about';
import Auth from './auth/auth';
import tariffNegotiator from './tariffNegotiator/tariffNegotiator';
import storageCost from './storageCost/storageCost';
let componentModule = angular.module('app.components', [
  Home,
  tariffNegotiator,

  storageCost,
  Auth
])

.name;

export default componentModule;
