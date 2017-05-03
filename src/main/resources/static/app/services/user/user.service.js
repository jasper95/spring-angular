define([], function(){
    'use strict';

    var dependencies = ["$resource"];
    var UserService = function($resource){
        return $resource('api/users/:username', {}, {
            'query': {method: 'GET', isArray: true},
            'get': { method: 'GET' },
            'save': { method:'POST' },
            'update': { method:'PUT' },
            'delete':{ method:'DELETE'}
        })
    };
    return dependencies.concat(UserService)
});