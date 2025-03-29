import { dirname, join } from 'node:path';
//import path from 'node:path';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Get the current directory from the module's URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log(path.resolve('../../', 'node_modules/@gluestack-style/react'));
export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  // core: {
  //   builder: 'webpack5', // Ensure Webpack 5 is used
  // },

  addons: [
    'storybook-dark-mode',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',
    //'@storybook/addon-docs',
    //'@geometricpanda/storybook-addon-iframe',
    '@chromatic-com/storybook',
  ],

  staticDirs: ['../public'],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  typescript: {
    reactDocgen: 'none',
  },

  docs: {
    autodocs: true,
  },
};

export const webpackFinal = async (config, { configType }) => {
  // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  // config.module.rules.push({
  //   test: /\.scss$/,
  //   use: ['style-loader', 'css-loader', 'sass-loader'],
  //   include: path.resolve(dirname, '../'),
  // });

  // config.module.rules.push({
  //   test: /\.(js|ts|tsx)$/,
  //   // include: [path.resolve('../../', 'node_modules/@gluestack-style/react')],
  //   use: 'babel-loader',
  // });
  config.module.rules.push({
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        // presets: [
        //   '@babel/preset-env',
        //   '@babel/preset-react',
        //   '@babel/preset-typescript',
        // ],
      },
    },
  });

  config.resolve.alias = {
    ...config.resolve.alias,
    '@custom-ui/themed': path.join(__dirname, '../../../packages/themed/src'),
    '@custom-ui/config': path.join(
      __dirname,
      '../../../packages/config/src/gluestack-ui.config'
    ),
  };

  config.resolve.alias = {
    ...config.resolve.alias,
    '@custom-ui/config': path.join(
      __dirname,
      '../../../packages/config/src/gluestack-ui.config'
    ),
  };

  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto',
  });

  config.resolve.extensions.push('.ts', '.tsx');

  // Return the altered config
  return config;
};

// function getAbsolutePath(value) {
//   return dirname(require.resolve(join(value, 'package.json')));
// }
