'use strict';

app.factory('Workflow', function ($resource) {

    return $resource('http://localhost:8080/api/workflows/:id',
        { },{
            get :{method: 'get', isArray:true},
            deleteP : {method: 'delete', isArray:true},
            save: {method: 'post', isArray:false}

        });

});