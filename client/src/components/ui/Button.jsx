function Button({
  children,
  type = "button",
  onClick,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-8
        py-4
        rounded-xl
        font-medium
        transition-all
        duration-300
        bg-[#1E3F20]
        text-white
        hover:scale-105
        hover:shadow-lg
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;