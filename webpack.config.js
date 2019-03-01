const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = env => {

    let pro = env.production == 'true';

    let resPrefix = './src/main/resources/';
    let srcPrefix = `${resPrefix}/static/src`;
    let templatePrefix = `${resPrefix}/templates`;
    let distPath = path.resolve(__dirname, `${resPrefix}/static/src/dist`);

    return {
        mode: pro ? 'production' : 'development',
        entry: {
            app: `${srcPrefix}/main.ts`,
        },
        devtool: pro ? 'none' : 'inline-source-map',
        plugins: [
            new VueLoaderPlugin(),
            new CleanWebpackPlugin([`${distPath}/*`]),
            new HtmlWebpackPlugin(
                {
                    filename: `../../../templates/dist/index.dist.html`,//相对output中path路径
                    template: `!!html-loader!${templatePrefix}/index.html`,
                    inject: 'body',
                    // hash: true,
                }
            ),
        ],
        output: {
            filename: pro ? '[name].bundle.[hash].js' : '[name].bundle.js',
            path: distPath,
            publicPath: pro ? "src/dist/" : "http://127.0.0.1:9991/static/dist/"
        },
        //提取各个入口公共模块
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        },
        resolve: {
            extensions: ['.js', '.ts', '.vue', '.json'],
            alias: {
                '@': path.resolve(__dirname, srcPrefix),
                vue$: 'vue/dist/vue.runtime.esm.js'
            },
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: ['vue-loader']
                },
                {
                    test: /\.js$/,
                    // exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    }
                },
                {
                    test: /\.styl(us)?$/,
                    exclude: /node_modules/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        'postcss-loader',
                        'stylus-loader'
                    ]
                },
                {
                    test: /\.css$/,
                    // exclude: /node_modules/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        'postcss-loader'
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
                    use: [
                        /* config.module.rule('images').use('url-loader') */
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 4096,
                                fallback: {
                                    loader: 'file-loader',
                                    options: {
                                        name: 'img/[name].[hash:8].[ext]'
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                    use: [
                        /* config.module.rule('fonts').use('url-loader') */
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 4096,
                                fallback: {
                                    loader: 'file-loader',
                                    options: {
                                        name: 'fonts/[name].[hash:8].[ext]'
                                    }
                                }
                            }
                        }
                    ]
                },
            ]
        },
        devServer: {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        },
    }
};