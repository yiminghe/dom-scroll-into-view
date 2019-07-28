import { addParameters, configure } from '@storybook/react';

addParameters({
  options: {
    theme: {
      brandTitle: 'dom-scroll-into-view',
      brandUrl: 'https://github.com/yiminghe/dom-scroll-into-view/',
    },
  },
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
