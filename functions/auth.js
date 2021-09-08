const admin = require("firebase-admin");
const { Response } = require("./model/response");

module.exports = validateUser = async (req, res, next) => {

    let _response = Response();
    _response.meta.statusCode = 403;
    _response.meta.message = 'Unauthorized';
    if ((!req.headers.authorization || !req.headers.authorization.startsWith('Bearer '))) {
        res.status(403).json(_response);
        return;
    }
  
    let idToken;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
      idToken = req.headers.authorization.split('Bearer ')[1];
    } else {
        res.status(403).json(_response);
      return;
    }
  
    try {
      const decodedIdToken = await admin.auth().verifyIdToken(idToken);
      req.user = decodedIdToken;
      next();
      return;
    } catch (error) {
      _response.meta.error = `Error while verifying Firebase ID token: ${error}`;
      console.error('Error while verifying Firebase ID token:', error);
      res.status(403).json(_response);
      return;
    }

    // user = {
    //     uid:'wwSAfA0pjuciUtC8kctIsX4vVXDC'
    // }
    // req.user = user;
    // next();
    // return;
  };
  