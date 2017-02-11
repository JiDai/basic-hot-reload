const fsbx = require("fuse-box");

console.log("process.env.NODE_ENV : ", process.env.NODE_ENV);
// Create FuseBox Instance
const fuseBox = new fsbx.FuseBox({
    homeDir: "src/",
    sourceMap: {
        bundleReference: "sourcemaps.js.map",
        outFile: "./build/sourcemaps.js.map",
    },
    outFile: "./build/bundle.js",
    plugins: [
        [
            fsbx.SassPlugin(),
            fsbx.CSSResourcePlugin({ inline: true }),
            fsbx.CSSPlugin()
        ],
        fsbx.EnvPlugin({
            NODE_ENV: process.env.NODE_ENV
        }),
        fsbx.BabelPlugin({
            config: {
                sourceMaps: true,
                presets: [["es2015", { "loose": true }], "react"],
                plugins: [
                    ["react-hot-loader/babel"],
                    "transform-class-properties"
                ]
            }
        })
    ]
});

fuseBox.devServer("> index.js");