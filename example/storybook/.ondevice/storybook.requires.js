/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from '@storybook/react-native';

global.STORIES = [
  {
    titlePrefix: '',
    directory: './components',
    files: '**/*.stories.?(ts|tsx|js|jsx)',
    importPathMatcher:
      '^\\.[\\\\/](?:components(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$',
  },
];

import '@storybook/addon-ondevice-notes/register';
import '@storybook/addon-ondevice-controls/register';
import '@storybook/addon-ondevice-backgrounds/register';
import '@storybook/addon-ondevice-actions/register';

import { argsEnhancers } from '@storybook/addon-actions/dist/modern/preset/addArgs';

import { decorators, parameters } from './preview';

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require('react-native').LogBox.ignoreLogs([
      '`clearDecorators` is deprecated and will be removed in Storybook 7.0',
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return [
    require('../src/components/composites/Actionsheet/Actionsheet.stories.tsx'),
    require('../src/components/composites/Accordion/Accordion.stories.tsx'),
    require('../src/components/primitives/Text/Text.stories.tsx'),
    require('../src/components/composites/AlertDialog/AlertDialog.stories.tsx'),
    require('../src/components/primitives/Avatar/Avatar.stories.tsx'),
    require('../src/components/primitives/Alert/Alert.stories.tsx'),
    require('../src/components/primitives/Button/Button.stories.tsx'),
    require('../src/components/primitives/Badge/Badge.stories.tsx'),
    require('../src/components/primitives/Button/ButtonGroup.stories.tsx'),
    require('../src/components/primitives/Checkbox/Checkbox.stories.tsx'),
    require('../src/components/primitives/Divider/Divider.stories.tsx'),
    require('../src/components/composites/Fab/Fab.stories.tsx'),
    require('../src/components/primitives/FormControl/FormControl.stories.tsx'),
    require('../src/components/primitives/Heading/Heading.stories.tsx'),
    require('../src/components/primitives/HStack/HStack.stories.tsx'),
    require('../src/components/primitives/Icon/Icon.stories.tsx'),
    require('../src/components/primitives/Input/Input.stories.tsx'),
    require('../src/components/primitives/Link/Link.stories.tsx'),
    require('../src/components/composites/Menu/Menu.stories.tsx'),
    require('../src/components/composites/Modal/Modal.stories.tsx'),
    require('../src/components/composites/Popover/Popover.stories.tsx'),
    require('../src/components/primitives/Pressable/Pressable.stories.tsx'),
    require('../src/components/primitives/Progress/Progress.stories.tsx'),
    require('../src/components/primitives/Radio/Radio.stories.tsx'),
    require('../src/components/primitives/Select/Select.stories.tsx'),
    require('../src/components/primitives/Slider/Slider.stories.tsx'),
    require('../src/components/primitives/Spinner/Spinner.stories.tsx'),
    require('../src/components/primitives/Switch/Switch.stories.tsx'),
    require('../src/components/primitives/Textarea/Textarea.stories.tsx'),
    require('../src/components/primitives/Toast/Toast.stories.tsx'),
    require('../src/components/composites/Tooltip/Tooltip.stories.tsx'),
    require('../src/components/primitives/VStack/VStack.stories.tsx'),
    // require('../src/components/primitives/LinearGradient/LinearGradient.stories.tsx'),
    // require('../src/components/primitives/Tabs/Tabs.stories.tsx'),
    require('../src/components/primitives/Image/Image.stories.tsx'),
    // require('../src/components/custom/IconButton/IconButton.stories.tsx'),
  ];
};

configure(getStories, module, false);
