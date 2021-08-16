var firebaseAdmin = require('firebase-admin');

var serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_CREDS;

var rawFireBaseConfig = JSON.stringify(Buffer.from(serviceAccount, 'base64').toString('ascii'));
//.replace(/\\n/g, '\n')
console.log('serviceAccount (Buffer Value): ' + rawFireBaseConfig);

if (!serviceAccount) throw new Error('The FIREBASE_SERVICE_ACCOUNT_CREDS environment variable was not found!');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(rawFireBaseConfig)
})

module.exports = firebaseAdmin;
