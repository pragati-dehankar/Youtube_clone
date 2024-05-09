import React, { useEffect, useState } from 'react'
import ChatMsg from './ChatMsg'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Utils/chatSlice';
import { generateRandomName, makeRandomMsg } from '../Utils/helper';


const LiveChat = () => {

  const[liveMessage,setLiveMessage]=useState();

const dispatch=useDispatch();

const chatMssages=useSelector((store)=>store.chat.messages)

  useEffect(()=>{
  const i= setInterval(() => {
    //API Polling 
    dispatch(addMessage({
      name:generateRandomName(),
      message:makeRandomMsg(20),
    }))
   }, 1500);

   return ()=>clearInterval(i);
  },[])

  return (
    <>
    <div className='w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
      <div>
     {chatMssages.map((c,i)=>(
     <ChatMsg 
     key={i}
     name={c.name}
     message={c.message}/>
    ))}
    </div>
    </div>

    <form className='w-full p-2 ml-2 border border-black' 
    onSubmit={(e)=>{e.preventDefault();
      dispatch(addMessage({
        name:"Pragati Dehankar",
        message:liveMessage
      }))
      setLiveMessage("");
    }}>
      <input className=" px-2 w-90" type='text' value={liveMessage} onChange={(e)=>{
        setLiveMessage(e.target.value);
      }}/>
      <button className='px-2 mx-2 bg-pink-100'>Send</button>
    </form>
    </>

  )
}

export default LiveChat;