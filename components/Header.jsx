/* eslint-disable @next/next/no-img-element */
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <div className="flex items-center w-full h-[80px] bg-gray-800 py-4 md:px-8 sm:px-4">
      {/* Logo */}
      <img
        className="md:w-[50px] md:h-[50px] sm:w-[30px] sm:h-[30px] cursor-pointer lg:ml-[15px]"
        src="https://firebasestorage.googleapis.com/v0/b/videoblog-1656d.appspot.com/o/images%2Flogo.png?alt=media&token=7fb94237-5436-4450-8e63-205a503fddbf"
        alt="logo"
        id="logo"
      />
      {/* Search box */}
      <div className="ml-20 bg-searchBg h-[40px] px-2 flex items-center rounded-md overflow-hidden sm:hidden md:flex" id="searchBox">
        <SearchIcon className="text-gray-400" />
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full h-full px-2 placeholder-gray-400 bg-transparent border-none outline-none text-textColor"
        />
      </div>
      {/* Profile container */}
      <div className="flex items-center justify-evenly h-[40px] lg:w-[25%] ml-auto" id="profileContainer">
          <IconButton className='lg:mx-4'>
          <SettingsIcon className='text-gray-400 hover:text-textColor hover:cursor-pointer' />
          </IconButton>
          <IconButton className='lg:mx-4'>
          <NotificationsIcon className='text-gray-400 hover:text-textColor hover:cursor-pointer' />
          </IconButton>
          <div className="flex items-center">
            <img 
            className="w-[40px] h-[40px] rounded-full object-cover min-w-[40px] cursor-pointer"
            src="https://firebasestorage.googleapis.com/v0/b/videoblog-1656d.appspot.com/o/images%2Fportrait.jpg?alt=media&token=d10d28f3-c0db-4f43-ba14-06bcb1c0c8f0" alt="person" />
            <p className="text-textColor text-[16px] font-bold ml-2">Patricia GM <span className="block text-[12px] text-gray-500">Web developer</span></p>
          </div>
      </div>
    </div>
  );
};

export default Header;
