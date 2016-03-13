'use strict';

app
    .controller('itemList', function ($rootScope, $scope, itemProvider, $location) {
        $scope.items = itemProvider.getItems();

        $scope.removeItem = function (item) {
            itemProvider.remove(item);
        }

        $scope.editItem = function (item) {
            //On stocke l'item dans le rootscope pour l'avoir disponible partout
            $rootScope.itemToEdit = item;
            $location.url('/items/edit');
        }
    })

    .controller('itemCreate', function ($scope, categoryProvider, itemProvider) {
        $scope.categories = categoryProvider.getCategories();

        $scope.createItem = function (item) {
            itemProvider.create(item);
        }
    })

    .controller('itemEdit', function ($rootScope, $scope, categoryProvider, itemProvider, $location) {
        $scope.categories = categoryProvider.getCategories();
        //On recharge item depuis le rootscope
        $scope.item = $rootScope.itemToEdit;

        $scope.createItem = function (item) {
            itemProvider.update(item);
            $location.url('/items/');
        }
    })
;