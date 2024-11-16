export const filterObjectByString = (colors, searchString) => {
    const filteredObj = {};
    Object.keys(colors).forEach(key => {
        if (key.includes(searchString)) {
            filteredObj[key] = colors[key];
            // delete colors[key]; // Efecto secundario: elimina la propiedad del objeto original
        }
    });
    return filteredObj;
}


export const getCSSValue = (cssVar) => {
    const element = document.querySelector('#theme-provider');

    const style = getComputedStyle(element);

    return style.getPropertyValue(`--${cssVar}`);
}

export const groupByPrefix = (json, groupDeep = 4) => {

    const grouped = {};
    Object.entries(json).forEach(([key, value]) => {
      let keyArr =  key.split('-')

      while(keyArr.length > groupDeep){
        keyArr = keyArr.slice(0, -1)
      }
      const prefix = keyArr.join('-');

      if (!grouped[prefix]) {
        grouped[prefix] = {};
      }
      grouped[prefix][key] = value;
    });
    return grouped;
  };