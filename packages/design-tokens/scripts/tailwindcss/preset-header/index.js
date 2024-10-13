import StyleDictionary from 'style-dictionary';

/**
 * Custom file header for Tailwind CSS which adds some useful info
 */
StyleDictionary.registerFileHeader({
    name: 'tailwindcss/preset-header',
    fileHeader: (defaultMessage) => {
        return [
            ...defaultMessage,
            ``,
            `You can find info about usage here:`,
            ` - TODO learn`,
            `  - https://github.com/telekom/design-tokens#how-to-use-the-tailwindcss-preset`,
            `  - https://tailwindcss.com/docs/presets`,
        ];
    },
});