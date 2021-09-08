const admin = require("firebase-admin");
const {Response} = require('../model/response');

module.exports = {

    getMedicalInfo : function(req,res){
        let uid = req.user.uid;
        let medicalInfo = {
            'physicalHealthIssue':[
                {
                    'id':1,
                    'name':'Underactive thyroid'
                },
                {
                    'id':2,
                    'name':'Diabetes'
                },
                {
                    'id':3,
                    'name':'Vitamin D deficiency'
                }
            ],
            'medications':[
                {
                    'id':1,
                    'name':'Physical Theraphy'
                },
                {
                    'id':2,
                    'name':'Speech Theraphy'
                },
                {
                    'id':3,
                    'name':'Physiotheraphy'
                }
            ],
            'supplementary':[
                {
                    'id':1,
                    'name':'Iron Supplement'
                },
                {
                    'id':2,
                    'name':'Calcium Supplement'
                },
                {
                    'id':3,
                    'name':'Protein Supplement'
                }
            ],
            'surgery':[
                {
                    'id':1,
                    'name':'Cataract surgery'
                },
                {
                    'id':2,
                    'name':'Joint Replacement'
                },
                {
                    'id':3,
                    'name':'Heart Bypass Surgery'
                }
            ],
            'mentalIllness':[
                {
                    'id':1,
                    'name':'Depression'
                },
                {
                    'id':2,
                    'name':'Eating Disorders'
                },
                {
                    'id':3,
                    'name':'Anxiety'
                }
            ],
            'physicalActivities':[
                {
                    'id':1,
                    'name':'Walking'
                },
                {
                    'id':2,
                    'name':'Jogging'
                },
                {
                    'id':3,
                    'name':'Running'
                },
                {
                    'id':4,
                    'name':'Cycling'
                }
            ]
        };
        let _reponse = Response();
        _reponse.meta.data = medicalInfo;
        res.status(200).json(_reponse);
    },

    
    getSkillSets : function(req,res){
        let uid = req.user.uid;
        let skillSets = {
            'skillSets':[
                {
                    'id':1,
                    'name':'Human Relations'
                },
                {
                    'id':2,
                    'name':'Research and Planning'
                },
                {
                    'id':3,
                    'name':'Accounting'
                },
                {
                    'id':4,
                    'name':'Leadership'
                },
                {
                    'id':5,
                    'name':'Management'
                },
                {
                    'id':6,
                    'name':'Computer Skills'
                }
            ]
        };
        let _response = Response();
        _response.meta.data = skillSets;
        res.status(200).json(_response);
    },

};