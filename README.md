# Rewire create-react-app to override html-webpack-plugin in your project

Let you to override [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) options

## Install

```bash
$ yarn add react-app-rewired react-app-rewire-aliases -D
$ npm install react-app-rewired react-app-rewire-aliases --save-dev
```

## Usage

[Rewire your app](https://github.com/timarney/react-app-rewired#how-to-rewire-your-create-react-app-project) than modify `config-overrides.js`

```js
const rewireHtmlWebpackPlugin = require('react-app-rewire-html-webpack-plugin')

module.exports = function override(config, env) {
  const overrideConfig = {}
  config = rewireHtmlWebpackPlugin(config, env, overrideConfig)
  return config;
}

```
