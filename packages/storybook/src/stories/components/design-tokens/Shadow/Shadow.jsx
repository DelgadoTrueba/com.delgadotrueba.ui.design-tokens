import './Shadow.css';

const ShadowItem = ({ label, value }) => {
  return (
    <div className="shadow" style={{boxShadow: value}}>
      <span class="shadow-label">var(--{label})</span>
      <span class="shadow-label">shadow-{label.replace("dt-shadow-general-","")}</span>
    </div>
  );
};

export function Shadow({ shadowName, shadowData }) {
  return (
    <div className="container-shadows">
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
