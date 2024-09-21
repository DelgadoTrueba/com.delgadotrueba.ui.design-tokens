const cssTransformGroup = [
  'attribute/cti',        // Adds category, type, and item attributes
  'name/cti/kebab',       // Converts names to kebab-case
  'size/rem',             // Converts size values to rem units
  'color/css',            // Converts color values to CSS-compatible formats
  'modular-scale/px',    // Your custom transformer
];

export default {
  "source": ["src/tokens/**/*.json5"],
  "platforms": {
    "css": {
      transforms: [...cssTransformGroup],
      "transformGroup": "css",
      "buildPath": "dist/css/",
      "files": [
        {
          "destination": "_variables.css",
          "format": "css/variables"
        }
      ]
    }
  }
}
