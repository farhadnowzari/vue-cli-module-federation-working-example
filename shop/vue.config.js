// eslint-disable-next-line @typescript-eslint/no-var-requires
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  publicPath: "http://localhost:8081/",
  configureWebpack: {
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "shop",
        filename: "shopEntry.js",
        remotes: {
          "federated_app": "federated_app@http://localhost:8080/remoteEntry.js"
        },
        exposes: {},
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        shared: require("./package.json").dependencies,
      })
    ]
  },
  devServer: {
    port: "8081"
  },
  transpileDependencies: true
}