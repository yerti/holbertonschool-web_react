const path = require('path');
const parents = path.join(__dirname, '..')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(parents + '/dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDev: true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    devtool: 'inline-source-map',

    devServer: {
        static: {
            directory: path.resolve(__dirname, '../src')
        },
        compress: true,
        hot: true,
        open: true,
    }

}