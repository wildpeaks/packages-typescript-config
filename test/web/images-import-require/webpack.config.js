/* eslint-env node */
"use strict";
const getConfig = require("@wildpeaks/webpack-config-web");

module.exports = function() {
	return getConfig({
		mode: "development",
		polyfills: [],
		webworkerPolyfills: [],
		sourcemaps: false,
		embedLimit: 1,
		entry: {
			"app-images-import-require": "./src/application.ts"
		},
		pages: [
			{
				filename: "index.html",
				chunks: ["app-images-import-require"]
			}
		]
	});
};
