import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestrauntMenu=(resId)=>{
    const [resInfo,setresInfo]=useState(null);
useEffect(()=>{
fetchdata()
},[])

const fetchdata=async()=>{
const data=await fetch(MENU_API+resId);
const JSON=await data.json();
setresInfo(JSON.data )
}
return resInfo;
}
export default useRestrauntMenu;