import React, { useEffect } from 'react'
import {getMychatPartners, setSelectedUser} from '../store/slices/MessageSlices';
import { useDispatch, useSelector } from 'react-redux';
import UsersLoadingSkeleton from './UsersLoadingSkeleton';
import NoChatsFound from './NoChatsFound';
function ChatList() {

  const dispatch = useDispatch();
  const {chats,isUserLoading,selectedUser} = useSelector((state) => state.message);

  useEffect(() => {
  dispatch(getMychatPartners());
  }, []);


  if(isUserLoading) return <UsersLoadingSkeleton/>;

  if(chats.length === 0) return <NoChatsFound/>;

  console.log("chats",chats);
  console.log("selecteduser",selectedUser);
  return (
    <>
    {chats.map((chat) => (
      <div key={chat._id} 
      className="bg-cyan-500/10 p-4 rounded-lg cursor-pointer hover:bg-cyan-500/20 transition-colors"
      onClick={() => dispatch(setSelectedUser(chat))}
      >


        <div className="flex items-center gap-3">
            {/* <div className={`avatar ${onlineUsers.includes(chat._id) ? "online" : "offline"}`}> */}
              <div className="size-12 rounded-full">
                <img src={chat.profilePic || "/avatar.png"} alt={chat.fullname} />
              </div>
            {/* </div> */}
            <h4 className="text-slate-200 font-medium truncate">{chat.fullname}</h4>
          </div>

        
      </div>
    ))
    }
    </>
  )
}

export default ChatList