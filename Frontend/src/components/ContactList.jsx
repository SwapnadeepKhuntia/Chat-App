import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts, setSelectedUser } from '../store/slices/MessageSlices';
import UsersLoadingSkeleton from './UsersLoadingSkeleton';

function ContactList() {
   const dispatch = useDispatch();
  const {allContacts,isUserLoading,selectedUser} = useSelector((state) => state.message);

  useEffect(() => {
  dispatch(getAllContacts());
  }, []);


  if(isUserLoading) return <UsersLoadingSkeleton/>;

  return (
    <>
      {allContacts.map((contact) => (
        <div
          key={contact._id}
          className="bg-cyan-500/10 p-4 rounded-lg cursor-pointer hover:bg-cyan-500/20 transition-colors"
          onClick={() => dispatch(setSelectedUser(contact))}
        >
          <div className="flex items-center gap-3">
            {/* <div className={`avatar ${onlineUsers.includes(contact._id) ? "online" : "offline"}`}> */}
              <div className="size-12 rounded-full">
                <img src={contact.profilePic || "/avatar.png"} />
              </div>
            {/* </div> */}
            <h4 className="text-slate-200 font-medium">{contact.fullname}</h4>
          </div>
        </div>
      ))}
    </>
  )
}

export default ContactList