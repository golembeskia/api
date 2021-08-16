var firebaseAdmin = require('firebase-admin');

//const Firebase_Config = JSON.stringify({
const Firebase_Config = ({
  "type": process.env.FIREBASE_TYPE,
  "project_id": process.env.FIREBASE_PROJECT_ID,
  "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
  "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  "client_email": process.env.FIREBASE_CLIENT_EMAIL,
  "client_id": process.env.FIREBASE_CLIENT_ID,
  "auth_uri": process.env.FIREBASE_AUTH_URI,
  "token_uri": process.env.FIREBASE_TOKEN_URI,
  "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER,
  "client_x509_cert_url": process.env.FIREBASE_CLIENT
});

//.replace(/\\n/g, '\n')

if (!Firebase_Config) throw new Error('The FIREBASE_SERVICE_ACCOUNT_CREDS environment variable was not found!');

firebaseAdmin.initializeApp({
  //credential: firebaseAdmin.credential.cert(Firebase_Config.toString())
  credential: firebaseAdmin.credential.cert(JSON.parse(Firebase_Config))
})

module.exports = firebaseAdmin;
