module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
	},
	settings: {
		react: {
			version: 'latest',
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'airbnb-base',
		'prettier',
		'react-app',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			experimentalObjectRestSpread: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
		parser: 'babel-eslint',
	},
	plugins: ['react', 'prettier'],
	rules: {
		'prettier/prettier': [
			'warn',
			{
				semi: false,
				singleQuote: true,
				trailingComma: 'es5',
				bracketSpacing: true,
				printWidth: 80,
				proseWrap: 'never',
			},
		],
		'import/prefer-default-export': 'off',
		'react/jsx-uses-vars': 'error',
		'react/jsx-uses-react': 'error',
		'no-tabs': ['error', { allowIndentationTabs: true }],
		semi: ['error', 'never'],
		'no-unused-expressions': [
			'error',
			{
				allowShortCircuit: false,
				allowTernary: true,
				allowTaggedTemplates: false,
			},
		],
		'no-use-before-define': [
			'error',
			{
				functions: false,
			},
		],
		'no-empty': ['error', { allowEmptyCatch: true }],
		'no-plusplus': 'off',
		'no-param-reassign': 'off',
		'no-underscore-dangle': 'off',
		'no-alert': 'error',
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	},
}
