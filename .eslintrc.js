module.exports = {
  env: {
    browser: true,  // Since this is for the React frontend
    es2021: true,
  },
  extends: [
    'react-app',  // Use the Create React App ESLint settings as a base
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    // Define any custom rules for frontend here
  },
};
