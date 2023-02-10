export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    // inlineStories: false,
  },
  options: {
    storySort: {
      method: '',
      order: [
        'Overview',
        ['Introduction', 'API'],
        'Getting Started',
        ['Installation', 'AppProvider', 'Typescript'],
        'Components',
        ['Actionsheet', 'AlertDialog', 'Button', 'Avatar'],
      ],
    },
  },
};
