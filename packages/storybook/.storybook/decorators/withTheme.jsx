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

export default (Story) => {
  const [global] = useGlobals();

  useEffect(() => {
    function setTheme(theme) {
      const body = document.body;
      if (theme === LIGHT) {
        body.setAttribute('data-theme', 'light');
      }
      if (theme === DARK) {
        body.setAttribute('data-theme', 'dark');
      }
    }
    setTheme(global?.backgrounds?.value || LIGHT);
  }, [global?.backgrounds]);

  return <div id="theme-provider" >{Story()}</div>;
};;