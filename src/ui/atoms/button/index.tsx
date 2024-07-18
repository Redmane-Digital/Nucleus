export default function Button({
  children,
  className = '',
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button {...props} type={type} className={className}>
      {children}
    </button>
  );
}
