import './Radius.css';

const RadiusItem = ({ label, value }) => {
  return (
    <div className="radius-item" style={{borderRadius: value}}>
      <span class="radius-label">var(--{label})</span>
      <span class="radius-label">radius-{label.replace("dt-radius-general-","")}</span>
    </div>
  );
};

export function Radius({ radiusName, radiusData }) {
  return (
    <div className="container-radius">
      <h1 class="subtitle">
        Radius: <span class="title">{radiusName.replace('dt-', '')}</span>
      </h1>

      <div className="radius">
        {Object.entries(radiusData).map(([label, value]) => (
          <RadiusItem label={label} value={value} />
        ))}
      </div>
    </div>
  );
}
