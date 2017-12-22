var Encore = require('@symfony/webpack-encore');

Encore
	// the project directory where all compiled assets will be stored
	.setOutputPath('public/build/')
	// the public path used by the web server to access the previous directory
	.setPublicPath('/build')
	// will create public/build/app.js and public/build/app.css
	.addEntry('app', './assets/js/app.js')
	.addEntry('draw', './assets/js/draw.js')

	.addStyleEntry('global', './assets/css/global.scss')

	// allow sass/scss files to be processed
	.enableSassLoader()

	// add vue.js management
	.enableVueLoader()

	.enableSourceMaps(!Encore.isProduction())

	// empty the output path dir before each build
	.cleanupOutputBeforeBuild()
	// show OS notifications when builds finish/fail
	.enableBuildNotifications()
;
// export the final configuration
module.exports = Encore.getWebpackConfig();
