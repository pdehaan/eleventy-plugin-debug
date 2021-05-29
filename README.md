# eleventy-plugin-debug

## INSTALLATION

```sh
npm install @pdehaan/eleventy-plugin-debug
```

## SETUP

```js
// .eleventy.js
const debug = require("pdehaan/eleventy-plugin-debug");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(debug);
  return {};
};
```

This plugin will add three new global filters which will help with debugging:

1. `inspect` &mdash; Wrapper for Node's native [`util.inspect()` method](https://nodejs.org/api/util.html#util_util_inspect_object_options).
1. `json` &mdash; Wrapper for JavaScript's [`JSON.stringify()` method](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify). This filter takes one optional argument which is a string or number value to use for indentation, if you want pretty printed JSON objects.
2. `keys` &mdash; Wrapper for JavaScript's [`Object.keys()` method](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/keys). This filter will also sort the returned array of key names for the specified object.

## USAGE

### Nunjucks

```njk
{{ collections.all | inspect }}
{{ page | json }}
{{ page | json(2) }}
{{ page | keys }}
```

### LiquidJS

```liquid
{{ collections.all | inspect }}
{{ page | json }}
{{ page | json: 2 }}
{{ page | keys }}
```
