const MenuItem = ({ icon, name }) => {
  return (
    <div className="flex items-center cursor-pointer relative group">
      <i className="text-gray-500 scale-125 group-hover:text-textColor">{icon}</i>
      <div className="absolute group-hover:block z-50 hidden left-12 bg-textColor px-4 py-1 rounded-md before:absolute before:w-[15px] before:top-2 before:rotate-45 before:h-[15px] before:rounded before:bg-textColor before:left-[-6px]">
        <p className="text-mainBg font-semibold">{name}</p>
      </div>
    </div>
  );
};

export default MenuItem;
