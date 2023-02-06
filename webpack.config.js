module.exports = {
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.css$/i,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          exclude: /node_modules/,
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react']
              }
            }
          ]
        }
      ]
    }
  }