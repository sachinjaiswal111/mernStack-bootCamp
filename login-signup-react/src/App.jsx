import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import axios from "../axios.config.js"
// import { useDispatch } from 'react-redux'
// import { loginSuccess } from '../features/userSlice.js'
// import toast from 'react-hot-toast'
// import { useNavigate } from 'react-router-dom'
function Login() {
  const [register, setRegister] = useState("register");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const dispatch = useDispatch()
  // const navigate = useNavigate()
  const submitHandler = async (e) => {
    // try {
    //   e.preventDefault()
    //   const { data } = await axios.post(`/api/v1/user/${register}`, { name, email, password, phone })
    //   console.log(data)
    //   if (data.success) {
    //     dispatch(loginSuccess(data.data))
    //     setName("")
    //     setPhone("")
    //     setEmail("")
    //     setPassword("")
    //     navigate("/")
    //     scrollTo(0,0)
    //     toast.success(data.message)
    //   } else {
    //     toast.error(data.message)
    //   }

    // } catch (e) {
    //   console.log("i am excuting from here")
    //   toast.error(e.message)
    // }


  }
  return (
    <div className=''>
      <div className='mt-[203px] md:mt-[50px] px-5 flex flex-col gap-3 md:w-[400px] md:m-auto'>
        <div>
          <p className='text-[32px] font-semibold'>Welcome!</p>
          {(register === "register") ? <p className='text-[16px]'>Allready have acount? <Link className='text-btg' onClick={() => setRegister("login")}>Click Here</Link></p> : <p className='text-[16px]'>Don't have acount? <Link className='text-btg' onClick={() => (setRegister("register"))}>Click Here</Link></p>}
        </div>
        <form action="" className='flex flex-col gap-2 mt-7'
          onClick={(e) => e.stopPropagation()}
          onSubmit={submitHandler}>
          <div>
            {(register === "register") &&
              <div>
                <label htmlFor="userName" className='text-[18px]'>userName</label>
                <input type="text" required className='w-full border-[0.5px] border-gray-400 h-[40px] rounded required focus:outline-btg ' value={name} onChange={(e) => setName(e.target.value)} />
              </div>
            }
            <div>
              <label htmlFor="userName" className='text-[18px]'>Email</label>
              <input type="email" required className='w-full border-[0.5px] border-gray-400 h-[40px] rounded required focus:outline-btg' autoComplete="current-password" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            {(register === "register") &&
              <div>
                <label htmlFor="userName" className='text-[18px]'>Phone</label>
                <input type="number" required className='w-full border-[0.5px] border-gray-400 h-[40px] rounded required focus:outline-btg' value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
            }
            <div>
              <label htmlFor="userName" className='text-[18px]'>password</label>
              <input type="password" required className='w-full border-[0.5px] border-gray-400 h-[40px] rounded required focus:outline-btg' autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>

          <div className='flex justify-between '>
            <div className='flex gap-1'>
              <input type="checkbox" className='h-[19px] w-[19px]' />
              <label htmlFor="remberme">Remember me</label>
            </div>
            <div>
              <p className='text-btg underline text-[18px]'>Forget Password?</p>
            </div>

          </div>
          <div className='w-full '><button type='submit' className='bg-btg w-full text-white h-[44px] rounded cursor-pointer'>{(register === "register") ? "Register" : "Login"}</button></div>
        </form>

        <div className='w-full '><button className='bg-black w-full text-white h-[44px] rounded underline cursor-pointer'>Google</button></div>


        <div>

        </div>


      </div>
    </div>
  )
}

export default Login
