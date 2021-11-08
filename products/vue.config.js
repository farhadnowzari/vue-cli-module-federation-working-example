// eslint-disable-next-line @typescript-eslint/no-var-requires
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  publicPath: "http://localhost:8080/",
  configureWebpack: {
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      }
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "federated_app",
        filename: "remoteEntry.js",
        library: { type: "var", name: 'federated_app' },
        remotes: {},
        exposes: {
          "./Products": "./src/components/Products.vue",
          "./Product": "./src/components/Product.vue",
          "./EventBus": "./src/helpers/EventBus.ts"
        },
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        shared: require("./package.json").dependencies,
      })
    ]
  },
  devServer: {
    port: "8080"
  },
  transpileDependencies: true
}