const miniCss = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }, 
  devtool: "source-map",
  module:{
    rules: [
      {
        test:/\.(s*)css$/,
        use: [
           miniCss.loader,
           'css-loader',
           'sass-loader',
        ]
     },
     {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    }
    ]
  },
  plugins: [
    new miniCss({
       filename: 'style.css',
    }),
 ],
 devServer: {
  contentBase: path.join(__dirname, 'dist'),
  open: true,
  port: 3000,
  host: '192.168.1.65',
  watchContentBase: true
}
};