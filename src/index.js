const helpers = require('./helpers')

if (registerHelper && helpers) {
  try {
    Object.keys(helpers).forEach(helper => registerHelper(helper, helpers[helper]))
  } catch (err) {
    if (console) console.log(err)
  }
}