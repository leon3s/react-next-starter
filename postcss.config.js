const easyImport = require('postcss-easy-import')({ prefix: '_' });
const autoPrefixer = require('autoprefixer')({ /* ...options */ });

module.exports = {
  plugins: [
    easyImport, // keep this first
    autoPrefixer, // so imports are auto-prefixed too
  ],
};
