const path = require('path')

module.exports = {
    // Tell webpack to run Babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/react',
                        [
                            '@babel/preset-env',
                            { targets: { browsers: ['last 2 versions'] } }
                        ]
                    ]
                }
            }
        ]
    },
    // Bellow we setup aliases for easy development process
    resolve: {
        alias: {
            components: path.resolve(__dirname, './src/client/components'),
            helpers: path.resolve(__dirname, './src/client/helpers')
        }
    }
}
