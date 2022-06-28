  const path = require("path");

  module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
              loader: "babel-loader",
              options: {
                  presets: [
                      "@babel/preset-react"
                  ]
              }
          }
        }
      ]
    },
    // externals: {
    //   react: "react",
    //   "react-dom": "react-dom",
    // },
    output: {
      path: path.resolve(__dirname, '../wwwroot/js'),
      filename: "bundle.js",
      library: "RComponents",
      libraryTarget: "window"
    }
};