module.exports = {
	extends: [
		'airbnb',
		'@arbendium/eslint-config-base'
	],
	rules: {
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-noninteractive-element-interactions': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'react/jsx-filename-extension': 'off',
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-no-bind': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-uses-react': 'warn',
		'react/jsx-uses-vars': 'warn',
		'react/no-array-index-key': 'off',
		'react/no-danger': 'off',
		'react/prop-types': 'off'
	}
};
