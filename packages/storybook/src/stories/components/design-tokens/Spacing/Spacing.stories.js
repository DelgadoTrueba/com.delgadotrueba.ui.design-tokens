import { Spacing } from './Spacing';

export default {
  title: 'DesignTokens/Spacing',
  argTypes: {
  },
};

const Template = ({ label, ...args }) => {
  return Spacing({ label, ...args });
};

export const Primary = Template.bind({});
Primary.args = {};

