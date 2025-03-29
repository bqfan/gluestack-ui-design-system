import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { mergeConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    'storybook-dark-mode',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chromatic-com/storybook',
  ],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    reactDocgen: false,
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(config) {
    // Create clean optimizeDeps object without any disabled property
    const cleanOptimizeDeps = {
      exclude: [
        'react-native',
        '@gluestack-ui/button',
        '@gluestack-ui/react-native-aria',
      ],
      esbuildOptions: {
        loader: {
          '.js': 'jsx',
        },
      },
    };

    // Create the final config by merging with your customizations
    const finalConfig = mergeConfig(config, {
      optimizeDeps: cleanOptimizeDeps,
      plugins: [
        ...config.plugins,
        {
          name: 'react-native-web-resolver',
          resolveId(source) {
            if (source === 'InputAccessoryView') {
              return join(__dirname, './rn-mocks/InputAccessoryView.js');
            }
          },
        },
      ],
      define: {
        'process.env': {},
        '__DEV__': true,
      },
      resolve: {
        alias: {
          '@custom-ui/themed': join(__dirname, '../../../packages/themed/src'),
          '@custom-ui/config': join(
            __dirname,
            '../../../packages/config/src/gluestack-ui.config'
          ),
          '@gluestack-ui/button': join(
            __dirname,
            '../../../node_modules/@gluestack-ui/button'
          ),
          '@gluestack-ui/react-native-aria': join(
            __dirname,
            '../../../node_modules/@gluestack-ui/react-native-aria'
          ),
          'react-native': 'react-native-web',
          'InputAccessoryView': join(
            __dirname,
            './rn-mocks/InputAccessoryView.js'
          ),
        },
      },
      // optimizeDeps: {
      //   // Only specify what you need - no disabled property
      //   exclude: [
      //     'react-native',
      //     '@gluestack-ui/button',
      //     '@gluestack-ui/react-native-aria',
      //   ],
      //   esbuildOptions: {
      //     loader: {
      //       '.js': 'jsx',
      //     },
      //   },
      // },
    });

    // Clean up any undefined or null values that might cause issues
    Object.keys(finalConfig.optimizeDeps).forEach((key) => {
      if (finalConfig.optimizeDeps[key] == null) {
        delete finalConfig.optimizeDeps[key];
      }
    });

    return finalConfig;
  },
};
