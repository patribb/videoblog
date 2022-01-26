import {useEffect, useState} from 'react';
import Head from "next/head";
import Header from "../components/Header";
import MenuItem from "../components/MenuItem";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import StreamIcon from "@mui/icons-material/Stream";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout";
import VideoContainer from "../components/VideoContainer";
import RecommendedList from "../components/RecommendedList";
import Collection from "../components/Collection";
import Data from "../components/Data";
import {TimelineLite, gsap} from 'gsap';

export default function Home() {
  gsap.registerPlugin();
  const [isVideo, setIsVideo] = useState({name: Data[0].videoName, videoSrc: Data[1].videoSrc});
  const t1 = new TimelineLite({delay: 0.3});
  useEffect(() => {
    const scrollContainer = document.getElementById('scrollContainer');
    scrollContainer.addEventListener('wheel',(e) =>{
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY
    });
    t1.from('#logo', {x: -50, opcity: 0, ease: 'back.out(1.7)', duration: 0.5}, 'Start')
    .from('#searchBox', {x: -50, opcity: 0, ease: 'back.out(1.7)', duration: 0.5}, 'Start')
    .from('#profileContainer', {x: -50, opcity: 0, ease: 'back.out(1.7)', duration: 0.5}, 'Start')
    .from('#leftMenu div', {xPercent: -100, opcity: 0, stagger: 0.1, ease: 'back.out(1.7)', duration: 0.5}, 'Start')
    .from('#recommendedList div', {xPercent: -100, opcity: 0, stagger: 0.1, ease: 'back.out(1.7)', duration: 0.5}, 'Start')
    .from('#scrollContainer div', {xPercent: -100, opcity: 0, stagger: 0.1, ease: 'back.out(1.7)', duration: 0.5}, 'Start')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-screen h-screen bg-mainBg">
      <Head>
        <title>VideoBlog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* Main Container */}
      <div className=" w-full h-[calc(100%-80px)] flex">
        {/* Left Menu */}
        <div className="md:w-[10%] h-full flex flex-col items-center justify-evenly sm:w-[60px] min-w-[60px] z-10" id="leftMenu">
          <MenuItem icon={<DashboardIcon />} name={"Dashboard"} />
          <MenuItem icon={<VideogameAssetIcon />} name={"Juegos"} />
          <MenuItem icon={<LocalMoviesIcon />} name={"Peliculas"} />
          <MenuItem icon={<StreamIcon />} name={"Streamer"} />
          <MenuItem icon={<WhatshotIcon />} name={"Tendencias"} />
          <MenuItem icon={<ChatIcon />} name={"Mensajes"} />
          <MenuItem icon={<FavoriteIcon />} name={"Favoritos"} />
          <MenuItem icon={<LogoutIcon />} name={"Salir"} />
        </div>
        {/* ----------- */}
        {/* Main Container */}
        <div className="md:w-[90%] h-full sm:w-[calc(100%-60px)]">
          {/* Top section */}
          <div className="w-full h-[70%] max-h-[480px] grid grid-cols-3 gap-2 p-2">
            {/* Video Container */}
            <div className="md:col-span-2 sm:col-span-6 rounded-lg overflow-hidden flex items-center justify-center">
              <VideoContainer data={isVideo} />
            </div>
            {/* Recomended List */}
            <div className="md:col-span-1 sm:col-span-6 bg-searchBg overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-gray-800" id="recommendedList">
             <p className="text-textColor text-[18px] font-bold my-2 px-2">Recomendado</p>
             {Data && Data.map((data) =>(
              <div key={data.id} onClick={() => setIsVideo({name: data.videoName, videoSrc: data.videoSrc})}>
             <RecommendedList imgSrc={data.imgSrc} videoName={data.videoName} />
             </div>
             ))}
            </div>
          </div>
          {/* -------------- */}

          {/* Bottom section */}
          <div className="w-full h-[30%]">
          <div className="flex overflow-x-auto items-center py-2 scrollbar-none" id='scrollContainer'>
          {Data && Data.map(data => (
            <Collection key={data.id} imgSrc={data.imgSrc} videoName={data.videoName}   />
          ))}
          
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
