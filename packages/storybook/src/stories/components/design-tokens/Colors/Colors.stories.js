import { Color } from './Colors';
import './Color.stories.css';

export default {
  title: 'DesignTokens/Colors',
  argTypes: {},
};

import {
  transformarColores,
  filterObjectByString,
  groupColorsByPrefix,
  colors,
} from './color.utils.jsx';

const primaryColors = groupColorsByPrefix(
  filterObjectByString(colors, 'color-primary'),
  3
);

const backgroundColors = groupColorsByPrefix(
  filterObjectByString(colors, 'color-background'),
  4
);

const uiBorderColor = groupColorsByPrefix(
  filterObjectByString(colors, 'color-ui-border'),
  4
);

const uiStateColor = groupColorsByPrefix(
  filterObjectByString(colors, 'color-ui-state'),
  4
);

const uiColor = groupColorsByPrefix(
  filterObjectByString(colors, 'color-ui'),
  2
);

const funtionalColor = groupColorsByPrefix(
  filterObjectByString(colors, 'color-functional'),
  4
);

const additionalColor = groupColorsByPrefix(
  filterObjectByString(colors, 'color-additional'),
  3
);

const textIconColor = groupColorsByPrefix(
  filterObjectByString(colors, 'text-and-icon'),
  5
);

const mapperColors = (obj) => {
  return Object.entries(obj).map(([key, value]) => {
    return {
      label: key,
      tailwind: key
        .replace('dt-color-', '')
        .replace('dt-', '')
        .replace('-standard', '')
        .replace('text-and-icon', 'text-&-icon')
    };
  });
};

const Template = ({ label, ...args }) => {
  return (
    <>
      <p class="bg-red-700">
        La paleta de colores predeterminada de esta librería se inspira en el
        sistema de Tailwind, proporcionando una gama de colores coherente y
        versátil para aplicar en distintos elementos de la interfaz. Los colores
        están disponibles globalmente en la libreria y pueden ser utilizados en
        clases como text-, bg-, border-, entre otras, facilitando la
        personalización de colores en el texto, fondos y bordes de los
        componentes.
      </p>
      <br/>
      <p>Solo podran utilizarse los siguientes colores:</p>
      <div>
        {[
          { dataName: 'color-background', data: backgroundColors },
          { dataName: 'color-ui-border', data: uiBorderColor },
          { dataName: 'color-ui-state', data: uiStateColor },
          { dataName: 'color-ui', data: uiColor },
          { dataName: 'color-primary', data: primaryColors },
          { dataName: 'color-functional', data: funtionalColor },
          { dataName: 'color-additional', data: additionalColor },
          { dataName: 'color-text-icon', data: textIconColor },
          // { dataName: 'others', data: colors },
        ].map(({ dataName, data }) => {
          return (
            <div>
              <h1 class="title">
                {'>'}
                {dataName}
              </h1>
              {Object.entries(data).map(([group, colors]) => {
                return (
                  <div>
                    <Color
                      colorsData={mapperColors(colors)}
                      colorName={group}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export const Colors = Template.bind({});
Colors.args = {};
