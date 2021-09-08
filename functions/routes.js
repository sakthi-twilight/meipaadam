const express = require('express');
const router = express.Router();
const user = require('./routes/user')
const profile = require('./routes/profile')

router.route('/user').get(user.getUser);
router.route('/user').put(user.updateUser);

router.route('/medical/info').get(profile.getMedicalInfo);
router.route('/skillsets').get(profile.getSkillSets);
module.exports = router;