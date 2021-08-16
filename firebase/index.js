const admin = require('firebase-admin');

const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_CREDS;
console.log('serviceAccount (Encoded): ' + serviceAccount);

const fireBaseConfig = JSON.parse(Buffer.from(serviceAccount, 'base64').toString('ascii')).toString();

console.log('serviceAccount: ' + fireBaseConfig);

if (!serviceAccount) throw new Error('The FIREBASE_SERVICE_ACCOUNT_CREDS environment variable was not found!');

admin.initializeApp({
  credential: admin.credential.cert(fireBaseConfig)
})

module.exports = admin;
