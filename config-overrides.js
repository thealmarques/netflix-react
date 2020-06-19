const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
    addWebpackAlias({
        "@images": path.resolve(__dirname, "./src/assets/images"),
    }),
);