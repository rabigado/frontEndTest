(function () {
    "use strict"

    var module = angular.module("FrontEndTest");

    function NodeController(_,dataService,$location,$window){
        var model = this;
        model.showList=false;
        model.$onInit = function(){
            if(!model.item.label){
                model.item={label:"root",path:'root',type:0}
            }
            model.class=(model.item.type==0?"node-folder":"node-image");
        }
        model.loadSubItems = function(item) {
            if (item.type == 0) {
                if(!item.subItems) {
                    dataService.getPath((item.path ? item.path : item.label)).then(function (response) {
                        _.each(response.data.data.children, function (i) {
                            i.path = (model.item.path ? model.item.path : "root") + "/" + i.label;
                        });
                        item.subItems = response.data.data.children;
                        model.class="current-node";
                        model.showList=!model.showList;
                    }).catch(function(error){ //error handler
                        if(error.status===599){
                            $window.alert("someone just discovered exactly what the Universe is for and why it is here, " +
                                "it has instantly disappear and was replaced by something even more bizarre and inexplicable," +
                                "so please try again :)");
                        }else {
                            $location.path("/"+error.status);//bye bye
                        }
                    });
                }else{
                    model.class=(item.type == 0 ? "node-folder" : "node-image");
                    model.showList =! model.showList;
                }
            }else{
                $location.path('/picture/'+item.path.slice(0,item.path.indexOf("picture")-1).replace(/\//g,'-')+"/"+ item.path.slice(item.path.indexOf("picture")));
            }
        }
    }
    module.component("itemNode",{
        templateUrl:"/components/node.component/node.component.html",
        controller: ['_','dataService','$location','$window',NodeController],
        bindings: {
            item: '=',

        }
    });

}())