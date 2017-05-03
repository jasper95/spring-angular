require.config({
    paths : {
        "domReady" : "../vendor/domReady/domReady",
        "angular" : "../vendor/angular/angular",
        "ui-router" : "../vendor/angular-ui-router/release/angular-ui-router",
        "ng-resource" : "../vendor/angular-resource/angular-resource",
        "ng-storage" : "../vendor/ngStorage/ngStorage"
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