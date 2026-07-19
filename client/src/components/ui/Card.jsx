function Card({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-2xl
        bg-white
        shadow-sm
        border
        border-gray-100
        p-6
        transition-all
        duration-300
        hover:shadow-xl
        hover:-translate-y-1
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;