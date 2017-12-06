const fsbx = require('fuse-box')
const path = require('path')
const express = require('express')
// const eslinter = require('fuse-box-eslint-plugin')

// Récupération de la config d'environnement via DotEnv
const dotenv = require('dotenv')
const env = dotenv.config().parsed // will return an object

// Create FuseBox Instance
const fuseBox = new fsbx.FuseBox({
    // Code base root path of your app
    homeDir: 'src/',
    // All JS will be concat in this file
    output: 'public/build/$name.js',
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
            fsbx.CSSResourcePlugin({ inline: true }),
            fsbx.CSSPlugin()
        ],
        // Injecting environment vars to be readable in browser
        fsbx.EnvPlugin(env),
        // Handle JS files
        // Here, we have an array to chain plugins
        [
            // eslinter({
            //     pattern: /js(x)*$/,
            // }),
            // Babel used for compile jsx files
            fsbx.BabelPlugin(),
        ],
        fsbx.WebIndexPlugin({
            template: './src/index.html',
            target: '../index.html',
            path: 'build'
        })
    ]
})

// Launch the dev server
fuseBox
    .bundle('bundle')
    .instructions('> index.js')
    .target('browser')
    .watch('src/**')
    .hmr()

// fuseBox.dev()
fuseBox.dev({ root: false }, server => {
    const dist = path.resolve('./public/')
    const app = server.httpServer.app
    app.use('/build', express.static(path.join(dist, 'build')))
    app.use('/images', express.static(path.join(dist, 'images')))
    app.get('*', function (req, res) {
        res.sendFile(path.join(dist, 'index.html'))
    })
})

fuseBox.run()
