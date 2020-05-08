/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

var fs = require('fs-extra')
var path = require('path')

exports.onPostBuild = (_, __) => {
  console.log('copying additional assets...');
  fs.copySync(path.join(__dirname, '/src/assets/additional'), path.join(__dirname, '/public/static'));
  console.log('copying CNAME to root...');
  fs.copySync(path.join(__dirname, '/src/assets/root'), path.join(__dirname, '/public'));
}