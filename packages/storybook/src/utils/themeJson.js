export const filterObjectByString = (colors, searchString) => {
    const filteredObj = {};
    Object.keys(colors).forEach(key => {
        if (key.includes(searchString)) {
            filteredObj[key] = colors[key];
            delete colors[key]; // Efecto secundario: elimina la propiedad del objeto original
        }
    });
    return filteredObj;
}


export const getCSSValue = (cssVar) => {
    const element = document.querySelector('#theme-provider');

    const style = getComputedStyle(element);

    return style.getPropertyValue(`--${cssVar}`);
}