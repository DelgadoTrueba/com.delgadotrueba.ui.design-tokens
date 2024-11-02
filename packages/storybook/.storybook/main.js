module.exports = {
  "stories": [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require('postcss'),
        },
      },
    },
  ],
  "framework": "@storybook/html",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  babel: async (options) => ({
    ...options,
    presets: [...options.presets],
    plugins: [
      ...options.plugins,
      // START ALLOW JSX in stories.jsx
      "@babel/plugin-syntax-jsx",
      [
        "@babel/plugin-transform-react-jsx",
        {
          "runtime": "automatic",
          "importSource": "jsx-dom"
        },
        "unique-name"
      ]
    ]
  }),
  staticDirs: ['../../design-tokens/dist/css'],
}