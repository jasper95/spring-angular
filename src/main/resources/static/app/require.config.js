(function(config){
    if(window.hasOwnProperty('require')){
        require.config(config);
    } else {
        window.require = config;
    }
})({
    paths: {
        angular : "../vendor/angular.min"
    }
});