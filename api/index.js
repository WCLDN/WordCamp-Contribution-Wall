const router = require('express').Router();
const https = require('https');
const url = require('url');

router.get('/contributors/:username', (req, res)=> {
	const options = {
		method: 'HEAD',
		host: 'wordpress.org',
		port: 443,
		// Avatar fallback is set to blank as WordPress.org grav-redirect does not support a url as the default Gravatar
		path: '/grav-redirect.php?user=' + req.params.username + '&s=300&d=blank'
	};

	https.get(options, gravRes=> {
		const gravUrl = url.parse(gravRes.headers.location);
		let userExists = false;

		if (gravUrl.pathname === '/avatar/') {
			res.status(404);
		} else {
			res.status(200);
			userExists = true;
		}
		res.json({
			'username': req.params.username,
			'error': false,
			'exists': userExists,
			'gravatar': gravRes.headers.location
		});
		res.end();
	}).on('error', e=> {
		res.status(500);
		res.json({
			'error': true,
			'message': e.message
		});
		res.end();
	});
});


router.get('*', (req, res)=> {
	res.status(404).json({'message': 'Not Found'});
	res.end();
});

module.exports = router;
