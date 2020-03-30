
(function(){
    'use strict';

    angular.module('app',['ngRoute','ngDialog','ngAnimate']).
    config(function($routeProvider){
        $routeProvider.
            when("/",{
                templateUrl: 'views/main.html'
            }).
            when("/skill",{
                templateUrl:'views/skills.html'
            }).
            when(
                "/experiencia",{
                    templateUrl:'views/experiencia.html'
                }
            ).
            when(
                "/aboutMe",
                {
                    templateUrl:'views/aboutMe.html',
                    controller: 'ContactameController'
                }
            ).
            when(
                "/herramientas",
                {
                    templateUrl:'views/herramientas.html'
                }
            )
    })
})();