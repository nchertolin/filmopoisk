module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/naming-convention': 'off',
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': 'off',
        'class-methods-use-this': 'off',
        'max-classes-per-file': 'off',
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'max-len': ['warn', 120],
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-namespace': 'off',
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: ['state'],
            },
        ],
        'arrow-parens': ['error', 'as-needed'],
        'react/function-component-definition': [
            'warn',
            {
                namedComponents: 'arrow-function',
            },
        ],
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'react/jsx-filename-extension': [1, { 'extensions': ['.tsx'] }],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
