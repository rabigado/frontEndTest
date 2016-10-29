(function () {
    "use strict"

    var module = angular.module("FrontEndTest");

    function controller(_,dataService,$routeParams,$window,$location){
        var model = this;

        model.$onInit = function(){
            model.folder=$routeParams.folderPath.replace(/-/g,'/');//get the path.
            dataService.getPath(model.folder).then(function(response){
                model.imgaes =  [];
                _.each(response.data.data.children,function(item){ //get the images from the folder
                    if(item.label === $routeParams.picture){
                        model.mainPicutre = item;
                    }else if(item.type === 1){
                        model.imgaes.push(item);
                    }
                });
                if(model.mainPicutre == null || model.imgaes == null){//main picture doesn't exist illegal picture name no pictures in the folder->illegal folder.
                    $location.path("/home");//route should redirect back to home if a path is not specified or not valid
                }
            }).catch(function(error){ //hendle errors
                if(error.status===599){
                    $window.alert("someone just discovered exactly what the Universe is for and why it is here, " +
                        "it has instantly disappear and was replaced by something even more bizarre and inexplicable," +
                        "so please refresh your page :)");
                }else {
                    $location.path("/"+error.status);//bye bye
                }
            })
        }

        model.switchImages=function(name){//make the swap
            for (var i = 0, l = model.imgaes.length; i < l; i++) {
                if (model.imgaes[i].label === name) {
                    var temp  = model.imgaes[i];
                    model.imgaes[i] = model.mainPicutre;
                    model.mainPicutre = temp;
                    return;
                }
            }
        }

    }

    module.component("picList",{
        templateUrl:"/components/picture-list.component/picture-list.component.html",
        controller: ['_','dataService','$routeParams','$window','$location',controller],
        controllerAs:"model"
    });

}())