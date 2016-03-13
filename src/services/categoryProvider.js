'use strict';

/*var categories = [
    {'id': 1, 'name': 'films'},
    {'id': 2, 'name': 'musiques'}
];*/

app.service('categoryProvider', function ($firebaseArray) {

    var myFirebaseRef = new Firebase("https://mymusiccollec.firebaseio.com/");

    var categoriesRef = myFirebaseRef.child("categories");
    var categories = $firebaseArray(categoriesRef);
    //Insérer les données categories dans Firebase avec :
    //categoriesRef.set(categories);

    this.getCategories = function () {
        return categories;
    }

    this.create = function (category) {
        var newCat = { 'id': categories.length + 1, 'name': category.name};
        var newCatRef = categoriesRef.push();
        newCatRef.set(newCat);
    }

    this.update = function (category) {
        categories.$save(category);
    }

    this.remove = function (category) {
        categories.$remove(category);
    }
});