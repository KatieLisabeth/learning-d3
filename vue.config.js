const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
    publicPath: "/",
    outputDir: "dist",
    transpileDependencies: [], // Set to true if you want to transpile all dependencies
    configureWebpack: {
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".vue", ".json"],
        },
    },
});
