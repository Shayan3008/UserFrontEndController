import React from 'react'
import { useState  } from 'react'
// import { AnimateGroup, Animate } from 'react-simple-animate'
// import { FaEye } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { User } from '../models/user'
const Background = require('../assets/bg-shop.png')
export default function Login() {
    const history = useNavigate()
    // const [icon, seticon] = useState(true)
    const [userName, setUserName] = useState('')
    const [Password, setPassword] = useState('')
    const [conPass, setconPass] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')
    // const showPass = () => { seticon(!icon) }
    const onHandleChange = (e: any, value: string) => {
        switch (value) {
            case 'user':
                setUserName(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            case 'conpass':
                setconPass(e.target.value)
                break;
            case 'phone':
                setphone(e.target.value)
                break;
            case 'email':
                setemail(e.target.value)
                break;
            default:
                break;
        }
    }
    const SignUp = async (): Promise<void> => {
        if (userName.length === 0 || Password.length === 0 || conPass !== Password || phone.length === 0 || email.length === 0) {
            alert('Invalid Data')

        }
        const user = new User(userName, email, Password, phone)
        const response = await user.userSignup()
        if (response !== '') {
            localStorage.setItem('userId', response)
            history('/item')
        }

    }
    return (
        <div className='h-screen'>
            <div className='h-full sm:flex'>
                <div className="h-2/6 w-full sm:h-full">
                    <img className='h-full w-full' src={Background} alt=''></img>
                </div>
                <div className='container w-full flex justify-center items-center m-auto sm:m-0 '>
                    <div className='text-center flex flex-col w-7/12'>
                        <h1 className='font-bold text-2xl p-2 font-serif m-0'>Shopping Store</h1>
                        <input onChange={(e) => {
                            onHandleChange(e, 'user')
                        }} value={userName} className='p-2 mt-2 border' placeholder='Enter User Name' />
                        <input onChange={(e) => {
                            onHandleChange(e, 'password')
                        }} value={Password} className='p-2 mt-2  border' placeholder='Enter Password' />
                        <input onChange={(e) => {
                            onHandleChange(e, 'conpass')
                        }} value={conPass} className='p-2 mt-2  border' placeholder='Confirm Password' />
                        <input onChange={(e) => {
                            onHandleChange(e, 'phone')
                        }} value={phone} className='p-2 mt-2  border' placeholder='Enter Phone' />
                        <input onChange={(e) => {
                            onHandleChange(e, 'email')
                        }} value={email} className='p-2 mt-2  border' placeholder='Enter Email' />

                        <button onClick={SignUp} className='bg-blue-400 w-6/12 m-auto text-white font-bold text-base rounded mt-2 p-2'>Sign UP</button>
                        <p onClick={() => {
                            history('/')
                        }}>Have an account? Login</p>
                    </div>

                </div>
            </div>
        </div>
        //     <div className="flex justify-center text-center items-center h-screen 
        //   w-12/12 bg-[url('./assets/bg-shop.png')] bg-cover bg-no-repeat">
        //         <div className='flex flex-col w-3/6 mb-30 p-3'>
        //             <AnimateGroup>
        //                 <Animate play duration={2} start={{ opacity: 0, transform: "translate(0,-30px)" }}
        //                     end={{ opacity: 1, transform: "translate(0,0)" }} sequenceIndex={0}>
        //                     <h1 className=" text-black text-5xl mb-5">This is shop</h1>
        //                 </Animate>
        //                 <Animate play duration={4} start={{ opacity: 0 }}
        //                     end={{ opacity: 1 }} sequenceIndex={1}>
        //                     <div className="flex-col flex relative">
        //                         <input type="text" value={userName} onChange={(e) => { onHandleChange(e, 'user') }} className="w-6/6 ml-10 mb-1 h-10 rounded-md  hover:bg-gray-100" placeholder="Enter email" />
        //                         <input type={icon ? "password" : "text"} value={Password} onChange={(e) => { onHandleChange(e, 'password') }} className="w-6/6 mb-1 ml-10 h-10 rounded-md  hover:bg-gray-100" placeholder="Enter password" />
        //                         <button className='absolute right-4 bottom-[140px] mb-1' onClick={showPass}><FaEye /></button>
        //                         <input type={icon ? "password" : "text"} value={conPass} onChange={(e) => { onHandleChange(e, 'conpass') }} className="w-6/6 mb-1 ml-10 h-10 rounded-md  hover:bg-gray-100" placeholder="Enter password" />
        //                         <button className='absolute right-4 bottom-[95px]' onClick={showPass}><FaEye /></button>
        //                         <input type="text" value={phone} onChange={(e) => { onHandleChange(e, 'phone') }} className="w-6/6 mb-1 ml-10 h-10 rounded-md  hover:bg-gray-100" placeholder="Enter Phone" />
        //                         <input type="text" value={email} onChange={(e) => { onHandleChange(e, 'email') }} className="w-6/6 mb-1 ml-10 h-10 rounded-md  hover:bg-gray-100" placeholder="Enter Email" />
        //                     </div>
        //                     <button onClick={()=>{Login()}} className="w-2/6 rounded-3xl m-auto bg-blue-300 mt-4 p-1">Signup</button>
        //                     <p>Already have an account??</p>
        //                 </Animate>
        //             </AnimateGroup>
        //         </div>
        //     </div>
    )
}
