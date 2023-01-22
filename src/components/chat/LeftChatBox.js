import React, { useState } from 'react'
import profile from "../Images/dp.jpg"
import { BsGithub, BsFillChatLeftDotsFill, BsPlusCircle } from "react-icons/bs";
// import Button from 'react-bootstrap/Button';
import { SearchBox } from './SearchBox';
import ChatLog from './ChatLog';
import ConversationAdd from './ConversationAdd';

function LeftChatBox(props) {

  const [add, setAdd] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  // Conversation Add function
  const handleAdd = () => {
    if (add) {
      setAdd(false);
    }
    else {
      setAdd(true);
    }
  };

  const { data2 } = props;
  return (
    <div className="col-md-4 ">
      <div className="sticker sticky-md-top  left">
        <div className="bg-light ">
          <img src={profile} alt="" width="50px" height="50px" className=" rounded-circle  " />
          <div className="float-end mt-3">
            {/* Plus Button add users */}

            <BsPlusCircle className=" ms-3 text-primary addUser  h3" onClick={handleAdd} />

            {add ? <ConversationAdd setAdd={setAdd} /> : ""}

            {/* emoji */}
            <BsFillChatLeftDotsFill className=" ms-3 text-primary h4" />

            {/* github Link  */}
            <a href="https://github.com/Sandeepkumarpoonia" target="_blank" rel="noreferrer">< BsGithub className="ms-3 text-primary h3" /> </a>
          </div>
        </div>
        {/* <!-- **********************  search Bar  ******************* --> */}
        <SearchBox searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>
      {/* <!-- **********************  Chat User  *************************** --> */}
     
      {/* Add user chat only  */}
      <div className="users">
        {data2 ? data2.friends
          .filter((val) => {
            if (searchInput == '') {
              return val;
            }
            else if (val.name.toLowerCase().includes(searchInput.toLowerCase())) {
              return val;
            }
          })
          .map((item, index) => {
            if (item.chatlog.length > 0) {
              return <ChatLog item={item} key={index} />
            }
          }) : ""}
      </div>
    </div>
  )
}

export default LeftChatBox