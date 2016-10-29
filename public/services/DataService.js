/**
 * Created by DarthBane on 28-Oct-16.
 */
(function () {
    var app = angular.module("FrontEndTest");

    var dataService =   function($http) {

        var baseUrl = 'http://dvns.me/yaniv/clientest/public/explorePictures';
        var headers={'X-TOKEN':'2d4e69f4823176197ccf41caa5ee6456'}
        return {
            getRoot: function() {
                return $http({method:"GET",
                    url:baseUrl + '?path=root',
                    headers:headers
                });
            },
            getPath: function(path) {
                return $http(
                    {method:"GET",
                        url:baseUrl + '?path='+path,
                        headers:headers
                    }
                )
            }

        };
    };

    app.factory('dataService',['$http',dataService]);

}());