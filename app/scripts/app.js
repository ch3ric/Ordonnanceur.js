'use strict';

var app = angular.module('OrdonnanceurApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
]);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/index.html',
            controller: 'IndexCtrl'
        })
        .when('/workflow/:id', {
            templateUrl: 'views/workflow.html',
            controller: 'WorkflowCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});
