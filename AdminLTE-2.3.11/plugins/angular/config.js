//    引入angular
angular.module("myapp" , ['ui.router'])
    .config(function ( $stateProvider , $urlRouterProvider) {
        $urlRouterProvider.when("", "/tab/page1");
        $stateProvider
            .state("tab", {
                url: "/tab",
                views: {
                    "": {
                        templateUrl: "tab.html"
                    },
                }
            })
            .state("tab.page1", {
                url: "/page1",
                views: {
                    "one": {
                        templateUrl: "page1.html"
                    },
                }
            })
            .state("tab.page2", {
                url: "/page2",
                views: {
                    "two": {
                        templateUrl: "page2.html"
                    },
                }
            })
    });