import React from "react";
import { CDN_URL } from "../utils/constants";
const RestrauntCard=(props)=>{
    const {resData}=props


    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,
    }=resData?.info;

    return(
        <div className="m-4 p-4 w-[250px] res-card rounded-lg bg-gray-100 hover:bg-gray-300" >
            <img 
            className="rounded-lg"
            alt="res-logo"
            src={CDN_URL+cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-xl">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}stars</h4>
            <h4>{costForTwo} </h4>
            <h4>{sla?.slaString}</h4>
        </div>
    )
}


 export const withPromotedLabel=(RestrauntCard)=>{
    return(props)=>{
        return(
            <div>
                <label>Promoted</label>
                <RestrauntCard {...props}/>
            </div>
        )
    }
 }


export default RestrauntCard