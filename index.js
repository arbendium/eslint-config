import base from '@arbendium/eslint-config-base';
import pluginReact from 'eslint-plugin-react';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';

export default [
	...base,
	{
		settings: {
			'import/resolver': {
				node: {
					extensions: ['.js', '.jsx', '.json']
				}
			},
			react: {
				pragma: 'React',
				version: 'detect'
			},
			propWrapperFunctions: ['forbidExtraProps', 'exact', 'Object.freeze']
		},
		plugins: {
			'jsx-a11y': pluginJsxA11y,
			react: pluginReact
		},
		rules: {
			'class-methods-use-this': ['error', {
				enforceForClassFields: true,
				exceptMethods: ['render', 'getInitialState', 'getDefaultProps', 'getChildContext', 'componentWillMount', 'UNSAFE_componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'UNSAFE_componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'UNSAFE_componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount', 'componentDidCatch', 'getSnapshotBeforeUpdate']
			}],
			'jsx-a11y/alt-text': ['error', {
				area: [],
				elements: ['img', 'object', 'area', 'input[type="image"]'],
				img: [],
				'input[type="image"]': [],
				object: []
			}],
			'jsx-a11y/anchor-has-content': ['error', { components: [] }],
			'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'], aspects: ['noHref', 'invalidHref', 'preferButton'] }],
			'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
			'jsx-a11y/aria-props': 'error',
			'jsx-a11y/aria-proptypes': 'error',
			'jsx-a11y/aria-role': ['error', { ignoreNonDOM: false }],
			'jsx-a11y/aria-unsupported-elements': 'error',
			'jsx-a11y/control-has-associated-label': ['error', {
				controlComponents: [],
				depth: 5,
				ignoreElements: ['audio', 'canvas', 'embed', 'input', 'textarea', 'tr', 'video'],
				ignoreRoles: ['grid', 'listbox', 'menu', 'menubar', 'radiogroup', 'row', 'tablist', 'toolbar', 'tree', 'treegrid'],
				labelAttributes: ['label']
			}],
			'jsx-a11y/heading-has-content': ['error', { components: [''] }],
			'jsx-a11y/html-has-lang': 'error',
			'jsx-a11y/iframe-has-title': 'error',
			'jsx-a11y/img-redundant-alt': 'error',
			'jsx-a11y/interactive-supports-focus': 'error',
			'jsx-a11y/label-has-associated-control': ['error', {
				assert: 'both',
				controlComponents: [],
				depth: 25,
				labelAttributes: [],
				labelComponents: []
			}],
			'jsx-a11y/lang': 'error',
			'jsx-a11y/media-has-caption': ['error', { audio: [], video: [], track: [] }],
			'jsx-a11y/mouse-events-have-key-events': 'error',
			'jsx-a11y/no-access-key': 'error',
			'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],
			'jsx-a11y/no-distracting-elements': ['error', { elements: ['marquee', 'blink'] }],
			'jsx-a11y/no-interactive-element-to-noninteractive-role': ['error', { tr: ['none', 'presentation'] }],
			'jsx-a11y/no-noninteractive-element-to-interactive-role': ['error', {
				li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
				ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
				table: ['grid'],
				td: ['gridcell'],
				ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid']
			}],
			'jsx-a11y/no-noninteractive-tabindex': ['error', { tags: [], roles: ['tabpanel'] }],
			'jsx-a11y/no-redundant-roles': 'error',
			'jsx-a11y/role-has-required-aria-props': 'error',
			'jsx-a11y/role-supports-aria-props': 'error',
			'jsx-a11y/scope': 'error',
			'jsx-a11y/tabindex-no-positive': 'error',
			'jsx-quotes': ['error', 'prefer-double'],
			'no-underscore-dangle': ['error', {
				allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
				allowAfterSuper: false,
				allowAfterThis: false,
				allowAfterThisConstructor: false,
				allowFunctionParams: true,
				allowInArrayDestructuring: true,
				allowInObjectDestructuring: true,
				enforceInClassFields: false,
				enforceInMethodNames: true
			}],
			'react/button-has-type': ['error', { button: true, reset: false, submit: true }],
			'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],
			'react/destructuring-assignment': ['error', 'always'],
			'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],
			'react/forbid-prop-types': ['error', {
				checkChildContextTypes: true,
				checkContextTypes: true,
				forbid: ['any', 'array', 'object']
			}],
			'react/function-component-definition': ['error', { namedComponents: ['function-declaration', 'function-expression'], unnamedComponents: 'function-expression' }],
			'react/jsx-boolean-value': ['error', 'never', { always: [] }],
			'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
			'react/jsx-closing-tag-location': 'error',
			'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
			'react/jsx-curly-newline': ['error', { multiline: 'consistent', singleline: 'consistent' }],
			'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
			'react/jsx-equals-spacing': ['error', 'never'],
			'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
			'react/jsx-fragments': ['error', 'syntax'],
			'react/jsx-indent': ['error', 'tab'],
			'react/jsx-indent-props': ['error', 'tab'],
			'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
			'react/jsx-no-comment-textnodes': 'error',
			'react/jsx-no-constructed-context-values': 'error',
			'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
			'react/jsx-no-script-url': ['error', [{ name: 'Link', props: ['to'] }]],
			'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always', links: true, forms: false }],
			'react/jsx-no-undef': 'error',
			'react/jsx-no-useless-fragment': 'error',
			'react/jsx-pascal-case': ['error', { allowAllCaps: true, ignore: [] }],
			'react/jsx-props-no-multi-spaces': 'error',
			'react/jsx-props-no-spreading': ['error', {
				custom: 'enforce',
				exceptions: [],
				explicitSpread: 'ignore',
				html: 'enforce'
			}],
			'react/jsx-sort-props': ['error', {
				callbacksLast: false,
				ignoreCase: false,
				locale: 'auto',
				multiline: 'ignore',
				noSortAlphabetically: false,
				reservedFirst: true,
				shorthandFirst: false,
				shorthandLast: false
			}],
			'react/jsx-tag-spacing': ['error', {
				afterOpening: 'never',
				beforeClosing: 'never',
				beforeSelfClosing: 'always',
				closingSlash: 'never'
			}],
			'react/jsx-uses-react': 'warn',
			'react/jsx-uses-vars': 'warn',
			'react/jsx-wrap-multilines': ['error', {
				arrow: 'parens-new-line',
				assignment: 'parens-new-line',
				condition: 'parens-new-line',
				declaration: 'parens-new-line',
				logical: 'parens-new-line',
				prop: 'parens-new-line',
				return: 'parens-new-line'
			}],
			'react/no-access-state-in-setstate': 'error',
			'react/no-arrow-function-lifecycle': 'error',
			'react/no-children-prop': 'error',
			'react/no-danger-with-children': 'error',
			'react/no-deprecated': 'error',
			'react/no-did-update-set-state': 'error',
			'react/no-find-dom-node': 'error',
			'react/no-invalid-html-attribute': 'error',
			'react/no-is-mounted': 'error',
			'react/no-namespace': 'error',
			'react/no-redundant-should-component-update': 'error',
			'react/no-render-return-value': 'error',
			'react/no-string-refs': 'error',
			'react/no-this-in-sfc': 'error',
			'react/no-typos': 'error',
			'react/no-unescaped-entities': 'error',
			'react/no-unknown-property': 'error',
			'react/no-unstable-nested-components': 'error',
			'react/no-unused-class-component-methods': 'error',
			'react/no-unused-prop-types': ['error', { customValidators: [], skipShapeProps: true }],
			'react/no-unused-state': 'error',
			'react/no-will-update-set-state': 'error',
			'react/prefer-es6-class': ['error', 'always'],
			'react/prefer-exact-props': 'error',
			'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
			'react/react-in-jsx-scope': 'error',
			'react/require-default-props': ['error', { forbidDefaultForRequired: true }],
			'react/require-render-return': 'error',
			'react/self-closing-comp': 'error',
			'react/sort-comp': ['error', {
				order: ['static-variables', 'static-methods', 'instance-variables', 'lifecycle', '/^handle.+$/', '/^on.+$/', 'getters', 'setters', '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/', 'instance-methods', 'everything-else', 'rendering'],
				groups: {
					lifecycle: ['displayName', 'propTypes', 'contextTypes', 'childContextTypes', 'mixins', 'statics', 'defaultProps', 'constructor', 'getDefaultProps', 'getInitialState', 'state', 'getChildContext', 'getDerivedStateFromProps', 'componentWillMount', 'UNSAFE_componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'UNSAFE_componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'UNSAFE_componentWillUpdate', 'getSnapshotBeforeUpdate', 'componentDidUpdate', 'componentDidCatch', 'componentWillUnmount'],
					rendering: ['/^render.+$/', 'render']
				}
			}],
			'react/state-in-constructor': ['error', 'always'],
			'react/static-property-placement': ['error', 'property assignment'],
			'react/style-prop-object': 'error',
			'react/void-dom-elements-no-children': 'error'
		}
	}
];
