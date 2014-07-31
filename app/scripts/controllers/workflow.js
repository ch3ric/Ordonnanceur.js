'use strict';

app.controller('WorkflowCtrl', function ($scope, $routeParams, Workflow) {
    $scope.workflow = Workflow.get({id: $routeParams.id});

});