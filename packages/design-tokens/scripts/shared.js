function setDefaultEnvValue(key, value) {
    if (typeof process.env[key] === 'undefined') {
        process.env[key] = value;
    }
}

setDefaultEnvValue(
    'CONFIG',
    'css,default'
);
setDefaultEnvValue('PREFIX', 'dt');
setDefaultEnvValue('OUTPUT_PATH', 'dist/');
setDefaultEnvValue('OUTPUT_BASE_FILENAME', 'design-tokens');


// Transforms
import "./transformers/modular-scale/px/index.js"
import "./transformers/modular-scale/rem/index.js"

import "./transformers/shadow/css/index.js"







