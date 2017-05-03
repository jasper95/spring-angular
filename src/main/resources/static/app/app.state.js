define([], function(){
    'use strict';

    var dependencies = ["$stateProvider"];

    var StateConfig = function($stateProvider){
        var states = [
            {
                name: 'hello',
                url: '/hello',
                component: 'hello'
            },
            {
                name: 'about',
                url: '/about',
                component : 'about'
            },
            {
                name: 'people',
                url: '/people',
                component: 'people',
                resolve: {
                    people: ['User', function(User){
                        return User.query();
                    }]
                }
            },
            {
                name: 'person',
                url: '/people/{username}',
                component: 'person',
                resolve: {
                    person: ['User', '$transition$', function(User, $transition$){
                        return User.get( {username: $transition$.params().username})
                    }]

                }
            }
        ];
        states.forEach(function(state){
            $stateProvider.state(state);
        });
    };

    return dependencies.concat(StateConfig)
});