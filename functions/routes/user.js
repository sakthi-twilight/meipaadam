const admin = require("firebase-admin");
const { User }  = require('../model/user')
const { Response } = require('../model/response');
const { response } = require("express");

module.exports = {

    getUser : function(req,res){
        let uid = req.user.uid;
         admin.firestore().collection('users').doc(uid).get().then(user => {
            let _reponse = Response()
            _reponse.meta.data = user.data();
            res.status(200).json(_reponse);
        })      
    },

    updateUser: async function(req,res){
        let uid = req.user.uid;
        let user = req.body;
        let _response = Response();
        let _user = User();
        console.log(_user)
        for(let key in user) {
            if (!_user.hasOwnProperty(key)) {
                let message = `${key} is not a Valid Key`
                _response.meta.statusCode = 404;
                _response.meta.message = message;
                return res.status(404).json(_response);    
            }
        }
        console.log(user);
        await admin.firestore().collection('users').doc(uid).set(user,{merge:true}).then(user => {
            _response.meta.statusCode = 200;
            _response.meta.message = 'User Updated!';
            res.status(200).json(_response);
        });




        
    },

};


