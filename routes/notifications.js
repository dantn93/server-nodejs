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
	const registrationToken = 'c9-n8e4xM0rysPz2Tedv3q:APA91bFNuZcuPr9cpFLR2HzkEEn5jeGp6RFbs-5wUAhRc47u0OIsh0AebUbamCwAIZFUw3Ix1yJZZdgqcY0zMdvlRUknVMWVYoSgzB5V3_WmVI10bwNtCYENOA97m6BB33J3vyB7r7-j';

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