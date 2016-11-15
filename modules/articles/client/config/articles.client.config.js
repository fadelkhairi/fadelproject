'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
  function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Medical Records',
      state: 'List_medical',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'List_medical', {
      title: 'List Medical Records',
      state: 'List_medical.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'List_medical', {
      title: 'Create Medical Records',
      state: 'List_medical.create',
      roles: ['admin']
    });
  }
]);
