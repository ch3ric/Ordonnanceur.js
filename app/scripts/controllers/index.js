'use strict';

app.controller('IndexCtrl', function ($scope, Workflow) {
    $scope.workflows = Workflow.get();

});