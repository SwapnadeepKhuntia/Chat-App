import React, { useRef, useState } from 'react'
import { logoutAccount } from '../store/slices/AuthSlices';
import { toggleSound } from '../store/slices/MessageSlices';
import { useDispatch, useSelector } from 'react-redux';
import { LuLogOut } from "react-icons/lu";
import { IoVolumeHigh } from "react-icons/io5";
import { IoMdVolumeOff } from "react-icons/io";
const mouseClickSound = new Audio("/sounds/frontend_public_sounds_mouse-click.mp3");

function ProfileHandaler() {


  const { data } = useSelector((state) => state.auth);
  const { isSoundEnabled } = useSelector((state) => state.message);
  // console.log(isSoundEnabled);
  

  const dispatch = useDispatch();

  function logout() {
   dispatch(logoutAccount());
  }

  const [selectedImage, setSelectedImage] = useState(null);

  const fileInputRef = useRef(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }

  }

  return (
    <div className='p-6 border-b border-slate-700/50'>
      <div className="flex items-center justify-between">
        <div className='flex items-center gap-3'>
          {/* Avatar */}

          <div className="avatar online">
            <button onClick={() => fileInputRef.current.click()} className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-600/50">
              <img src={selectedImage || data.profilePicture || "/avatar.png"} alt='Userimage'
                className='size-full object-cover'
              />
            </button>


            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="avatarInput"
              onChange={handleImageChange}
              ref={fileInputRef}
            />
          </div>

{/* Username and online Text */}
          <div>
            
            <h3 className='text-slate-200 font-medium text-base max-w-[180px] truncate'>
              {data.fullname}
            </h3>
            <p className='text-xs text-green-400'>Online</p>
          </div>

          {/* Buttons */}

          <div className='flex ml-20 items-center'>
            {/* Logout BTN */}
            <button className='text-slate-200 hover:text-slate-400 transition-colors' onClick={logout} >
              <LuLogOut className='w-5 h-5' />
            </button>

           {/* Sound Toggle BTN */}
            <button className = "text-slate-200 hover:text-slate-400 transition-colors ml-6"
            onClick={() => {
              mouseClickSound.currentTime = 0;

              mouseClickSound.play().catch((error) => {
                console.error("Error playing sound:", error);
              });
              dispatch(toggleSound());
            } }
            >
              {isSoundEnabled ?
              (<IoVolumeHigh className='w-5 h-5' /> )
              :
              (<IoMdVolumeOff className='w-5 h-5'/>)
              }
                   
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProfileHandaler