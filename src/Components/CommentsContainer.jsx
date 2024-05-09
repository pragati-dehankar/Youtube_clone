import React from 'react';

const commentsData=[
  {
    name:"Pragti Dehankar",
    text:"Akshay Saini is the best teacher for javasript and Reat.js",
    replies:[
    {
    name:"Pragti Dehankar",
    text:"Akshay Saini is the best teacher for javasript and Reat.js",
    replies:[
       {
    name:"Pragti Dehankar",
    text:"Akshay Saini is the best teacher for javasript and Reat.js",
    replies:[
       {
    name:"Pragti Dehankar",
    text:"Akshay Saini is the best teacher for javasript and Reat.js",
    replies:[
       {
    name:"Pragti Dehankar",
    text:"Akshay Saini is the best teacher for javasript and Reat.js",
    replies:[
       {
    name:"Pragti Dehankar",
    text:"Akshay Saini is the best teacher for javasript and Reat.js",
    replies:[]
  },
    ]
  },
    ]
  },
    ]
  },
    ]
  },
    ]
  },
   {
    name:"Pragti Dehankar",
    text:"Akshay Saini is the best teacher for javasript and Reat.js",
    replies:[
       {
    name:"Pragti Dehankar",
    text:"Akshay Saini is the best teacher for javasript and Reat.js",
    replies:[
      
    ]
  },
    ]
  },
   {
    name:"Pragti Dehankar",
    text:"Akshay Saini is the best teacher for javasript and Reat.js",
    replies:[
       {
    name:"Pragti Dehankar",
    text:"Akshay Saini is the best teacher for javasript and Reat.js",
    replies:[
      
    ]
  },
    ]
  },
   {
    name:"Pragti Dehankar",
    text:"Akshay Saini is the best teacher for javasript and Reat.js",
    replies:[
       {
    name:"Pragti Dehankar",
    text:"Akshay Saini is the best teacher for javasript and Reat.js",
    replies:[
      
    ]
  },
    ]
  },
   {
    name:"Pragti Dehankar",
    text:"Akshay Saini is the best teacher for javasript and Reat.js",
    replies:[
       {
    name:"Pragti Dehankar",
    text:"Akshay Saini is the best teacher for javasript and Reat.js",
    replies:[
      
    ]
  },
    ]
  },
   {
    name:"Pragti Dehankar",
    text:"Akshay Saini is the best teacher for javasript and Reat.js",
    replies:[
       {
    name:"Pragti Dehankar",
    text:"Akshay Saini is the best teacher for javasript and Reat.js",
    replies:[
      
    ]
  },
    ]
  },
  
];

const Comment=({data})=>{
  const {name,text,replies}=data;
 return (
 <div className='flex shadow-sm bg-gray-200 p-2 rounded-lg my-2'>
  <img alt='user' src='https://www.iconpacks.net/icons/2/free-icon-user-3296.png' className='h-12 w-12 '/>

  <div className='px-3'>
    <p className='font-bold'>{name}</p>
    <p>{text}</p>
  </div>
 </div>
 )
};

const CommentList=({comments})=>{
  //don't use indexes as keys 
  return comments.map((comment,index)=> (
  <div key={index}>
  <Comment data={comment}/> 
   
    {/*
    //recursion
    <div>
    <CommentList comment={comment.replies}/>
  </div> */}
  <div className='pl-5 border border-l-black ml-5'>
  <Comment data={comment}/> 
  <div className='pl-5 border border-l-black ml-5'>
  <Comment data={comment}/> 
  <div className='pl-5 border border-l-black ml-5'>
  <Comment data={comment}/>
  <div className='pl-5 border border-l-black ml-5'>
  <Comment data={comment}/> 
  <div className='pl-5 border border-l-black ml-5'>
  <Comment data={comment}/> 
  </div>
  </div> 
  </div>
  </div>
  </div>
 
   </div>
  ));
};
  

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments:</h1>
      <CommentList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;