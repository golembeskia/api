const fireBaseAdmin = require('firebase-admin');

const fireBase_Data = {
  "type": process.env.FIREBASE_TYPE,
  "project_id": process.env.FIREBASE_PROJECT_ID,
  "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
  "private_key": process.env.FIREBASE_PRIVATE_KEY,
  "client_email": process.env.FIREBASE_CLIENT_EMAIL,
  "client_id": process.env.FIREBASE_CLIENT_ID,
  "auth_uri": process.env.FIREBASE_AUTH_URI,
  "token_uri": process.env.FIREBASE_TOKEN_URI,
  "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER,
  "client_x509_cert_url": process.env.FIREBASE_CLIENT
}

const fireBase_Config = JSON.stringify(fireBase_Data);

//.replace(/\\n/g, '\n')
if (!fireBase_Config) 
  throw new Error('The FIREBASE_SERVICE_ACCOUNT_CREDS environment variable was not found!');

fireBaseAdmin.initializeApp({
  credential: fireBaseAdmin.credential.cert(fireBase_Config.toString())
});

module.exports = fireBaseAdmin;
