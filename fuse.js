const fsbx = require("fuse-box");

const dotenv = require('dotenv')
const env = dotenv.config().parsed // will return an object
const eslinter = require("fuse-box-eslint-plugin");

// Create FuseBox Instance
const fuseBox = new fsbx.FuseBox({
    homeDir: "src/",
    sourcemaps: true,
    outFile: "./public/build/bundle.js",
    plugins: [
        [
            fsbx.SassPlugin(),
            fsbx.CSSResourcePlugin({ inline: true }),
            fsbx.CSSPlugin()
        ],
        fsbx.EnvPlugin(env),
        [
            eslinter({
                pattern: /js(x)*$/,
            }),
            fsbx.BabelPlugin(),
        ]
    ]
});

fuseBox.devServer("> index.js", {
    root: './public/'
});