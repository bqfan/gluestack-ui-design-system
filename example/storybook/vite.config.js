import path from 'path';
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
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
};
