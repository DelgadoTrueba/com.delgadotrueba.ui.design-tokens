import './Shadow.css'; // Asegúrate de importar el archivo CSS

const ShadowItem = ({ label, value }) => {
  return (
    <div className="shadow" style={{boxShadow: value}}>
      <span class="shadow-label">var(--{label})</span>
      <span class="shadow-label">bg-{label}</span>
    </div>
  );
};

export function Shadow({ shadowName, shadowData }) {
  return (
    <div className="container">
      <h1 class="subtitle">
        Shadow: <span class="title">{shadowName.replace('dt-', '')}</span>
      </h1>

      <div className="shadows">
        {Object.entries(shadowData).map(([label, value]) => (
          <ShadowItem label={label} value={value} />
        ))}
      </div>
    </div>
  );
}
