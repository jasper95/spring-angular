define(['angular',
        'app.state',
        'hello/hello.component',
        'about/about.component',
        'people/people.component',
        'person/person.component',
        'services/user/user.service',
        'ui-router',
        'ng-resource',
        'ng-storage'],
        function(angular, StateConfig, HelloComponent, AboutComponent,  PeopleComponent, PersonComponent, User){
            'use strict';

            return angular.module('app', [
                'ngResource',
                'ngStorage',
                'ui.router'
            ])  .config(StateConfig)
                .factory('User', User)
                .component('person', PersonComponent)
                .component('people', PeopleComponent)
                .component('hello', HelloComponent)
                .component('about', AboutComponent);
        }
);