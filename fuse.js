const fsbx = require("fuse-box");

const dotenv = require('dotenv')
const env = dotenv.config().parsed // will return an object
const eslinter = require("fuse-box-eslint-plugin");

// Create FuseBox Instance
const fuseBox = new fsbx.FuseBox({
    homeDir: "src/",
    sourceMap: {
        bundleReference: "sourcemaps.js.map",
        outFile: "./build/sourcemaps.js.map",
    },
    outFile: "./build/bundle.js",
    plugins: [
        eslinter({
            pattern: /js(x)*$/,
        }),
        [
            fsbx.SassPlugin(),
            fsbx.CSSResourcePlugin({ inline: true }),
            fsbx.CSSPlugin()
        ],
        fsbx.EnvPlugin(env),
        fsbx.BabelPlugin({
            config: {
                sourceMaps: true,
                presets: ["es2015", "react", "stage-0"],
                plugins: [
                    "react-hot-loader/babel",
                    "transform-class-properties"
                ]
            }
        })
    ]
});

fuseBox.devServer("> index.js");