const admin = require('firebase-admin');

const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_CREDS;
console.log('serviceAccount (Encoded): ' + serviceAccount);


const buff = Buffer.from(serviceAccount, 'base64');

// decode buffer as UTF-8
const str = buff.toString('ascii');

console.log('serviceAccount: ' + str);

if (!serviceAccount) throw new Error('The FIREBASE_SERVICE_ACCOUNT_CREDS environment variable was not found!');

admin.initializeApp({
  credential: admin.credential.cert(str)
})

module.exports = admin;
