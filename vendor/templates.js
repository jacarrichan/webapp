(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates["welcome"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
   helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  return "<p>Hello world! </p>\n\n<div id=\"context\">  0 </div>";
  });

})();
