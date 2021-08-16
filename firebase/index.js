var firebaseAdmin = require('firebase-admin');

const Firebase_Config = JSON.stringify({
  "project_id": process.env.FIREBASE_PROJECT_ID,
  "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID.replace(/\\n/g, '\n'),
  "private_key": "",
  "client_email": process.env.FIREBASE_CLIENT_EMAIL
}));

console.log("---------------------------- START ----------------------------------------");
console.log(Firebase_Config);
console.log("---------------------------  END   -----------------------------------------");

if (!Firebase_Config) throw new Error('The FIREBASE_SERVICE_ACCOUNT_CREDS environment variable was not found!');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(JSON.parse(Firebase_Config).toString('ascii'))
})

module.exports = firebaseAdmin;
