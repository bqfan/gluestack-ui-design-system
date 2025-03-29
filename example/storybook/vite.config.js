import path from 'path';
import react from '@vitejs/plugin-react';
import { join } from 'path';

export default {
  plugins: [
    react(),
    {
      name: 'react-native-web-resolver',
      resolveId(source) {
        if (source === 'InputAccessoryView') {
          return join(__dirname, './rn-mocks/InputAccessoryView.js');
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@custom-ui/config': path.resolve(
        __dirname,
        '../node_modules/@custom-ui/config'
      ),
      '@custom-ui/themed': path.resolve(
        __dirname,
        '../node_modules/@custom-ui/themed'
      ),
    },
  },
  optimizeDeps: {
    // Only keep necessary options:
    include: ['react-native-web'],
    exclude: ['react-native'],
  },
};
