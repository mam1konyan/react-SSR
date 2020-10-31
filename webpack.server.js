const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const WebpackNE = require('webpack-node-externals')

const config = {
    // Here we inform webpack that we're building a bundle for NodeJS, rather than browser
    target: 'node',
    // Root file for our server app
    entry: './src/server.js',
    // Tell webpack where to put the output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    // Here we exclude all unnecessary packages from server bundle
    externals: [WebpackNE()]
}

module.exports = merge(baseConfig, config)
