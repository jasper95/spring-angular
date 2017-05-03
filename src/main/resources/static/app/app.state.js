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
                name: 'people.person',
                url: '/{username}',
                component: 'person',
                resolve: {
                    person: ['people', '$stateParams', function(people, $stateParams){
                        return people.find(function(person){
                            return person.username === $stateParams.username;
                        })
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