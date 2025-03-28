const path = require('path');
const { createExpoWebpackConfigAsync } = require('@expo/webpack-config');
const { resolver } = require('./metro.config');
const findWorkspaceRoot = require('find-yarn-workspace-root');

// Find the workspace root
const workspaceRoot = findWorkspaceRoot(path.dirname(__dirname)); // Adjusted to use path.dirname properly

const root = path.resolve(__dirname, '../..');
const node_modules = path.join(workspaceRoot, 'node_modules');

module.exports = async (env, argv) => {
  // Get the default Expo Webpack config
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Add rules for JS/TS/TSX files
  config.module.rules.push({
    test: /\.(js|ts|tsx)$/,
    include: [
      path.resolve(root, 'src'),
      path.join(workspaceRoot, 'node_modules/@gluestack-style/react'),
      path.join(workspaceRoot, 'node_modules/@gluestack/ui'),
    ],
    use: 'babel-loader',
  });

  // Add rules for image files
  config.module.rules.push({
    // test: /\.(png|jpe?g|gif)$/i,
    test: /\.(ts|tsx)$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
        plugins: [
          '@babel/plugin-transform-runtime',
          '@babel/plugin-proposal-class-properties',
        ],
      },
    },
    exclude: /node_modules/,
  });

  // Add custom alias for `@custom-ui/config` and `@custom-ui/themed`
  config.resolve.alias = {
    ...config.resolve.alias, // Retain existing aliases
    '@custom-ui/config': path.resolve(
      __dirname,
      '../../packages/config/src/gluestack-ui.config'
    ),
    '@custom-ui/themed': path.resolve(__dirname, '../../packages/themed/src'),
  };

  // Handle file extensions
  config.resolve.extensions.push('.ts', '.tsx');

  // Handle alias for dependencies to avoid multiple versions
  Object.assign(config.resolve.alias, {
    ...resolver.extraNodeModules,
    'react-native-web': path.join(node_modules, 'react-native-web'),
  });

  // Adjust devServer settings for development mode
  if (config.mode === 'development') {
    config.devServer.compress = false;
  }

  // Adjust production settings to disable minimization
  if (config.mode === 'production') {
    config.optimization.minimize = false;
  }

  return config;
};
