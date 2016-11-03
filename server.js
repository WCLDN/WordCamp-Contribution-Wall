/* eslint no-console: 0 */

const path = require('path');
const express = require('express');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = (process.env.PORT || 3000);
const app = express();

if (isDeveloping) {
	const webpack = require('webpack');
	const webpackMiddleware = require('webpack-dev-middleware');
	const webpackHotMiddleware = require('webpack-hot-middleware');
	const webpackConfig = require('./webpack.config.js');
	const compiler = webpack(webpackConfig);

	const middleware = webpackMiddleware(compiler, {
		publicPath: webpackConfig.output.publicPath,
		contentBase: 'src',
		stats: {
			colors: true,
			hash: false,
			timings: true,
			chunks: false,
			chunkModules: false,
			modules: false
		}
	});

	app.use(middleware);
	app.use(webpackHotMiddleware(compiler));
	app.get('*', function response(req, res) {
		res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'public/index.html')));
		res.end();
	});
} else {
	app.use(express.static(__dirname + '/public'));
	app.get('*', function response(req, res) {
		res.sendFile(path.join(__dirname, 'public/index.html'));
	});
}

app.listen(port, '0.0.0.0', function onStart(err) {
	if (err) {
		console.log(err);
	}
	console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
