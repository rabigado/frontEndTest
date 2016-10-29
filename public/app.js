
var app = angular.module("FrontEndTest",["ngRoute"])
    .constant('_', window._)
    .run(function ($rootScope) {
        $rootScope._ = window._;
    });

app.config(function($routeProvider){
    $routeProvider
        .when("/home",{template:"<item-node  item={label:'root',path:null,type:0} on-press='model.loadSubItems(item)' ></item-node>"})
        .when("/picture/:folderPath/:picture",{template:"<pic-list></pic-list>"})
        .when("/404",{template:'<div><h1>error 404 my balls not found<p>error...error...error</p></h1><iframe width="560" height="315" src="https://www.youtube.com/embed/SVPWpE_SlUc?autoplay=1" frameborder="0" ></iframe></div>'})
        .when("/500",{template:'<div><h1>error 500 my server balls...<p>error...error...error</p></h1><iframe width="560" height="315" src="https://www.youtube.com/embed/SVPWpE_SlUc?autoplay=1" frameborder="0" ></iframe></div>'})
        .when("/401",{template:'<div><h1>error 401 my server authorization...<p>error...error...error</p></h1><iframe width="560" height="315" src="https://www.youtube.com/embed/SVPWpE_SlUc?autoplay=1" frameborder="0" ></iframe></div>'})
        .otherwise({redirectTo:"/home"});//route should redirect back to home if a path is not specified or not valid
});

