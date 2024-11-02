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
  return { name: key.replace('dt-size-generic', '').replace(/-/g, ' '), size: value, pixels: `${remToPx(value)}px` };
});

export const Spacing = () => {
  return (
    <div class="table-container">
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Pixels</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.size}</td>
              <td class="pixel-cell">
                <span class="pixel-bar" style={{ width: row.pixels }}></span>
                {row.pixels}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
