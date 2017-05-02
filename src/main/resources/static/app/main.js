require.config({
    paths : {
        "domReady" : "../vendor/domReady/domReady",
        "angular" : "../vendor/angular/angular.min",
        "ui-router" : "../vendor/angular-ui-router/release/angular-ui-router.min",
        "ng-resource" : "../vendor/angular-resource/angular-resource.min",
        "ng-storage" : "../vendor/ngStorage/ngStorage.min"
    },

    shim : {
        angular: {
            exports: "angular"
        },
        "ui-router" : {
            deps : ["angular"]
        },
        "ng-resource" : {
            deps : ["angular"]
        },
        "ng-storage" : {
            deps : ["angular"]
        }
    },
    deps : ['./boot']
});