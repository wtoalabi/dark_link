const mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Aliases
 |--------------------------------------------------------------------------
 */

mix.webpackConfig({
  watchOptions: {
    ignored: /node_modules/,
  },
}).sourceMaps();

mix.js('dev_js/app.js', './assets/app.js')
  .sass('dev_css/app.scss', './assets/app.css');
