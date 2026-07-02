import { XIcon } from "lucide-react";
import {setSelectedUser} from "../store/slices/MessageSlices.js"
import { useEffect } from "react";
// import { useAuthStore } from "../store/useAuthStore";
import { useDispatch, useSelector } from "react-redux";

function ChatHeader() {

  const dispatch = useDispatch();
  const { selectedUser } =  useSelector((state)=>state.message);
 
//   const { onlineUsers } = useAuthStore();
//   const isOnline = onlineUsers.includes(selectedUser._id);

  // useEffect(() => {
  //   const handleEscKey = (event) => {
  //     console.log("Escape key pressed",event.key);
  //     if (event.key === "Escape") setSelectedUser(null);
  //   };

  //   window.addEventListener("keydown", handleEscKey);

  //   // cleanup function
  //   return () => window.removeEventListener("keydown", handleEscKey);
  // }, [setSelectedUser]);

  return (
    <div
      className="flex justify-between items-center bg-slate-800/50 border-b
   border-slate-700/50 max-h-[84px] px-6 flex-1"
    >
      <div className="flex items-center space-x-3">
        {/* <div className={`avatar ${isOnline ? "online" : "offline"}`}> */}
          <div className="w-12 rounded-full">
            <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullname} />
          </div>
        {/* </div> */}

        <div>
          <h3 className="text-slate-200 font-medium">{selectedUser.fullname}</h3>
          {/* <p className="text-slate-400 text-sm">{isOnline ? "Online" : "Offline"}</p> */}
        </div>
      </div>

      <button onClick={() =>dispatch(setSelectedUser(null))}>
        <XIcon className="w-5 h-5 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer" />
      </button>
    </div>
  );
}
export default ChatHeader;