'use strict';
angular.module('login').controller('LogoutCtrl', function (store, $state) {
  store.set('token', null);
  $state.go('login');
});
