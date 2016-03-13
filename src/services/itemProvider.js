'use strict';

/*var items = [
    {'name': 'Django Unchained', 'category_id': 1},
    {'name': 'Forrest Gump', 'category_id': 1}
]*/

app.service('itemProvider', function ($firebaseArray) {

    var myFirebaseRef = new Firebase("https://mymusiccollec.firebaseio.com/");

    var itemRef = myFirebaseRef.child("items");
    var items = $firebaseArray(itemRef);
    //Insérer les données items dans Firebase avec :
    //itemRef.set(items);

    this.getItems = function () {
        return items;
    }

    this.create = function (item) {
        var newItemRef = itemRef.push();
        newItemRef.set(item);

        return items;
    }

    this.update = function (item) {
        items.$save(item);
    }

    this.remove = function (item) {
        items.$remove(item);
    }
});