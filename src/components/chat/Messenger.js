import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../store/chatSlice';
import file from '../../database/db';

import LeftChatBox from './LeftChatBox';
import RightChatBox from './RightChatBox';

const Messenger = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(add(file));
  },[]);
  
  //Fetching state from redux
  const data = useSelector((state) => state.chat[0]);

  return (
    <>
      <div className="container-fluid">

        <div className="main">
          <div className="head ">
            <div className="row">
              {/* ************************   Left Hand  Side   *********************** */}
              <LeftChatBox data2={data} />
              {/*  ************************  Right Hand side *******************  */}
              <RightChatBox />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Messenger