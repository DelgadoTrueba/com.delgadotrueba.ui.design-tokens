import './Spacing.css';

import themeCommon from '../../../../../../design-tokens/dist/css/dt-theme.common.json';
import { filterObjectByString } from '../../../../utils/themeJson';
export const spacings = filterObjectByString(themeCommon, 'dt-size-');
console.log({ spacings });

function remToPx(rem) {
  const baseFontSize = 16;
  const remValue = parseFloat(rem.replace(/rem$/, ''));

  return remValue * baseFontSize;
}

const data = (Object.entries(spacings) || [])
  .map(([key, value]) => {
    return {
      key,
      name: key.replace('dt-size-', '').replace('-', '.'),
      size: value,
      pixels: `${remToPx(value)}px`,
    };
  })
  .sort((a, b) => remToPx(a.size) - remToPx(b.size));

export const Spacing = () => {
  return (
    <div class="flex-table">
      <div class="flex-row header">
        <div class="flex-cell">Name</div>
        <div class="flex-cell">CSS</div>
        <div class="flex-cell">Size</div>
        <div class="pixel-cell">Pixels</div>
      </div>
      {data.map((row, index) => (
        <div class="flex-row">
          <div class="flex-cell">w-{row.name}</div>
          <div class="flex-cell">var(--{row.key})</div>
          <div class="flex-cell">{row.size}</div>
          <div class="flex-cell">
            {/* <span class="pixel-box" style={{ width: row.pixels }}></span> */}
            <span class={`pixel-box w-${row.name}`}></span>
            {row.pixels}
          </div>
        </div>
      ))}
    </div>
  );
};
