/* eslint-disable @next/next/no-img-element */
const Collection = ({imgSrc, videoName }) => {
  return (
    <div className="min-w-[250px] max-h-[140px] w-[250px] h-[100%] rounded-lg mx-2 relative overflow-hidden cursor-pointer">
        <img 
        className='w-full h-full object-cover'
        src={imgSrc} alt={videoName} />
        <div className="w-full h-[40px] bg-collectionBg absolute bottom-0 flex items-center px-2">
            <h2 className="text-textColor text-[16px] font-bold">{videoName}</h2>
        </div>
    </div>
  )
};

export default Collection;
