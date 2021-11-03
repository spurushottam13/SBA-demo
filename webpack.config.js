const HtmlWebpackPlugin = require("html-webpack-plugin"); // Require  html-webpack-plugin plugin

module.exports = (env) => {
  console.log(env);
  return {
    mode: env.env || "development",
    entry: __dirname + "/src/app.js", // webpack entry point. Module to start building dependency graph
    output: {
      path: __dirname + "/dist", // Folder to store generated bundle
      filename: "bundle.js", // Name of generated bundle after build
      publicPath: "/", // public URL of the output directory when referenced in a browser
    },
    module: {
      // where we defined file patterns and their loaders
      rules: [],
    },
    plugins: [
      // Array of plugins to apply to build chunk
      new HtmlWebpackPlugin({
        template: __dirname + "/public/index.html",
        inject: "body",
      }),
    ],
    devServer: {
      headers: {
        "Cross-Origin-Opener-Policy": "same-origin",
        "Cross-Origin-Embedder-Policy": "require-corp",
      },
      // configuration for webpack-dev-server
      port: 7700, // port to run dev-server
    },
  };
};
