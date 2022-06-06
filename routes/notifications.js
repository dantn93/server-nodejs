var express = require('express');
var router = express.Router();
// rootUrl = http://localhost:3000/
const admin = require('../helper');


/* GET users listing. */
router.get('/', function (req, res, next) {

  // Push notificaton => Todo
  // 1. Push notificaton to device
  sendToDevice();
  // 2.

  res.status(200).send({
    notification: 'This notification'
  })
});

const sendToDevice = () => {
  // This registration token comes from the client FCM SDKs. (device Token)
  const registrationToken = 'dAcMBfXbRr6shRvKNcN7Fs:APA91bHlC15EeX9ajeQcrGbcBG8l4o0Qdl06YpdGe_2FeCQLMmqs0KodVbFr3wneoBQ0RTlwHxquif7CUy0Kp3IAU7fPLKC6r9bitfF7ObkqT4qAqNnJN4m4GyjltZyjlSMvgWUCJmMM';

  // Send a message to the device corresponding to the provided
  // registration token.
  admin.messaging().send({
    notification: {
      "title": 'This is a title',
      "body": 'This is a body',
    },
    "android": {
      "notification": {
        "sound": "default"
      }
    },
    "apns": {
      "payload": {
        "aps": {
          "sound": "default"
        }
      }
    },
    token: registrationToken,
  })
    .then(res => console.log(JSON.stringify(res)))
    .catch(err => console.log(JSON.stringify(err)))
  return '';
}

module.exports = router;