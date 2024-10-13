function setDefaultEnvValue(key, value) {
    if (typeof process.env[key] === 'undefined') {
        process.env[key] = value;
    }
}

setDefaultEnvValue(
    'CONFIG',
    'default,css'
);
setDefaultEnvValue('PREFIX', 'dt');
setDefaultEnvValue('OUTPUT_PATH', 'dist/');
setDefaultEnvValue('OUTPUT_BASE_FILENAME', 'design-tokens');


// Transforms
import "./transformers/modular-scale/px/index.js"
import "./transformers/modular-scale/rem/index.js"

import "./transformers/shadow/css/index.js"

import "./transformers/color/css/index.js" //default
import "./transformers/color/alpha/index.js"
import "./transformers/color/alpha-hex/index.js"

import "./transformers/theme/light/index.js"
import "./transformers/theme/dark/index.js"

// Actions
import "./actions/bundle/css/index.js"





