function IconButton({ children, badge = 0 }) {
  return (
    <button
      className="
        relative
        p-2
        rounded-full
        transition-all
        duration-300
        hover:bg-[#F3EFE6]
        hover:scale-105
      "
    >
      {children}

      {badge > 0 && (
        <span
          className="
            absolute
            -top-1
            -right-1
            h-5
            w-5
            rounded-full
            bg-[#D4AF37]
            text-white
            text-xs
            flex
            items-center
            justify-center
          "
        >
          {badge}
        </span>
      )}
    </button>
  );
}

export default IconButton;