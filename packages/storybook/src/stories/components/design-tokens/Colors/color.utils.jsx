export {filterObjectByString, groupByPrefix} from "../../../../utils/themeJson"



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