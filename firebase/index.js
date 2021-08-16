var firebaseAdmin = require('firebase-admin');

const Firebase_Config = JSON.stringify({
  "project_id": process.env.FIREBASE_PROJECT_ID,
  "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
  "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  "client_email": process.env.FIREBASE_CLIENT_EMAIL
});

//.replace(/\\n/g, '\n')

if (!Firebase_Config) throw new Error('The FIREBASE_SERVICE_ACCOUNT_CREDS environment variable was not found!');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(Firebase_Config.toString())
})

module.exports = firebaseAdmin;
