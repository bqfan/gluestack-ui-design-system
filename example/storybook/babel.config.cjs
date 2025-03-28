const path = require('path'); // Use CommonJS require syntax

module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      '@babel/preset-env', // For modern JS support
      '@babel/preset-react', // For React JSX support
    ],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@custom-ui/themed': path.join(
              __dirname, // Now works with CommonJS
              '../../packages/themed/src'
            ),
            '@custom-ui/config': path.join(
              __dirname, // Now works with CommonJS
              '../../packages/config/src/gluestack-ui.config'
            ),
          },
        },
      ],
      '@babel/plugin-transform-runtime',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-transform-modules-commonjs',
    ],
  };
};
