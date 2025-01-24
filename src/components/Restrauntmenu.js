import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
 import { MENU_API } from "../utils/constants";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestrauntCategory from "./RestrautCategory";

const RestrauntMenu=()=>{
    const {resId}= useParams()
    const [showindex,setshowindex]=useState(null)
const resInfo=useRestrauntMenu(resId);

    console.log(resInfo)

    if(resInfo===null)return <Shimmer/>

    const {name,cuisines,costForTwo}=resInfo?.cards[2]?.card?.card?.info
    const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card
 console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
 const fullcat=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
 console.log(fullcat)
    return(
        <div className="text-center">
<h1 className="font-bold my-6 text-2xl">{name}</h1><p className="font-bold text-xl">{cuisines.join(',')}-{costForTwo}</p>

{fullcat.map((category,index)=><RestrauntCategory key={category?.card?.card?.title}  data={category?.card?.card} showitems={index===showindex?true:false} setshowindex={()=>setshowindex(index)}/>
)}
        </div> 
    )
}
export default RestrauntMenu