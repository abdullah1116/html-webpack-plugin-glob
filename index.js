const nodePath = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports.htmlWebpackPluginGlob = function ({ path, ext = 'html' }) {
  return glob
    .sync(path + '/**/*.' + ext)
    .map((src) => src.replace(path, ''))
    .map(
      (src) =>
        new HtmlWebpackPlugin({
          filename: src,
          template: nodePath.resolve(path + src),
        })
    );
};
