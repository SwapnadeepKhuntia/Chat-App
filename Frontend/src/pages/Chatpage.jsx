import React from 'react'
import { logoutAccount } from '../store/slices/AuthSlices'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import BroderAnimated from '../components/BroderAnimated';
import ProfileHandaler from '../components/ProfileHandaler';
import ActiveTabSwitch from '../components/ActiveTabSwitch';
import ChatList from '../components/ChatList';
import ContactList from '../components/ContactList';
import ChatContainer from '../components/ChatContainer';
import NoConversationPlaceholder from '../components/NoConversationPlaceholder';

// import {setactiveTab} from "../store/slices/MessageSlices";

function Chatpage() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {activeTab,selectedUser} = useSelector((state) => state.message);
  

  




  async function handleLogout(e) {
    e.preventDefault();
    const res = await dispatch(logoutAccount()); 
    if(res?.payload)     navigate("/login");
  }


  return (
    <div className="relative w-full max-w-6xl h-[800px">
      <BroderAnimated>
          {/* {left side} */}
          <div className="w-80 bg-slate-800/50 backdrop-blur-sm flex flex-col ">
            <ProfileHandaler />
            <ActiveTabSwitch/>

            <div className="flex-1 overflow-y-auto p-4 space-y-2 ">
              {activeTab === "chats" ? <ChatList/> : <ContactList/>}
            </div>
          </div>

          {/* {right side} */}
          <div className="flex-1 flex flex-col bg-slate-900/50 backdrop-blur-sm">
               {selectedUser ? <ChatContainer/>: <NoConversationPlaceholder/>}
          </div>
      </BroderAnimated>
    </div>
  )
}

export default Chatpage