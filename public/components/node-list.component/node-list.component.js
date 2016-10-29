(function () {
    "use strict"

    var module = angular.module("FrontEndTest");

    function controller(){
        var model = this;

        model.$onInit = function(){
            if(model.item===null){
                model.item={label:"root",path:null,type:0}
            }
        }

    }

    module.component("nodeList",{
        templateUrl:"/components/node-list.component/node-list.component.html",
        bindings: {
            items: '='
        },
        controller: [controller],
        controllerAs:"model"

    });

}())