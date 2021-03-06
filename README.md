# eleventy-plugin-debug

## INSTALLATION

```sh
npm install pdehaan/eleventy-plugin-debug
```

## SETUP

```js
// .eleventy.js
const debug = require("eleventy-plugin-debug");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(debug);
  return {};
};
```

This plugin will add the following new global filters which will help with debugging:

1. `inspect` &mdash; Wrapper for Node's native [`util.inspect()` method](https://nodejs.org/api/util.html#util_util_inspect_object_options).
2. `json` &mdash; Wrapper for JavaScript's [`JSON.stringify()` method](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify). This filter takes one optional argument which is a string or number value to use for indentation, if you want pretty printed JSON objects.
3. `keys` &mdash; Wrapper for JavaScript's [`Object.keys()` method](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/keys). This filter will also sort the returned array of key names for the specified object.

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

### 11ty.js

```js
${ this.inspect(data.collections.all) }
${ this.json(data.page) }
${ this.json(data.page, 2) }
${ this.keys(data.page) }
${ this.json(this.keys(data.page), 2) }
```
