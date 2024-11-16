import './Font.css';

const FONT_WEIGHT_NAMES = {
    200: 'thin',
    400: 'normal',
    500: 'medium',
    700: 'bold',
    800: 'extra-bold'
};

const FontBox = ({fontStyle, fontWeight, fontFamily }) => {
  return (
    <div class="font-box">
      <p 
        class={`font-sample`}
        style={{
            fontFamily,
            fontStyle,
            fontWeight
        }}  
      >Aa</p>
      <p class="font-label">style: {fontStyle}</p>
      <p class="font-label">weight: {FONT_WEIGHT_NAMES[fontWeight]}</p>
    </div>
  );
};

export const Font = ({fontName, fontData}) => {
  return (
    <div class="container">
      <h1 class="subtitle">
        Typeface: <span class="title">{fontName.replace('dt-typography-font-face-', '')}</span>
      </h1>
      <div class="font-weights">
        {Object.entries(fontData).map(([key, value]) => {
            return (
                <FontBox
                    key={key}
                    fontStyle={value["font-style"]}
                    fontWeight={value["font-weight"]}
                    fontFamily={value["font-family"]}
                />
            )
        })}
      </div>
    </div>
  );
};
