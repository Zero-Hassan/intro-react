var debug=process.env.NODE_ENV !=="production";
var webpack=require('webpack');
var path=require('path');

module.exports={
  context:path.join(__dirname,'src'),
  devtool:debug?'inline-sourcemap':null,
  entry:'./js/client.js',
  module:{
    loaders:[
      {
        test:/\.jsx?$/,
        exclude:/(node_modules|bower_components)/,
        loader:'babel-loader',
        query:{
          presets:['react','es2015','stage-0'],
          plugins:['react-html-attrs','transform-decorators-legacy','transform-class-properties']
        }
      },
      {
        test:/\.scss?$/,
        loader:'style-loader!css-loader!sass-loader'
      }
    ]
  },
  output:{
    path:__dirname + "/src/",
    filename:"client.js"
    },
  plugins:debug?[]:[
    new webpack.optimize.DebupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle:false,sourcemap:false}),
  ],
  devServer: {
    port: 8008
  },
}

//console.log("%cHassan", "color: red; font-size: 100pt;");
