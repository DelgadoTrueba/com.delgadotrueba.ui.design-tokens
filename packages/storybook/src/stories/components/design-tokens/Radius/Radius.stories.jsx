import { Radius as RadiusComp } from './Radius';
import radius from './Radius.utils';

export default {
  title: 'DesignTokens/Radius',
  argTypes: {},
};

const Template = ({ label, ...args }) => {
  console.log(radius);
  return Object.entries(radius).map(([radiusName, radiusData]) => {
    
    return <RadiusComp radiusName={radiusName} radiusData={radiusData} />;
  });
};

export const Radius = Template.bind({});
Radius.args = {};
