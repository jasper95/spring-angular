define(['app.module'], function(app){
    'use strict';

    return {
        templateUrl:  'app/hello/hello.template.html',
        controller: function() {
            this.greeting = 'hello';
            this.toggleGreeting = function() {
                this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
            }
        }
    };

});