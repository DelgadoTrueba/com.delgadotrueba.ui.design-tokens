import { useEffect, useGlobals } from '@storybook/addons';

export const LIGHT = '#FFFFFFCC';
export const DARK = '#FFFFFFFF';

export const backgrounds = {
  values: [
    {
      name: 'LIGHT',
      value: LIGHT,
    },
    {
      name: 'DARK',
      value: DARK,
    },
  ],
}


export function setTheme(theme) {
  const body = document.body;
  if (theme === LIGHT) {
    body.setAttribute('data-theme', 'light');
  }
  if (theme === DARK) {
    body.setAttribute('data-theme', 'dark');
  }
}

export default (Story) => {
  const [global] = useGlobals();
  setTheme(global?.backgrounds?.value || LIGHT);

  useEffect(() => {
    setTheme(global?.backgrounds?.value || LIGHT);
  }, [global?.backgrounds]);

  return <div id="theme-provider" >{Story()}</div>;
};

import {DocsContainer} from '@storybook/addon-docs'

export const ThemeMdx = (props) => {
  setTimeout(() => {
    const url = new URL(window.location.href);
    const globals = url.searchParams.get('globals');

    if (globals === 'backgrounds.value:!hex(FFFFFFCC)') {
      setTheme(LIGHT);
    } else if (globals === 'backgrounds.value:!hex(FFFFFFFF)') {
      setTheme(DARK);
    } else {
      setTheme(LIGHT);
    }
   }, 100)

    return  <DocsContainer {...props} />
}