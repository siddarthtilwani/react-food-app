import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart, removeItem } from "../utils/cartSlice"

const Cart=()=>{
   
    const cartinfo=useSelector((store)=>store.carti.items)

    const dispatch=useDispatch()
    const handleclearitems=()=>{
dispatch(clearCart())
    }

    const handlelastitems=()=>{
        dispatch(removeItem())
    }

    return(<div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">cart</h1>
        <div className="w-6/12 m-auto">
        {cartinfo.length===0 && <h1>your cart is empty please add something to your cart!!</h1>}
        <ItemList items={cartinfo}/></div>
        <button className="bg-black text-white border-solid border-black m-2 p-2 rounded-xl" onClick={handleclearitems}>clearCart</button>
        <button className="bg-black text-white border-solid border-black m-2 p-2 rounded-xl" onClick={handlelastitems}>remove last item</button>
        
    </div>)

}
export default Cart 