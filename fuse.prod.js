const fsbx = require('fuse-box')

const dotenv = require('dotenv')
const env = dotenv.config().parsed // will return an object

// Create FuseBox Instance
const fuse = fsbx.FuseBox.init({
    homeDir: 'src/',
    log: true,
    cache: false,
    output: './public/build/$name.js',
    plugins: [
        [
            fsbx.SassPlugin(),
            fsbx.CSSResourcePlugin({inline: true}),
            fsbx.CSSPlugin()
        ],
        fsbx.EnvPlugin(env),
        fsbx.BabelPlugin({
            config: {
                sourceMaps: true,
                presets: [['es2015', {'loose': true}], 'react'],
                plugins: [
                    'react-hot-loader/babel',
                    'transform-class-properties'
                ]
            }
        }),
        fsbx.UglifyJSPlugin(),
        fsbx.WebIndexPlugin({
            target : '../index.html'
        })
    ]
})
fuse.bundle('bundle.prod')
    .target('browser')
    .instructions('> index.js')
fuse.run()
