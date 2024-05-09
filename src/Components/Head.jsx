import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../Utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SEARCH_API } from '../Utils/constants';
import { json } from 'react-router-dom';
import { cacheResults } from '../Utils/searchSlice';

const Head = () => {

 const [searchQuery,setSearchQuery]=useState("");
 const [suggestions,setSuggestions]=useState([]);
 const [showSuggestions,setShowSuggestions]=useState(false);

 const searchCache=useSelector((store)=>store.search)
 const dispatch=useDispatch();

 console.log(searchQuery);

 useEffect(()=>{
//make an API call after every key press
//but if the difference between 2 API calls is < 200ms
//decline the API call
const timer=setTimeout(()=>{ 
  if(searchCache[searchQuery]){
    setSuggestions(searchCache[searchQuery]);
  }else{
    getSearchSuggestions();
  }
 },200) ;

return ()=>{
  clearTimeout(timer);
}; 
},[searchQuery])

const getSearchSuggestions=async()=>{
  const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
  const json=await data.json();
  setSuggestions(json[1]);

  console.log(json[1]);
  //update cache
  dispatch(cacheResults({
    [searchQuery]:json[1],
  }))
}

  // const dispatch=useDispatch();
  const toggleMenuHandler=()=>{
     dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex'>
        <img
        onClick={()=>toggleMenuHandler()}
         alt='menu'
        className='h-9 cursor-pointer'
         src='https://static.vecteezy.com/system/resources/previews/002/292/406/non_2x/hamburger-menu-line-icon-free-vector.jpg'/>
    

        <img alt='youtube-clone' 
        className='h-9 mx-2'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&usqp=CAU'/>
  
    </div>

    <div className='col-span-10 px-10'>

      <input type='text' className='w-1/2 border border-gray-500 p-2 rounded-l-full'
      value={searchQuery}
      onChange={(e)=>setSearchQuery(e.target.value)}
      onFocus={()=>setShowSuggestions(true)}
      onBlur={()=>setShowSuggestions(false)}
      />

      <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>🔍</button>
      
      {showSuggestions &&(
      <div className='fixed bg-white py=2 px-5 w-[30rem] shadow-lg rounded-lg border border-gray-100'>
    <ul>
      {suggestions.map(s=><li key={s} className='px-3 py-2 shadow-sm hover:bg-gray-100'>🔍{s}</li>)}
      
    </ul>
   </div>
   )}
    </div>

   

    <div className='col-span-1'>
      <img alt='user-icon' src='https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg' className='h-8'/>
    </div>
    </div>
  )
}

export default Head;