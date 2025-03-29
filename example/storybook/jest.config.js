import { path, dirname } from 'node:path';

module.exports = {
  roots: ['<rootDir>/__tests__'],
  testEnvironment: 'jsdom',
  modulePaths: ['<rootDir>/example/storybook'],
  // testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-web||@gluestack-style/react|@gluestack-style/animation-plugin|@legendapp/motion|@expo/html-elements|@gluestack/design-system)/)',
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  reporters: ['default', 'jest-junit'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
  testMatch: [
    // '<rootDir>/tests/unit/**/*.test.(js|jsx)',
    '<rootDir>/__tests__/**/*.test.(js|jsx)',
  ],
  forceExit: true,
  moduleFileExtensions: [
    '...',
    'web.tsx',
    'web.ts',
    'web.jsx',
    'web.js',
    'tsx',
    'jsx',
    'ts',
    'js',
    '...',
  ],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '@gluestack-ui/button': path.join(dirname, '../../packages/button/src'),
    '@gluestack-ui/vstack': path.join(dirname, '../../packages/vstack/src'),
    '@gluestack-ui/tooltip': path.join(dirname, '../../packages/tooltip/src'),
    '@gluestack-ui/popover': path.join(dirname, '../../packages/popover/src'),
    '@gluestack-ui/provider': path.join(dirname, '../../packages/provider/src'),
    '@gluestack-ui/textarea': path.join(dirname, '../../packages/textarea/src'),
    '@gluestack-ui/input': path.join(dirname, '../../packages/input/src'),
    '@gluestack-ui/image': path.join(dirname, '../../packages/image/src'),
    '@gluestack-ui/switch': path.join(dirname, '../../packages/switch/src'),
    '@gluestack-ui/avatar': path.join(dirname, '../../packages/avatar/src'),
    '@gluestack-ui/radio': path.join(dirname, '../../packages/radio/src'),
    '@gluestack-ui/spinner': path.join(dirname, '../../packages/spinner/src'),
    '@gluestack-ui/slider': path.join(dirname, '../../packages/slider/src'),
    '@gluestack-ui/checkbox': path.join(dirname, '../../packages/checkbox/src'),
    '@gluestack-ui/divider': path.join(dirname, '../../packages/divider/src'),
    '@gluestack-ui/hstack': path.join(dirname, '../../packages/hstack/src'),
    '@gluestack-ui/progress': path.join(dirname, '../../packages/progress/src'),
    '@gluestack-ui/menu': path.join(dirname, '../../packages/menu/src'),
    '@gluestack-ui/select': path.join(dirname, '../../packages/select/src'),
    '@gluestack-ui/modal': path.join(dirname, '../../packages/modal/src'),
    '@gluestack-ui/fab': path.join(dirname, '../../packages/fab/src'),
    '@gluestack-ui/alert-dialog': path.join(
      dirname,
      '../../packages/alert-dialog/src'
    ),
    '@gluestack-ui/link': path.join(dirname, '../../packages/link/src'),
    '@gluestack-ui/form-control': path.join(
      dirname,
      '../../packages/form-control/src'
    ),
    '@gluestack-ui/icon': path.join(dirname, '../../packages/icon/src'),
    '@gluestack-ui/actionsheet': path.join(
      dirname,
      '../../packages/actionsheet/src'
    ),
    '@gluestack-ui/overlay': path.join(dirname, '../../packages/overlay/src'),
    '@gluestack-ui/stack': path.join(dirname, '../../packages/stack/src'),
    '@gluestack-ui/hooks': path.join(dirname, '../../packages/hooks/src'),
    '@gluestack-ui/pressable': path.join(
      dirname,
      '../../packages/pressable/src'
    ),
    '@gluestack-ui/toast': path.join(dirname, '../../packages/toast/src'),
    '@gluestack-ui/utils': path.join(dirname, '../../packages/utils/src'),
    '@gluestack-ui/tabs': path.join(dirname, '../../packages/tabs/src'),
  },
};
