import StyleDictionary from 'style-dictionary';
import Color from 'tinycolor2';

setDefaultEnvValue(
    'CONFIG',
    'css,default'
);
setDefaultEnvValue('PREFIX', 'dt');
setDefaultEnvValue('OUTPUT_PATH', 'dist/');
setDefaultEnvValue('OUTPUT_BASE_FILENAME', 'design-tokens');


function setDefaultEnvValue(key, value) {
    if (typeof process.env[key] === 'undefined') {
        process.env[key] = value;
    }
}

function isColorAlphaComposite(value) {
    return value.hasOwnProperty('color') && typeof value.alpha === 'number';
}

// Transforms

/**
 * @param {{ color: string, alpha: number }} value
 * @returns tinycolor2 instance
 */
function transformColorComposite(value) {
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

/**
 * @todo document this better / make it more readable?
 */
function getModularScaleTransform(unit = 'rem') {
    return function (token) {
        const {
            base,
            ratio,
            pow,
            sub_step,
            not_really_modular_just_multiply_base,
        } = token.value;
        const parsedRatio = parseFloat(ratio.replace('px', ''), 10);
        let parsedBase = parseFloat(base.replace(/([pxrem])+/gi, ''), 10);
        if (base.indexOf('rem') > 0 && unit === 'px') {
            parsedBase = parsedBase * 16;
        }
        if (not_really_modular_just_multiply_base) {
            return `${parsedBase * not_really_modular_just_multiply_base}${unit}`;
        }
        let val = Math.pow(parsedRatio, pow) * parsedBase;
        if (sub_step !== 0) {
            const nextStep = Math.pow(parsedRatio, pow + 1) * parsedBase;
            val = val + (nextStep - val) * sub_step;
        }
        return `${unit === 'px' ? Math.ceil(val) : val}${unit}`;
    };
}

/**
 * Calculate composite spacing values based on a ratio, and substeps
 */
StyleDictionary.registerTransform({
    type: 'value',
    name: 'modular-scale/px',
    transitive: true,
    matcher: (token) => token.original.type === 'modular-scale',
    transformer: getModularScaleTransform('px'),
});

/**
 * Calculate composite spacing values based on a ratio, and substeps
 */
StyleDictionary.registerTransform({
    type: 'value',
    name: 'modular-scale/rem',
    transitive: true,
    matcher: (token) => token.original.type === 'modular-scale',
    transformer: getModularScaleTransform('rem'),
});

export default {};
