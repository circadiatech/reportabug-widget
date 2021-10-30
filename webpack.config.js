module.exports = {
  mode: "development",
  entry: "/src/index.js",
  output: {
    library: "ReportBugWidget",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },

  module: {
    rules: [
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
