import url from 'url';
import airbnb from 'eslint-config-airbnb';
import base from '@arbendium/eslint-config-base';

const airbnbBase = url.fileURLToPath(import.meta.resolve('eslint-config-airbnb-base'));

const configurations = await Promise.all(airbnb.extends.map(async moduleName => {
	if (airbnbBase === moduleName) {
		return base;
	}

	const { default: { ...configuration } } = await import(moduleName);

	delete configuration.parserOptions;
	delete configuration.env;

	if (configuration.plugins) {
		configuration.plugins = Object.fromEntries(
			await Promise.all(configuration.plugins.map(
				async plugin => [plugin, (await import(`eslint-plugin-${plugin}`)).default]
			))
		);
	}

	return configuration;
}));

export default [
	...configurations.flat(),
	{
		rules: {
			'jsx-a11y/click-events-have-key-events': 'off',
			'jsx-a11y/no-noninteractive-element-interactions': 'off',
			'jsx-a11y/no-static-element-interactions': 'off',
			'react/jsx-filename-extension': 'off',
			'react/jsx-indent': ['error', 'tab'],
			'react/jsx-indent-props': ['error', 'tab'],
			'react/jsx-no-bind': 'off',
			'react/jsx-one-expression-per-line': 'off',
			'react/jsx-sort-props': [
				'error',
				{
					ignoreCase: false,
					callbacksLast: false,
					shorthandFirst: false,
					shorthandLast: false,
					noSortAlphabetically: false,
					reservedFirst: true
				}
			],
			'react/jsx-uses-react': 'warn',
			'react/jsx-uses-vars': 'warn',
			'react/no-array-index-key': 'off',
			'react/no-danger': 'off',
			'react/prop-types': 'off'
		}
	}
];
