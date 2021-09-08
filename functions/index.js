const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const auth = require('./auth');
const { user } = require("firebase-functions/v1/auth");
const { User } = require('./model/user')
const routes = require('./routes')


admin.initializeApp();

const app = express();
app.use(auth);

app.use('/',routes);


exports.createProfile = functions.auth.user().onCreate(async (user) => {
    let _user = User()
    _user.phoneNumber = user.phoneNumber;
    let userDoc = await admin.firestore().doc('users/'+user.uid).set(_user);
    console.log(userDoc);
    return Promise.resolve();
});



exports.api = functions.https.onRequest(app);


