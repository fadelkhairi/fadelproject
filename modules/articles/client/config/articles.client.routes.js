'use strict';

// Setting up route
angular.module('articles').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('List_medical', {
        abstract: true,
        url: '/List_medical',
        template: '<ui-view/>'
      })
      .state('List_medical.list', {
        url: '',
        templateUrl: 'modules/articles/client/views/list-medical.client.view.html'
      })
      .state('List_medical.create', {
        url: '/create',
        templateUrl: 'modules/articles/client/views/create-medical.client.view.html',
        data: {
          roles: ['admin']
        }
      })
      .state('List_medical.view', {
        url: '/:articleId',
        templateUrl: 'modules/articles/client/views/view-medical.client.view.html',
        data:
        {
          roles : ['*']
        }
      })
      .state('List_medical.edit', {
        url: '/:articleId/edit',
        templateUrl: 'modules/articles/client/views/edit-medical.client.view.html',
        data: {
          roles: ['admin']
        }
      });
  }
]);
