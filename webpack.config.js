module.exports = {
  mode: "production",
  entry: "/src/index.js",
  output: {
    library: "ReportBugWidget",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },

  module: {
    rules: [
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
      {
        module: {
          rules: [
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
          ],
        },
      },
    ],
  },
};
