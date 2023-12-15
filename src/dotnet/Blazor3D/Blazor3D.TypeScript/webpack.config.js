const path = require("path");
const webpack = require("webpack");

const bundleFileName = "bundle";
const dirName = "../Blazor3D/wwwroot/js";

module.exports = (env, argv) => {
    return {
        mode: argv.mode === "production" ? "production" : "development",
        entry: ["./src/index.ts"], // Entry point is now a TypeScript file
        output: {
            library: {
                type: "module"
            },
            umdNamedDefine: true,
            filename: bundleFileName + ".js",
            path: path.resolve(__dirname, dirName),
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/, // Regex to test TypeScript and TSX files
                    use: "ts-loader", // Use ts-loader for TypeScript files
                    exclude: /node_modules/,
                }
            ]
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"], // Resolve these file types
        },
        plugins: [
            new webpack.BannerPlugin({
                banner: `three.js authors https://threejs.org/`
            })
        ],
        experiments: {
            outputModule: true,
        },
    };
};