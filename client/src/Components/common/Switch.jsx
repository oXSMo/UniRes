function Switch({
  active,
  setactive,
  onClick,
  className,
  width = 48,
  disbaled = false,
}) {
  return (
    <aside
      style={{ width: `${width}px` }}
      onClick={() => {
        if (!disbaled) onClick ? onClick() : setactive(!active);
      }}
      className={`relative border-gray-400 border  duration-200 ring-blue-600 group bg-gray-400 cursor-pointer rounded-full p-px h-6
         ${active ? "bg-blue-600! border-blue-600!" : ""}
         ${disbaled ? "opacity-40 cursor-not-allowed!" : "hover:ring-2"}
         ${className}`}
    >
      <span
        style={{
          transform: `${
            active
              ? `translateX(calc(${width - 6}px - 100%))`
              : "translateX(2px)"
          } translateY(-50%)`,
        }}
        className={`absolute h-[calc(80%)] top-1/2 duration-500 aspect-square rounded-full shadow-md bg-black/15 bg-white  
            
        `}
      />
    </aside>
  );
}

export default Switch;
