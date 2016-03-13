'use strict';

app.config(
    function ($routeProvider) {
        $routeProvider

            /* --------------------
             :: Bootstrap Default Route
             -------------------- */
            .when('/', {
                controller: 'homeIndex',
                templateUrl: 'views/home/index.html',
                access:{
                    isFree: true
                }
            })

            /* --------------------
             :: Item Routes
             -------------------- */
            .when('/items/', {
                controller: 'itemList',
                templateUrl: 'views/item/list.html',
                access:{
                    isFree: false
                }
            })
            .when('/items/new', {
                controller: 'itemCreate',
                templateUrl: 'views/item/create.html',
                access:{
                    isFree: false
                }
            })
            .when('/items/edit', {
                controller: 'itemEdit',
                templateUrl: 'views/item/create.html',
                access:{
                    isFree: false
                }
            })

            /* --------------------
            :: Category Routes
            -------------------- */
            .when('/categories/', {
                controller: 'categoryList',
                templateUrl: 'views/category/list.html',
                access:{
                    isFree: false
                }
            })
            .when('/categories/new', {
                controller: 'categoryCreate',
                templateUrl: 'views/category/create.html',
                access:{
                    isFree: false
                }
            })
            .when('/categories/edit', {
                controller: 'categoryEdit',
                templateUrl: 'views/category/create.html',
                access:{
                    isFree: false
                }
            })

            /* --------------------
             :: User Routes
             -------------------- */
            .when('/users', {
                controller: 'userList',
                templateUrl: 'views/user/list.html',
                access:{
                    isFree: false
                }
            })
            .when('/users/new', {
                controller: 'userCreate',
                templateUrl: 'views/user/create.html'
            })
            .when('/users/profile', {
                controller: 'userProfile',
                templateUrl: 'views/user/profile.html',
                access:{
                    isFree: false
                }
            })
            .when('/users/edit', {
                controller: 'userEdit',
                templateUrl: 'views/user/create.html',
                access:{
                    isFree: false
                }
            })

            /* --------------------
             :: Otherwise
             -------------------- */
            .otherwise({
                redirectTo: '/'
            });
    }
);