var path = require('path');

module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.join(__dirname, '/public/javascripts'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { 
                test: /\.js|jsx$/, 
                exclude: /(node_modules)/, 
                loaders: [
                        'react-hot',
                        'babel?presets[]=stage-0,presets[]=react,presets[]=es2015'
                    ]
            }
        ]
    }
}