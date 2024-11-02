import './button.css';

export const Button = ({
  primary = false,
  size = 'medium',
  label,
  onClick,
}) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';

  return (
    <button
      class={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
