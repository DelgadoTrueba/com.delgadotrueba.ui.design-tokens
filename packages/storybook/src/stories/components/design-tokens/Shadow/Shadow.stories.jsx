import { Shadow } from './Shadow';
import shadows from './Shadow.utils';

export default {
  title: 'DesignTokens/Shadows',
  argTypes: {},
};

const Template = ({ label, ...args }) => {
  console.log(shadows);
  return Object.entries(shadows).map(([shadowName, shadowData]) => {
    
    return <Shadow shadowName={shadowName} shadowData={shadowData} />;
  });
};

export const Shadows = Template.bind({});
Shadows.args = {};
