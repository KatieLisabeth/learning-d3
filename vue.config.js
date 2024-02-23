const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
    publicPath: "https://katielisabeth.github.io/learning-d3/",
    outputDir: "dist",
    assetsDir: "",
    transpileDependencies: [],
    configureWebpack: {
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".vue", ".json"],
        },
    },
});
