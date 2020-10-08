const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const fs = require('fs');

const getEnvSettings = env => {
  const basePath = `${path.join(__dirname)}/env/.env`;
  const envPath = `${basePath}.${env.ENVIRONMENT}`;
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;

  const fileEnv = dotenv.config({ path: finalPath }).parsed;
  /* eslint-disable no-param-reassign */
  return Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});
  /* eslint-disable no-param-reassign */
};

module.exports = env => {
  return {
    watchOptions: {
      poll: 1000
    },
    // devtool: 'inline-source-map',
    entry: [path.join(process.cwd(), 'src/index')],
    output: {
      path: `${path.join(__dirname)}/dist`,
      publicPath: '/',
      filename: env.ENVIRONMENT === 'local' ? 'bundle.js' : 'bundle.[hash].js'
    },
    devServer: {
      contentBase: './dist',
      port: 3000,
      hot: true,
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader']
        },
        {
          test: /\.(s)?css$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf|svg|csv|ico)$/,
          use: ['file-loader']
        },
        {
          test: /\.(png|jpg|ico|)$/,
          loader: 'url-loader?limit=200000'
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin(getEnvSettings(env)),
      new HtmlWebpackPlugin({
        template: path.resolve('./public/index.html'),
        // favicon: './src/assets/images/favicon.ico'
      })
    ]
  };
};
