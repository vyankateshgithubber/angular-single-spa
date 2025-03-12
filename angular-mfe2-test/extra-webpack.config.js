const { merge } = require('webpack-merge');
const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // Feel free to modify this webpack config however you'd like to
  return merge(singleSpaWebpackConfig, {
    output: {
      library: "@BFL2/angular-mfe2",
      libraryTarget: "umd",
      filename: "main.js",
      publicPath: "http://localhost:4201/", // Ensure correct publicPath for remote loading
    },
    devServer: {
      server: {
        type: 'http', // Use 'http' to disable SSL
      },
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow cross-origin requests
      },
    },
  });
};