const { PREFIX, OUTPUT_PATH, OUTPUT_BASE_FILENAME } = process.env;


const cssTransformGroup = [
  'attribute/cti',        // Adds category, type, and item attributes
  'name/cti/kebab',       // Converts names to kebab-case
  'size/rem',             // Converts size values to rem units
  'color/css',            // Converts color values to CSS-compatible formats
  'modular-scale/px',    // Your custom transformer
];

export default {
  include: ['src/tokens/**/*.json5'],
  source: [
    'src/tokens/**/*.json5',
  ],
  platforms: {
    cssLightData: {
      transforms: [...cssTransformGroup],
      prefix: PREFIX,
      buildPath: OUTPUT_PATH + 'css/',
      files: [
        {
          destination: OUTPUT_BASE_FILENAME + '.light.css',
          format: "css/variables"
        },
      ],
    }
  },
};
