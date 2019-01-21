module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
  },
  "parser": "babel-eslint",
  "extends": ["eslint:recommended", "airbnb-base"],
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
    "jest": true,
  },
  globals: {
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true,
    authToken: true,
  },
}
