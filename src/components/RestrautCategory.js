import { useState } from "react"
import ItemList from "./ItemList"

const RestrauntCategory=({data,showitems,setshowindex })=>{
    
    const handleclick=()=>{
setshowindex()
    }
        return(
            <div>
                <div className="w-6/12 bg-gray-100 mx-auto my-4 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleclick}>    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>⬇️</span></div>
                 {showitems &&   <ItemList items={data.itemCards}/>}
                </div>
            </div>
        )
}
export default RestrauntCategory