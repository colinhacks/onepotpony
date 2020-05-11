module.exports = {
  exportTrailingSlash: true,
  // exportPathMap: function() {
  //   return {
  //     '/': { page: '/' },
  //   };
  // },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': __dirname,
    };
    return config;
  },
};
