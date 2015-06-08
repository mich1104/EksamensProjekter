/**
 * Created by Michael on 27/04/15.
 */
module.exports = function(config) {
    config.set({
        basePath : '../',
        frameworks: ['jasmine'],
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'app.js',
            'test/*.js'
        ],
        exclude: [],
        preprocessors: {},
        plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
        ],
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome']
    });
};
