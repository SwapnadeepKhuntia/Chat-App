import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setactiveTab} from "../store/slices/MessageSlices";

function ActiveTabSwitch() {
  const dispatch = useDispatch();
   const checkactiveTab = (tab) => {
    dispatch(setactiveTab(tab));
    
   }
  const {activeTab} = useSelector((state) => state.message);
  console.log(activeTab);
  return (
    <div className="tabs tabs-boxed bg-transparent p-2 m-2 ">
      <button onClick={()=>checkactiveTab("chats")}
        className={` text-white tab ${activeTab === "chats" ? "bg-cyan-500 text-white" : "bg-transparent"}`}
        >Chats</button>
      <button onClick={()=>checkactiveTab("contacts")}
        className={`text-white tab ${activeTab === "contacts" ? "bg-cyan-500 text-white" : "bg-transparent"}`}
        >Contacts</button>
    </div>
  )
}

export default ActiveTabSwitch