const admin = require('firebase-admin');

const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_CREDS;
if (!serviceAccount) throw new Error('The FIREBASE_SERVICE_ACCOUNT_CREDS environment variable was not found!');

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(Buffer.from(serviceAccount, 'base64').toString('ascii'))),
})

module.exports = admin;
