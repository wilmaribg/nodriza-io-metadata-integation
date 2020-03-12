const helpers = require('./helpers')
console.log(helpers)
if (Handlebars && helpers) {
  try {
    Object.keys(helpers).forEach(helper => Handlebars.registerHelper(helper, helpers[helper]))
  } catch (err) {
    console.log(err)
  }
}