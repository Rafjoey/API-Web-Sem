var Encore = require('@symfony/webpack-encore');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    // uncomment to create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning(Encore.isProduction())
    .addEntry('js/js', './assets/js/js.jsx')
    .addStyleEntry('css/css', './assets/css/css.scss')
    // .addStyleEntry('css/font-awesome', './assets/ge/css/font-awesome/scss/font-awesome.scss')

    // uncomment if you use Sass/SCSS files
    .enableSassLoader(function (sassOptions) {}, {
        resolveUrlLoader: false
    })
    // React.js
    .enableReactPreset()
    // uncomment for legacy applications that require $/jQuery as a global variable
    .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();