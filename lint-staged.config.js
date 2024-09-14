module.exports = {
  'packages/**/*.{js,ts,jsx,tsx,json}': [
    (files) => `npx nx affected:lint --files=${files.join(',')}`,
  ],
};
