import React from 'react'
import { getMessagebyuserId } from '../store/slices/MessageSlices.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ChatHeader from './ChatHeader.jsx';
import NoChathistoryplaceholder from './NoChathistoryplaceholder.jsx';
import MessageInput from './MessageInput.jsx';
import MessagesLoddingSkeletor from './MessagesLoddingSkeletor.jsx';

function ChatContainer() {
  const dispatch = useDispatch()
  const { selectedUser, messages,isMessagesLoading } = useSelector((state) => state.message);

  const { data } = useSelector((state) => state.auth);



  useEffect(() => {
    dispatch(getMessagebyuserId(selectedUser._id))
  }, [selectedUser, getMessagebyuserId])




  return (
    <>
      <ChatHeader />

      <div className="flex-1 px-6 overflow-y-auto py-8">
        {
          messages.length > 0 && !isMessagesLoading ? (
            <div>
              {messages.map((message) => (
                <div key = {message._id}
                className={`chat ${message.senderId === data._id ? "chat-end" : "chat-start"}`}>
                
                <div
                  className={`chat-bubble-relative ${message.senderId === data._id ? "bg-cyan-600 text-white" : "bg-slate-700 text-slate-200"}`}>

                    {
                      message.image && (
                        <img src={message.image} alt="Shared" className="w-48 h-48 object-cover rounded-lg mb-2" />
                      ) 
                    }
                
                    {message.text && <p className='mt-2'>{message.text}</p>}
                    <p className = "text-xs mt-1 opacity-75 flex items-center gap-1">
                      {new Date(message.createdAt).toLocaleString().slice(11)}
                    </p>

                </div>
                   
                </div>
              ))
              }
            </div>
          ) : isMessagesLoading?<MessagesLoddingSkeletor/>: (
            <NoChathistoryplaceholder name={selectedUser.fullname} />
          )
        }
      </div>

      <MessageInput />
    </>
  )
}

export default ChatContainer