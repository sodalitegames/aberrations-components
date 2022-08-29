/* 
Import the TailwindCss file here so each component uses it in Storybook.
The purged css is imported in src/components/index.ts in order to be shipped with the production code.
*/
import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
