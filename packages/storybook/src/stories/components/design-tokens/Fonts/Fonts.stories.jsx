import { Font } from './Font';
import { fonts } from './font.utils';

export default {
  title: 'DesignTokens/Fonts',
  argTypes: {
  },
};

const Template = ({ label, ...args }) => {
  return Object.entries(fonts).map(([fontName, fontData]) => {
    return  <>
    <Font fontName={fontName} fontData={fontData}/>
    <br/>
    </>
  })
};

export const Fonts = Template.bind({});
Fonts.args = {};

