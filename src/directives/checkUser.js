'use strict';

app
    .directive('checkUser', ['$rootScope', '$location', 'userProvider', function ($root, $location, userProvider) {
        return {
            link: function(){
                $root.$on('$routeChangeStart', function(event, currRoute){
                    var auth = userProvider.getAuthentified();
                    if(currRoute.access && !currRoute.access.isFree && !auth){
                        $location.url('/');
                    }
                })
            }
        }
    }])
;
