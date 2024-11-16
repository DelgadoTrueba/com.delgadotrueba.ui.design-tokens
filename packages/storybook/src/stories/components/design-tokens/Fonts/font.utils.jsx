import {filterObjectByString, groupByPrefix} from "../../../../utils/themeJson"

import _fonts from '../../../../../../design-tokens/dist/css/dt-theme.fonts.json';

const sans = groupByPrefix(
  filterObjectByString(_fonts, 'typography-font-face-sans'),
  5
);

export const fonts = {
  ...sans
}

console.log({fonts})