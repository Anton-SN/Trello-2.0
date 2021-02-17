module.exports = {
  parser: 'babel-eslint',

  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:css-modules/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],

  plugins: ['flowtype', 'css-modules', 'prettier'],

  globals: {
    __DEV__: true,
  },

  env: {
    jest: true,
    browser: true,
  },

  rules: {
    'import/no-extraneous-dependencies': ['error', { packageDir: '.' }],

    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],

    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],

    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

    'react/prefer-stateless-function': 'off',

    'react/require-default-props': 'warn',

    'prettier/prettier': 'error',
  },

  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
