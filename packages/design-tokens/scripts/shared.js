import StyleDictionary from 'style-dictionary';

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

// Transforms

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
