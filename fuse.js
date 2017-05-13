const fsbx = require("fuse-box");
const path = require("path");
const express = require("express");
const eslinter = require("fuse-box-eslint-plugin");

// Récupération de la config d'environnement via DotEnv
const dotenv = require('dotenv')
const env = dotenv.config().parsed // will return an object

// Create FuseBox Instance
const fuseBox = new fsbx.FuseBox({
    // Code base root path of your app
    homeDir: "src/",
    // All JS will be concat in this file
    outFile: "./public/build/bundle.js",
    // Configure source maps
    sourcemaps: true,
    // Plugins to handle different types of file to bundle
    // Files are found by extension by the plugin itself
    // Ex: fsbx.SassPlugin() will find .scss files
    plugins: [
        // SCSS plugin to generate inline styles
        // Here, we have an array to chain plugins
        [
            fsbx.SassPlugin(),
            fsbx.CSSResourcePlugin({inline: true}),
            fsbx.CSSPlugin()
        ],
        // Injecting environment vars to be readable in browser
        fsbx.EnvPlugin(env),
        // Handle JS files
        // Here, we have an array to chain plugins
        [
            // Lint all the things
            eslinter({
                pattern: /js(x)*$/,
            }),
            // Babel used for compile jsx files
            fsbx.BabelPlugin(),
        ]
    ]
});

// Launch the dev server
const server = fuseBox.devServer("> index.js", {
    root: './public/'
});
// Declare all static file to be served
server.httpServer.app.use(express.static(path.join('public')));
// Fallback to index.html for all routes (and wil be handled by React-router)
server.httpServer.app.get('*', function (req, res) {
    res.sendFile(path.resolve('public', 'index.html'));
});
