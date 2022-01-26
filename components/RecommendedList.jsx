/* eslint-disable @next/next/no-img-element */
const RecommendedList = ({imgSrc, videoName}) => {
  return (
    <div className="flex items-center mb-2 cursor-pointer px-3 py-2 hover:bg-gray-900 duration-200 ease-in-out">
        <img src={imgSrc} alt={videoName}
        className="sm:w-[60px] sm:h-[60px] lg:w-[140px] lg:h-[80px] rounded-lg object-cover" />
        <div className="ml-2 flex-1">
            <h3 className='text-textColor lg:text-[16px] font-bold sm:text-[12px]'>{videoName}<span className='block text-[12px] text-gray-400'>Morty</span> </h3>
            <div className="flex items-center mt-2">
                <p className='text-[14px] font-bold text-gray-400'>4:30</p>
                <p className='text-[14px] font-bold text-gray-400 ml-6'>102</p>
            </div>
        </div>
    </div>
  )
};

export default RecommendedList;
