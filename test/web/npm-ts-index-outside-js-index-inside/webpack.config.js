/* eslint-env node */
"use strict";
const getConfig = require("@wildpeaks/webpack-config-web");

module.exports = function() {
	return getConfig({
		mode: "development",
		polyfills: [],
		webworkerPolyfills: [],
		sourcemaps: false,
		entry: {
			"app-npm-ts-index-outside-js-index-inside": "./src/application.ts"
		},
		pages: [
			{
				filename: "index.html",
				chunks: ["app-npm-ts-index-outside-js-index-inside"]
			}
		]
	});
};
