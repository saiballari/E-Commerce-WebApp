function Badge({ children }) {
  return (
    <span className="
      inline-block
      bg-[#D4AF37]
      text-white
      text-xs
      font-semibold
      px-3
      py-1
      rounded-full
    ">
      {children}
    </span>
  );
}

export default Badge;