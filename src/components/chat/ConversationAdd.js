import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addID } from '../../store/chatSlice';

function ConversationAdd(props) {
    const items = useSelector((state) => state.chat);
    const dispatch = useDispatch();

    // Add message in redux
    const setChatID = (item) => {
        dispatch(addID({
            chatID: item.id,
            name: item.name,
            picture: item.picture
        }))
        props.setAdd(false);
    }
    return (
        <div className='conAdd'>
            {items[0].allFriends.map((item, index) => {
                return (
                    <div  key={index} onClick={() => setChatID(item)} >
                        <div className="vq6sj _2nY6U"  >
                            <div className="d-flex">
                                <div className="img-p mt-2 ">
                                    <img src={item.picture} alt="" className="gl" />
                                </div>
                            </div>
                            <div className="aa d-flex ">
                                <div className="bb d-flex">
                                    <div className="bbb d-flex">
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ConversationAdd
