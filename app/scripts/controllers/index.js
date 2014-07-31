'use strict';

app.controller('IndexCtrl', function ($scope, Workflow) {
    $scope.workflows = Workflow.get();

    $scope.workflow = {name: '', max_time: '300'};

    $scope.submitWorkflow = function () {
        Workflow.save($scope.workflow, function (ref) {
            $scope.workflows = Workflow.get();
            $scope.workflow = {name: '', max_time: '300'};
        });
    };

});