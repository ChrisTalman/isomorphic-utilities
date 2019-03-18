'use strict';

// External Modules
const Path = require('path');

// Constants
const TYPESCRIPT_IGNORE = /(?:node_modules)$/;

module.exports =
{
	mode: 'development',
    entry: './src/index.ts',
	target: 'web',
    resolve:
    {
        extensions: [ '.js', '.ts' ],
        alias: { src: __dirname + '/src' }
    },
    output:
    {
        filename: 'index.js',
        path: Path.resolve(__dirname, './')
    },
    watch: true,
    module:
    {
        rules:
        [
            {
                loader: 'ts-loader',
                test: /\.tsx?$/,
                exclude: TYPESCRIPT_IGNORE
            }
        ]
    }
};