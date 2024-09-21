import StyleDictionary from 'style-dictionary';
import Color from 'tinycolor2';

import {isColorAlphaComposite} from "../../../utils/color/index.js"

/**
 * @param {{ color: string, alpha: number }} value
 * @returns tinycolor2 instance
 */
export const transformColorComposite = (value) => {
    const output = Color(value.color);
    if (!output.isValid()) throw new TypeError('Color value is not valid');
    output.setAlpha(value.alpha);
    return output;
}

/**
 * Handle composite shadow tokens
 */
StyleDictionary.registerTransform({
    type: 'value',
    name: 'shadow/css',
    transitive: true,
    matcher: (token) => token.original.type === 'shadow',
    transformer: (token) => {
        if (typeof token.value === 'string') return token.value;
        const px = (x) => `${x}px`;
        const toCssValue = ({ x, y, blur, spread, color }) => {
            const colorValue = (
                isColorAlphaComposite(color)
                    ? transformColorComposite(color)
                    : Color(color)
            ).toHslString();
            return `${px(x)} ${px(y)} ${px(blur)} ${px(spread)} ${colorValue}`;
        };
        return Array.isArray(token.value)
            ? token.value.map(toCssValue).join(', ')
            : toCssValue(token.value);
    },
});