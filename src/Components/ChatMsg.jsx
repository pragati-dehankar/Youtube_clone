import React from 'react'

const ChatMsg = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-1'>
      <img 
      className='h-8'
      alt='user'
      src='https://www.iconpacks.net/icons/2/free-icon-user-3296.png'/>

      <span className='px-2 font-bold'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMsg