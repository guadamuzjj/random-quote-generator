export default function BaseIcon({
  color,
  width,
  height,
  children,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
    >
      {children}
    </svg>
  )
};
