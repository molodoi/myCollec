'use strict';

app
    .controller('appController', function ($rootScope, userProvider, $scope, $location) {
        $rootScope.session = userProvider.getAuthentified();

        $rootScope.loginUser = function (user) {
            userProvider.login(user, function(data){
                if(data){
                    $rootScope.session = data;
                    $location.path('/').replace();
                    $scope.$apply();
                }else{
                    $rootScope.alert = 'nok';
                    $location.path('/').replace();
                    $scope.$apply();
                }
            });
        }

        $rootScope.logoutUser = function () {
            userProvider.logout();
            $location.url('/');
        }
    })
;