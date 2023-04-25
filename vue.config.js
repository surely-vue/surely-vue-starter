const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  transpileDependencies: true,
  chainWebpack: config => {
    config.resolve.alias.set('vue$', resolve('./node_modules/vue/dist/vue.esm-bundler.js'));
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
};
