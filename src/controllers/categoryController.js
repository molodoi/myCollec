'use strict';

app
    .controller('categoryList', function ($rootScope, $scope,  categoryProvider, itemProvider, $location) {
        $scope.categories = categoryProvider.getCategories();
        var items = itemProvider.getItems();

        $scope.removeCategory = function (category) {

            var categoryHasItems = false, i = 0,arrLen = items.length;
            for (; i < arrLen; i++) {
                if(items[i]['category_id'] === category.id) {
                    categoryHasItems = true;
                    return;
                }
            }

            //Si la category n'a pas d'enfant on peut la remove
            if(!categoryHasItems){
                categoryProvider.remove(category);
            }

        }

        $scope.editCategory = function (category) {
            //On stocke la category dans le rootscope pour l'avoir disponible partout
            $rootScope.categoryToEdit = category;
            $location.url('/categories/edit');
        }
    })

    .controller('categoryCreate', function ($scope, categoryProvider) {

        $scope.createCategory = function (category) {
            categoryProvider.create(category);
        }

    })

    .controller('categoryEdit', function ($rootScope, $scope, categoryProvider, $location) {
        //On recharge item depuis le rootscope
        $scope.category = $rootScope.categoryToEdit ;

        $scope.createCategory = function (category) {
            categoryProvider.update(category);
            $location.url('/categories/');
        }
    })
;