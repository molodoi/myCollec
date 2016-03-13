'use strict';

app.service('userProvider', function ($firebaseArray) {

    var myFirebaseRef = new Firebase("https://mymusiccollec.firebaseio.com/");

    var userRef = myFirebaseRef.child("users");
    var users = $firebaseArray(userRef);
    //Insérer les données users dans Firebase avec :
    //userRef.set(users);
    var message = {};

    this.getUsers = function () {
        return users;
    }

    this.create = function (user) {
        myFirebaseRef.createUser({
            email    : user.email,
            password : user.password
        }, function(error, userData) {
            if (error) {
                //console.log("Error creating user:", error);
            } else {
                //console.log("Successfully created user account with uid:", userData.uid);
            }
        });
    }

    this.login = function (user , cb) {
        myFirebaseRef.authWithPassword({
            /*email    : user.email,
            password : user.password*/
            email    : 'toto@toto.com',
            password : 'toto'
        }, function(error, authData) {
            if (error) {
                //console.log("Login Failed!", error);
            } else {
                //console.log("Authenticated successfully with payload:", authData);
                return cb(authData);
            }
        });
    }

    this.logout = function () {
        myFirebaseRef.unauth();
    }

    this.getAuthentified = function () {
        var authData = myFirebaseRef.getAuth();
        if (authData) {
            //console.log("User " + authData.uid + " is logged in with " + authData.provider);
        } else {
            //console.log("User is logged out");
        }
        return authData;
    }

    this.update = function (user) {
        users.$save(user);
    }

    this.remove = function (user) {
        users.$remove(user);
    }
});