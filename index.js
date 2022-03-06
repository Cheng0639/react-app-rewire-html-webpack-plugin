const deepMerge = require('deepmerge')
const semver = require('semver')

/**
 * @param {object} config
 * @param {string} env
 * @param {object} htmlWebpackPluginOptions
 */
function rewireHtmlWebpackPlugin(config, env, htmlWebpackPluginOptions = {}) {
  let optionKey = 'options'
  const webpack = require('webpack')
  if (semver.major(webpack.version) === 5) {
    optionKey = 'userOptions'
  }

  const htmlWebpackPlugin = config.plugins.find(
    plugin => plugin.constructor.name === 'HtmlWebpackPlugin'
  )
  if (!htmlWebpackPlugin) {
    throw new Error("Can't find HtmlWebpackPlugin")
  }

  htmlWebpackPlugin[optionKey] = deepMerge(
    htmlWebpackPlugin[optionKey],
    htmlWebpackPluginOptions
  )

  return config
}

module.exports = rewireHtmlWebpackPlugin
