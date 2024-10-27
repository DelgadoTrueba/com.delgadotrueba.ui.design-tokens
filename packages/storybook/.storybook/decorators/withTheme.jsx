import { useEffect, useGlobals } from '@storybook/addons';

const LIGHT = '#FFFFFFCC';
const DARK = '#FFFFFFFF';

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


function setTheme(theme) {
  console.log({theme})
  console.log(theme === LIGHT)
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

  useEffect(() => {
    setTheme(global?.backgrounds?.value || LIGHT);
  }, [global?.backgrounds]);

  return <div id="theme-provider" >{Story()}</div>;
};

export const themeEffectMdx = () => {
  const url = new URL(window.location.href);
    const globals = url.searchParams.get('globals');

    console.log({globals})
    if (globals === `backgrounds.value:!hex(${LIGHT})`) {
      setTheme(LIGHT);
    } else  if (globals === `backgrounds.value:!hex(${DARK})`) {
      setTheme(DARK);
    } else {
      setTheme(LIGHT);
    }
}