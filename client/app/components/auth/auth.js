import angular from 'angular';
import uiRouter from 'angular-ui-router';
import authComponent from './auth.component';

let authModule = angular.module('auth', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('app.login', {
      url: '/login',
      component: 'auth',
      title:'login'
    });
})

.component('auth', authComponent)

.name;

export default authModule;