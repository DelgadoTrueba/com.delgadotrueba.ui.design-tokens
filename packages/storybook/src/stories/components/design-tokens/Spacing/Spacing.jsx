import './Spacing.css';

import themeCommon from '../../../../../../design-tokens/dist/css/dt-theme.common.json';
import { filterObjectByString } from '../../../../utils/themeJson';
export const spacings = filterObjectByString(themeCommon, 'size-generic');
console.log({ spacings });

function remToPx(rem) {
  const baseFontSize = 16;
  const remValue = parseFloat(rem.replace(/rem$/, ''));

  return remValue * baseFontSize;
}

const data = (Object.entries(spacings) || []).map(([key, value]) => {
  return {
    name: key.replace('dt-size-generic-', ''),
    size: value,
    pixels: `${remToPx(value)}px`,
  };
});

export const Spacing = () => {
  return (
    <div class="flex-table">
      <h1 class="text-3xl font-bold underline text-yellow-400">Hello world!</h1>
      <div class="flex-row header">
        <div class="flex-cell">Name</div>
        <div class="flex-cell">Size</div>
        <div class="pixel-cell">Pixels</div>
      </div>
      {data.map((row, index) => (
        <div class="flex-row">
          <div class="flex-cell">{row.name}</div>
          <div class="flex-cell">{row.size}</div>
          <div class="flex-cell">
            <span class="pixel-box" style={{ width: row.pixels }}></span>
            {row.pixels}
          </div>
        </div>
      ))}
    </div>
  );
};
