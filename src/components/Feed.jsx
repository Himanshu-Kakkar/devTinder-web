// import React, { useEffect } from 'react'
// import axios from 'axios'
// import { BASE_URL } from '../utils/constants'
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { addFeed, removeFeed } from '../utils/feedSlice';
// import UserCard from './UserCard';

// const Feed = () => {
//   const feed = useSelector((store) => store.feed);
//   // console.log(feed);
//   const dispatch = useDispatch();

//   const getFeed = async () => {
//     if(feed) return;
//     try {
//       const res = await axios.get(BASE_URL + "/feed", {withCredentials: true});
//       // console.log(res);
//       dispatch(addFeed(res?.data?.data))
//     } catch (err) {
//       // TOD: handle the error
//       // console.error(err);
//     }
//   };

//   useEffect( () => {
//     getFeed();
//   },[]);


//   return (
//     feed && (
//     <div className='flex justify-center my-10'>
      
//       <UserCard user={feed[0]}/> 
//     </div>)  
//   )
// }

// export default Feed


import React, { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addFeed, removeFeed } from '../utils/feedSlice';
import UserCard from './UserCard';

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  // console.log(feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if(feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {withCredentials: true});
      console.log(res);
      dispatch(addFeed(res.data))
    } catch (err) {
      // TODO: handle the error
      // console.error(err);
    }
  };

  useEffect( () => {
    getFeed();
  },[]);


  return (
    feed && (
    <div className='flex justify-center my-10'>
      
      <UserCard user={feed[0]}/> 
    </div>)  
  )
}

export default Feed