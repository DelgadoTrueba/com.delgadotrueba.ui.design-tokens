import { Font } from './Font';

export default {
  title: 'DesignTokens/Fonts',
  argTypes: {
  },
};

const Template = ({ label, ...args }) => {
  return Font({ label, ...args });
};

export const Fonts = Template.bind({});
Fonts.args = {};

