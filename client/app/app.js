
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngFileUpload from 'ng-file-upload';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
// import ngCsv from 'ng-csv';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    ngFileUpload
    // ngCsv
  ])
  .config(($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
    $stateProvider
      .state('app', {
        abstract: true,
        component:'app'
      });

      $urlRouterProvider.otherwise('/tariffNegotiator');
  })
  .component('app',AppComponent)
