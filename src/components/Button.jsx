export default function Button({ label, disabled, onClick }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}