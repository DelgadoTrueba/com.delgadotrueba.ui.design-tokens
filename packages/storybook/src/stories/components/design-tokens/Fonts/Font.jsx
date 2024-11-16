import './Font.css';

const fonts = [
  { label: 'Regular', weight: '400', className: 'regular' },
  { label: 'Medium', weight: '500', className: 'medium' },
  { label: 'Semi Bold', weight: '600', className: 'semi-bold' },
  { label: 'Bold', weight: '700', className: 'bold' },
  { label: 'Extra Bold', weight: '800', className: 'extra-bold' },
];

const FontBox = ({ label, weight, className }) => {
  return (
    <div class="font-box">
      <p class={`font-sample ${className}`}>Aa</p>
      <p class="font-label">{label}</p>
      <p class="font-weight">{weight}</p>
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
                    label={value["font-style"]}
                    weight={value["font-weight"]}
                    class={value.className}
                />
            )
        })}
      </div>
    </div>
  );
};
