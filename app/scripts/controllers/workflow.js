'use strict';

app.controller('WorkflowCtrl', function ($scope, $routeParams, Workflow) {
    $scope.workflows = Workflow.get({id: $routeParams.id});

});