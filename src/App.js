import logo from './logo.svg';
import './App.css';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import Header from './components/Header';
import Body from './components/Body'
import {createBrowserRouter,Outlet,RouterProvider   } from "react-router-dom"
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import useContextlogin from './utils/useContextlogin';
import RestrauntMenu from './components/Restrauntmenu';
// import Grocery from './components/Grocery';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';

const Grocery=lazy(()=>import("./components/Grocery"))
function Home() {
  const [username,setusername]=useState();
  useEffect(()=>{
    const data={
      name:"siddarth"
    }
setusername(data.name)
  },[])
  return (
   <Provider store={appStore}>
     <useContextlogin.Provider value={{loggedinuser : username,setusername}}>
    <div className="App">
      <Header/>
     <Outlet/>
    </div>
    </useContextlogin.Provider>
   </Provider>
  );
}
const appRouter=createBrowserRouter([
  
  {
    path: '/',
    element: <Home />,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path: '/about',
        element: <About />
      }, 
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path:'/grocery',
        element:<Suspense fallback={<h1>loading....</h1>}><Grocery/></Suspense>
      },
      {
        path:'/restraunts/:resId',
        element:<RestrauntMenu />
      },
      {
        path:'/cart',
        element:<Cart/>
      }
    ],
    errorElement:<Error/>
  },


])

function App(){
  return(
    <RouterProvider router={appRouter}/>
  ) 
}


export default App;