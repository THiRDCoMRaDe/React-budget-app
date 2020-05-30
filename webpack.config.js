const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = (env) => {
    const isProduction = env === 'production';
    return {
        mode: 'development',
        entry: './src/app.js',
        output: {
            path: path.resolve(__dirname, 'public', 'dist'),
            publicPath: '/',
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'style.css',
                }
            ),
        ],
        devtool: isProduction ? 'source-map' : 'eval-nosources-cheap-module-source-map',
        devServer: {
            contentBase: path.resolve(__dirname, 'public'),
            publicPath: '/dist/',
            historyApiFallback: true,
        }
    }
};