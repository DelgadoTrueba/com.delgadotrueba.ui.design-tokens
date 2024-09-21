export const isColorAlphaComposite = (value) => {
    return value.hasOwnProperty('color') && typeof value.alpha === 'number';
}