module.exports ={
    entry: './src/index.js',
    output:{
        path: __dirname+'/build',
        filename: 'bundle.js'
    },
    devServer: {
    inline: true,
    contentBase: './build',
    port: 3333
    },
    module: {
        rules: [
            {
            test: /\.jsx?$/, 
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/preset-env','@babel/preset-react']
            }
        }, { test: /\.css$/, use: 'css-loader' }
    ]
    },
    resolve: {
    extensions: ['.js', '.jsx']
  }
   

}
