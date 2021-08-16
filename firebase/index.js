var firebaseAdmin = require('firebase-admin');

var serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_CREDS;
console.log('serviceAccount (Encoded): ' + serviceAccount);

var rawFireBaseConfig = Buffer.from(serviceAccount, 'base64').toString('ascii');
console.log('serviceAccount (Buffer Value): ' + rawFireBaseConfig);

rawFireBaseConfig = rawFireBaseConfig.replace(/\\n/g, '\n');
console.log('serviceAccount (Cleaned): ' + rawFireBaseConfig);

var fireBaseConfig = JSON.parse(rawFireBaseConfig);
console.log('serviceAccount (JSON parse): ' + fireBaseConfig);

fireBaseConfig = fireBaseConfig.toString();
console.log('serviceAccount (Encoded): ' + fireBaseConfig);

if (!serviceAccount) throw new Error('The FIREBASE_SERVICE_ACCOUNT_CREDS environment variable was not found!');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(fireBaseConfig)
})

module.exports = firebaseAdmin;
