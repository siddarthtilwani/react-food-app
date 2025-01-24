 import React, { useEffect, useState } from "react";
 import RestrauntCard,{withPromotedLabel} from './RestrauntCard'
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import useContextlogin from "../utils/useContextlogin";
 const Body=()=>{
   const [listOfRestraunt,setlistOfRestraunt]=useState([])
   const [filteredlist,setfilteredlist]=useState([])
   const [searchText,setText]=useState("")
  
   console.log(listOfRestraunt)
useEffect(()=>{
    fetchdata();
 },[])
 const fetchdata=async()=>{
const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
const fetcheddata=await data.json();
setlistOfRestraunt(fetcheddata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
console.log(fetcheddata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
setfilteredlist(fetcheddata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
}
const online=useOnlineStatus();
const RestrauntCardPromoted=withPromotedLabel(RestrauntCard)
const {setusername,loggedinuser}=useContext(useContextlogin)
if(listOfRestraunt.length===0)return <Shimmer/> 
if(!online)return <h1>you are offline please connect to internet</h1>
    return(
        <div className="body">
            <div className=" flex search m-4 p-4 justify-between">
                <input type="text" className=" border border-solid border-black w-auto h-30 items-center " value={searchText} onChange={(e)=>{setText(e.target.value)}}/>
              
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{console.log(searchText)
                    const filteredlist=listOfRestraunt.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setfilteredlist(filteredlist)
                }}>search</button>
                  
             <div className="m-4 p-4 flex items-center">

             <button className="bg-gray-200 px-4 py-2 rounded-lg" onClick={()=>{
                    const filteredlist=listOfRestraunt.filter((restraunt)=>restraunt.info.avgRating>4)
                    setfilteredlist(filteredlist)
                }}>highest rated restraunt</button> </div> 
                   <div className="m-4 p-4 flex items-center">
                    <label>Username:</label>
                    <input className="border border-black p-2" onChange={(e)=>setusername(e.target.value)} value={loggedinuser}/>
                   </div>
                </div>
            <div className="res-container flex flex-wrap">
                {filteredlist.map((restraunt)=>(
                <Link key={restraunt.info.id} to={"/restraunts/"+restraunt.info.id}>{    (restraunt.info.avgRating>4.0)?<RestrauntCardPromoted resData={restraunt}/>:<RestrauntCard  resData={restraunt}/>}</Link>
                ))}
            </div>
        </div> 
    )
 }
 export default Body;