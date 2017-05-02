define(['angular', 'ui-router', 'ng-resource', 'ng-storage'], function(angular){
    'use strict';

    return angular.module('app', [
        'ngResource',
        'ngStorage',
        'ui.router'
    ]);

});