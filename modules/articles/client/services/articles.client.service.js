'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('articles').factory('Articles', ['$resource',
  function ($resource) {
    return $resource('api/medical_records/:medical_recordsId', {
      medical_recordsId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
