const fireBaseAdmin = require('firebase-admin');
const admin = require('firebase-admin');

if (!fireBaseAdmin) 
  throw new Error('The FIREBASE_SERVICE_ACCOUNT_CREDS environment variable was not found!');

const firebaseApp =
  global.firebaseApp ??
  fireBaseAdmin.initializeApp({
    credential: admin.credential.cert({
      type: process.env.FIREBASE_TYPE,
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKeyId: process.env.FIREBASE_PRIVATE_KEY_ID,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      clientId: process.env.FIREBASE_CLIENT_ID,
      authUri: process.env.FIREBASE_AUTH_URI,
      tokenUri: process.env.FIREBASE_TOKEN_URI,
      authProviderX509CertUrl: process.env.FIREBASE_AUTH_PROVIDER,
      clientX509CertUrl: process.env.FIREBASE_CLIENT,
  }),
  databaseURL: https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com/
})

global.firebaseApp = firebaseApp
module.exports = fireBaseAdmin
