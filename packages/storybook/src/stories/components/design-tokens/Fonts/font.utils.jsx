import {filterObjectByString, groupByPrefix} from "../../../../utils/themeJson"

import _fonts from '../../../../../../design-tokens/dist/css/dt-theme.fonts.json';

console.log({_fonts})

const sans = groupByPrefix(
  filterObjectByString(_fonts, 'typography-font-face-open-sans'),
  6
);

export const fonts = {
  ...sans
}

console.log({fonts})