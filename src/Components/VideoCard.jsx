import React from 'react'

const VideoCard = ({info}) => {
  console.log(info);
  const {snippet, statistics}=info;
  const{channelTitle,title,thumbnails}=snippet;

  return (
    <div className='p-5 m-2 w-[355px] shadow-lg'>
      <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url}/>

      <ul>
        <li className='font-bold'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
};

export  const AddVideoCard=({info})=>{
  return(
    <div className='p-1 m-1 border border-red-900'>
      <VideoCard info={info}/>
    </div>
  )
}

export default VideoCard