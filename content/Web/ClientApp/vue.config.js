
const webpack = require('webpack');
const path = require('path');
const bundleOutputDir = '../wwwroot/dist';

//var _ENV = JSON.stringify(process.env.NODE_ENV).trim();
var _ENV = process.env.NODE_ENV;

var isDevBuild = _ENV === "_" || _ENV === "_d";
//console.log(_ENV);

var publicPath = "/";
switch (_ENV) {
  case "development":
  case "staging":
    publicPath = "/";
    break;
  case "production":
    publicPath = "/";
    break;
  default:
    publicPath = "/";
}

module.exports = {
  outputDir: path.resolve(__dirname, bundleOutputDir),
  publicPath: publicPath,
  configureWebpack: {
    devtool: false, //'source-map',
    entry: {
      vendor: [
        'bootstrap',
        'popper.js',
        'bootstrap/dist/css/bootstrap.min.css',
        'event-source-polyfill',
        'jquery'
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery',
        Popper: ['popper.js', 'default']
      })
    ].concat(isDevBuild ? [
      //Plugins that apply in development builds only
      new webpack.SourceMapDevToolPlugin({
        filename: '[file].map', // Remove this line if you prefer inline source maps
        moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
      })
    ] : [])
  }
};
