// @ts-check

const path = require('path')

const deepMerge = require('deepmerge')
const semver = require('semver')

/**
 * @param {object} config
 * @param {string} env
 * @param {object} htmlWebpackPluginOptions
 */
function rewireHtmlWebpackPlugin(config, env, htmlWebpackPluginOptions = {}) {
  const optionKey = htmlWebpackPluginOptionKey()

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

function htmlWebpackPluginOptionKey() {
  const version = htmlWebpackPluginVersion()
  let optionKey = 'options'

  if (semver.major(version) === 5 && semver.lt(version, '5.5.4')) {
    optionKey = 'userOptions'
  }

  return optionKey
}

function htmlWebpackPluginVersion() {
  const packageJson = require('html-webpack-plugin/package.json')

  return packageJson.version
}

module.exports = rewireHtmlWebpackPlugin
