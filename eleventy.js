let markdownIt = require("markdown-it");
let options = {
    // whatever options you have set for the library here
  };
let mdfigcaption = require('markdown-it-image-figures');
let figoptions = {
    figcaption: true
};

const mdLib = markdownIt(options).use(mdfigcaption, figoptions);

module.exports = function (config) {
    //other config here
    
    config.setLibrary("md", mdLib);
}