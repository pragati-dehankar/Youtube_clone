import React, { useEffect, useState } from 'react'
import { YOUTUBE_VEDIOS_API } from '../Utils/constants';
import VideoCard ,{AddVideoCard} from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const[videos,setVedios]=useState([]);

  useEffect(()=>{
    getVideos();
  },[]);

  const getVideos=async()=>{
    const data=await fetch(YOUTUBE_VEDIOS_API);
    const json=await data.json();
    console.log(json.items);
    setVedios(json.items);
  }

  return (
    <div className='flex-wrap flex'>
     { videos[0] && <AddVideoCard info={ videos[0]}/>}
      {/* <VideoCard info={videos[2]}/> */}
     { videos.map(video=>(
    <Link key={video.id}  to={"/watch?v="+video.id}><VideoCard info={video}/></Link> 
    //<Link to={"/watch?v="+video.id}><VideoCard key={video.id} info={video}/></Link> 
     ))}
    </div>
  )
};


export default VideoContainer;