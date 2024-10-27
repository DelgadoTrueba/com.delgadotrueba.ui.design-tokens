import withTheme, { backgrounds } from './decorators/withTheme';
import {DocsContainer} from '@storybook/addon-docs'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds,
  docs: {
    // MDX and Docs
    container: (props) => {
      function setTheme(theme) {
        console.log({theme});
        const body = document.body;
        if (theme === 'LIGHT') {
          body.setAttribute('data-theme', 'light');
        }
        if (theme === 'DARK') {
          body.setAttribute('data-theme', 'dark');
        }
      }
      
     setTimeout(() => {
      const url = new URL(window.location.href);
      const globals = url.searchParams.get('globals');

      console.log({globals})
      if (globals === 'backgrounds.value:!hex(FFFFFFCC)') {
        setTheme('LIGHT');
      } else if (globals === 'backgrounds.value:!hex(FFFFFFFF)') {
        setTheme('DARK');
      } else {
        setTheme('LIGHT');
      }
     }, 100)

      

      return  <DocsContainer {...props} />
    }
  }
}

export const decorators = [withTheme]