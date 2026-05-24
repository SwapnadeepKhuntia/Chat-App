
import './App.css'
import { Route, Routes } from 'react-router'
import Chatpage from './pages/Chatpage.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import {useSelector, useDispatch} from 'react-redux'
function App() {
  // const dispatch = useDispatch();
  // const dd = useSelector((state) => state.auth)
  // console.log(dd)

 
  return (
   <>
    {/* <button  onClick={() => dispatch(loginStart())}>Click me</button> */}
   <div className='min-h-screen bg-gradient-to-br from-zinc-900 via-slate-800 to-gray-900 justify-center items-center flex'>
    <Routes>
        <Route path='/' element={<Chatpage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
       
   </Routes>
   </div>
   </>
  )
}

export default App
