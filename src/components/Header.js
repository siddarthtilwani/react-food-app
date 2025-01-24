import React, { useContext, useState } from 'react'
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import useContextlogin from "../utils/useContextlogin"
import { useSelector } from 'react-redux';
const Header=()=>{
    const online=useOnlineStatus();
    const {loggedinuser}=useContext(useContextlogin)
 const cartItems=useSelector((store)=>store.carti.items)
 console.log(cartItems)
    const [btnname,setname]=useState("login")
    return(
        <div className='flex justify-between bg-pink-100 shadow-lg '>
            <div className='logo-container items-center pt-1 pl-1'>
                <img className='w-20' src={LOGO_URL}/>

            </div>
            <div className='flex items-center'>
                <ul className='flex p-4 m-4 '>
                    <li  className='px-4'>onlinestatus:{online?"🟢":"🔴"}</li>

                    <li className='px-4'><Link to="/">home</Link></li>
                    <li className='px-4'><Link to="/about">About us</Link></li>
                    <li className='px-4'><Link to="/contact">contact us</Link></li>
                    <li className='px-4'><Link to='/grocery'>grocery</Link></li>
                    <li className='px-4'><Link to={"/cart"}>cart {cartItems.length}</Link></li>
                    <button className='login' onClick={()=>(btnname==="login"?setname("logout"):setname("login"))}>{btnname}</button>
                    <li className='font-bold px-4'>{loggedinuser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;
