import './Font.css';

const FONT_WEIGHT_NAMES = {
    200: 'extra-light',
    400: 'normal',
    500: 'medium',
    700: 'bold',
    800: 'extra-bold'
};

const FontBox = ({style, weight, className }) => {
  return (
    <div class="font-box">
      <p class={`font-sample ${className}`}>Aa</p>
      <p class="font-label">style: {style}</p>
      <p class="font-label">weight: {FONT_WEIGHT_NAMES[weight]}</p>
    </div>
  );
};

export const Font = ({fontName, fontData}) => {
  return (
    <div class="container">
      <h1 class="subtitle">
        Typeface: <span class="title">{fontName}</span>
      </h1>
      <div class="font-weights">
        {Object.entries(fontData).map(([key, value]) => {
            return (
                <FontBox
                    key={key}
                    style={value["font-style"]}
                    weight={value["font-weight"]}
                    class={value.className}
                />
            )
        })}
      </div>
    </div>
  );
};
