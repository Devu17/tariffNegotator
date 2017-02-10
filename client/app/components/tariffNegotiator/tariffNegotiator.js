import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tariffNegotiatorComponent from './tariffNegotiator.component';

let tariffNegotiatorModule = angular.module('tariffNegotiator', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app.tariffNegotiator', {
      url: '/tariffNegotiator',
      component: 'tariffNegotiator'
    });
})



.component('tariffNegotiator', tariffNegotiatorComponent)

.name;

export default tariffNegotiatorModule;
