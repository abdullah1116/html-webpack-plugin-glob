const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports.htmlWebpackPluginGlob = function ({
  path: filePath,
  ext = 'html',
}) {
  return glob.sync(filePath + '/**/*.' + ext).map((fileName) => {
    const fileNameParsed = path.parse(fileName.replace(filePath, ''));

    fileNameParsed.ext = '.html';
    fileNameParsed.base = path.basename(
      fileNameParsed.name + fileNameParsed.ext
    );

    return new HtmlWebpackPlugin({
      filename: path.format(fileNameParsed),
      template: fileName,
    });
  });
};
