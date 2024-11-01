import themeCommon from '../../../design-tokens/dist/css/dt-theme.common.json';
import {filterObjectByString} from "../utils/themeJson"

export const fonts = filterObjectByString(themeCommon, 'text-style')
console.log({fonts})

export function parseFontString(fontString) {
    const fontRegex = /(\d+)\s+([\d.]+rem)\/([\d.]+)\s+([^;]+)/;
    const match = fontString.match(fontRegex);
  
    if (!match) {
      throw new Error("El formato de la cadena de fuente no es válido.");
    }
  
    return {
      weight: match[1],
      size: match[2],
      lineHeight: match[3],
      fontFamily: `'${match[4]}'`
    };
  }