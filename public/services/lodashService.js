/**
 * Created by DarthBane on 28-Oct-16.
 */

(function () {
    var app = angular.module("FrontEndTest");

    var lodashService = function ($window) {
        return $window._;
    }


    app.factory('_',['$window',lodashService]);
}())
