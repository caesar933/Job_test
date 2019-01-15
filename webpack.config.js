var path = require('path');

module.exports = {
    entry: './src/app.js',
    output:{
        path: path.resolve(__dirname, 'final'),
        filename: 'bundle.js',
        publicPath: '/final'
    },
    mode: 'development'
};