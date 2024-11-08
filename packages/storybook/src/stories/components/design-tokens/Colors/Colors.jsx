import './Colors.css';

function getColorValue(cssVar) {
  const element = document.querySelector('body'); // Reemplaza 'selector' con tu selector específico
  const style = getComputedStyle(element);
  return style.getPropertyValue(`--${cssVar}`);
}

function getContrastingColor(color) {
  let r,
    g,
    b,
    a = 1; // Valor alfa predeterminado a 1 (totalmente opaco)

  if(!color){
    return '#000000'; 
  }

  // Detectar si el color es hex o hsla
  if (color.startsWith('#')) {
    // Procesar color hexadecimal
    color = color.replace('#', '');

    if (color.length === 3) {
      // Formato #RGB, expandir a #RRGGBB
      color = color
        .split('')
        .map((char) => char + char)
        .join('');
    }

    r = parseInt(color.substring(0, 2), 16);
    g = parseInt(color.substring(2, 4), 16);
    b = parseInt(color.substring(4, 6), 16);
  } else if (color.startsWith('hsla')) {
    // Procesar color hsla
    const hsla = color.match(
      /hsla\((\d+),\s*(\d+)%,\s*(\d+)%,\s*(\d+(\.\d+)?)\)/
    );
    if (!hsla) throw new Error('Formato de color HSLA inválido.');

    const h = parseInt(hsla[1], 10);
    const s = parseInt(hsla[2], 10) / 100;
    const l = parseInt(hsla[3], 10) / 100;
    a = parseFloat(hsla[4]); // Extraer el valor alfa

    // Si alfa es 0, devolver un color de contraste predeterminado
    if (a === 0) {
      return '#000000'; // Puedes cambiar este valor predeterminado si lo prefieres
    }

    // Convertir HSLA a RGB (ignorar alpha para contraste en caso de opacidad parcial)
    if (s === 0) {
      r = g = b = Math.round(l * 255); // Grises
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = Math.round(hue2rgb(p, q, h / 360 + 1 / 3) * 255);
      g = Math.round(hue2rgb(p, q, h / 360) * 255);
      b = Math.round(hue2rgb(p, q, h / 360 - 1 / 3) * 255);
    }
  } else {
    throw new Error(
      'Formato de color no soportado. Usa hex (#FFFFFF) o hsla(0, 0%, 0%, 0).'
    );
  }

  // Calcular la luminosidad relativa
  const luminance =
    0.2126 * (r / 255) + 0.7152 * (g / 255) + 0.0722 * (b / 255);

  // Si la luminosidad es mayor a 0.5, usar texto negro; de lo contrario, usar texto blanco
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

export const Color = ({ colorsData, colorName }) => {
  return (
    <div class="palette-container">
      <span class="subtitle">{colorName}</span>
      <div class="color-group">
        {colorsData.map((color, index) => (
          <div class="color-row">
            <div
              key={index}
              class="color-swatch"
              style={{
                backgroundColor: `var(--${color.label})`,
                color: getContrastingColor(getColorValue(color.label)),
              }}
            >
              <span class="color-label">var(--{color.label})</span>
              <span class="color-hex">{getColorValue(color.label)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
