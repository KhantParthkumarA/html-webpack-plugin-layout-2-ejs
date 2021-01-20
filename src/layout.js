// Template Layout Wrapper
// Read more how this works here: https://webpack.js.org/guides/dependency-management/
module.exports = templateData => {
  return (
    require("./templates/layout.ejs")({...templateData, 
      body: require("./templates/" + templateData.htmlWebpackPlugin.options.page + ".ejs")(templateData)
    })
  );
};
