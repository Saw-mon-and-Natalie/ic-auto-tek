module.exports = {
  poweredByHeader: false,
  webpack: (config, options) => {
    config.module.rules.push(
        {
            test: /\.svg$/i,
            exclude: [],
            use: [
              options.defaultLoaders.babel,
              {
                loader: 'react-svg-loader',
                options: {
                  jsx: true,
                }
              }
            ]
        },
    )
    
    return config
  },
};
