// Babel is used as the JavaScript compiler to transform modern JavaScript (ES6+) into a version compatible
// with the JavaScript engine on mobile devices.

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],
  };
};
