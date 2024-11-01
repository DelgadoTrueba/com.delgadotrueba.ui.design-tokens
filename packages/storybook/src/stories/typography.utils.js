import themeCommon from '../../../design-tokens/dist/css/dt-theme.common.json';
import {filterObjectByString} from "../utils/themeJson"

export const fonts = filterObjectByString(themeCommon, 'text-style')
console.log({fonts})