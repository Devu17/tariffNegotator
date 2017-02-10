import angular from 'angular';
import uiRouter from 'angular-ui-router';
import storageCostComponent from './storageCost.component';

let storageCostModule = angular.module('storageCost', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('app.storageCost', {
      url: '/storageCost',
      component: 'storageCost'
    });
})

.component('storageCost', storageCostComponent)

.name;

export default storageCostModule;
