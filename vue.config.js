const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
    publicPath: "/",
    outputDir: "docs",
    assetsDir: "",
    transpileDependencies: [],
    configureWebpack: {
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".vue", ".json"],
        },
    },
});
