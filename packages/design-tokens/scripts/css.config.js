const { PREFIX, OUTPUT_PATH, OUTPUT_BASE_FILENAME } = process.env;


const cssTransformGroup = [
  'attribute/cti',        // Adds category, type, and item attributes
  'name/cti/kebab',       // Converts names to kebab-case
  'size/rem',             // Converts size values to rem units
  'color/css',            // Converts color values to CSS-compatible formats
  // Your custom transformer
  'modular-scale/px',
  'shadow/css',
  'color/alpha',
];

export default {
  include: ['src/tokens/core/**/*.json5'],
  source: [
    'src/tokens/semantic/**/*.json5'
  ],
  platforms: {
    cssLightData: {
      transforms: [
        'theme-light',
        ...cssTransformGroup],
      prefix: PREFIX,
      buildPath: OUTPUT_PATH + 'css/',
      files: [
        { format: "css/variables", ext: '.css' },
        { format: 'json/flat', ext: '.json' }
      ].map(({ format, ext }) => {
        return {
          format,
          destination: OUTPUT_BASE_FILENAME + '.light' + ext,
          filter: (token) =>
            token.path[0] !== 'core'
        }
      })
    },
    cssDarkOnlyData: {
      transforms: ['theme-dark', ...cssTransformGroup,],
      prefix: PREFIX,
      buildPath: OUTPUT_PATH + 'css/',
      files: [
        { format: "css/variables", ext: '.css' },
        { format: 'json/flat', ext: '.json' }
      ].map(({ format, ext }) => {
        return {
          format,
          destination: OUTPUT_BASE_FILENAME + '.dark' + ext,
          filter: (token) =>
            token.path[0] !== 'core'
        }
      }),
      // actions: ['bundle_css'],
    },
  },
};
