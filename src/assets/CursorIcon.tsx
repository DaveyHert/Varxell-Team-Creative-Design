const CursorIcon = ({ color }: { color: string }) => {
  return (
    <svg width='13' height='13' viewBox='0 0 10 10' fill='none'>
      <path d='M0 0L10 5L0 10L2 5L0 0Z' fill={color} />
    </svg>
  );
};
export default CursorIcon;
