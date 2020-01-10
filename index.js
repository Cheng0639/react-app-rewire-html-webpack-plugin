const deepMerge = require('deepmerge')

/**
 * @param {object} config
 * @param {string} env
 * @param {object} htmlWebpackPluginOptions
 */
function rewireHtmlWebpackPlugin(config, env, htmlWebpackPluginOptions = {}) {
  const htmlWebpackPlugin = config.plugins.find(
    plugin => plugin.constructor.name === 'HtmlWebpackPlugin'
  )

  if (!htmlWebpackPlugin) {
    throw new Error("Can't find HtmlWebpackPlugin")
  }

  htmlWebpackPlugin.options = deepMerge(
    htmlWebpackPlugin.options,
    htmlWebpackPluginOptions
  )

  return config
}

module.exports = rewireHtmlWebpackPlugin
