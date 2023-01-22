import React from 'react'

import { useDispatch } from 'react-redux';
import { addID } from '../../store/chatSlice';
function ChatLog(props) {
  const dispatch = useDispatch();

  //Add new user in redux
  const setChatID = () => {
    dispatch(addID({
      chatID: props.item.id,
      name: props.item.name,
      picture: props.item.picture
    })) 
  }


  return (
    <div className="users">
      {/* <!-- 1st user --> */}
      <div className="vq6sj _2nY6U " onClick={() => {setChatID() }}>
        <div className="d-flex">
          <div className="img-p mt-2 ">
            <img src={props.item.picture} alt="" className="gl" />
          </div>
        </div>
        <div className="aa d-flex ">
          <div className="bb d-flex">
            <div className="bbb d-flex">
            {props.item.name}
            </div>
            <div className="time">{props.item.chatlog[props.item.chatlog.length - 1].timestamp}</div>
          </div>
          <div className="cc d-flex">
            <div className="dd">
              <span>{props.item.chatlog[props.item.chatlog.length - 1].text}</span>
            </div>
           
          </div>
        </div>
      </div>
      {/* <!-- 2nd user --> */}
      {/* <div className="vq6sj _2nY6U  ">
        <div className="d-flex">
          <div className="img-p mt-2 ">
            <img src={profile} alt="" className="gl" />
          </div>
        </div>
        <div className="aa d-flex ">
          <div className="bb d-flex">
            <div className="bbb d-flex">
              Ajay Kumar
            </div>
            <div className="ccc">yesterday</div>

          </div>
          <div className="cc d-flex">
            <div className="dd">
              <span>https:ajaykumarpp.com</span>
            </div>
            <div className="time">9:pm</div>

          </div>
          <div className="ee">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div> */} 
    </div>
  )
}

export default ChatLog