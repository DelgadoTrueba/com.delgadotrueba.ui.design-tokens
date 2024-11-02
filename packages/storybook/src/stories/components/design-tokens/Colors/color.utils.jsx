export {filterObjectByString} from "../../../../utils/themeJson"

export const groupColorsByPrefix = (colors, groupDeep = 4) => {

    const grouped = {};
    Object.entries(colors).forEach(([key, value]) => {
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

export  const transformarColores = (colores) => {
    const element = document.querySelector('#theme-provider'); // Reemplaza 'selector' con tu selector específico

    // Obtiene el estilo computado del elemento
    const style = getComputedStyle(element);

    let coloresTransformados = {};

    for (const clave in colores) {
      coloresTransformados[style.getPropertyValue(`--${clave}`)] = `var(--${clave})`;
    }
    return coloresTransformados;
  };

  import colorsLight from '../../../../../../design-tokens/dist/css/dt-theme.light.json';

  export const colors =  colorsLight