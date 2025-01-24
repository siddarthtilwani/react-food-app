import User from './User'
import useContextlogin from '../utils/useContextlogin'
import { useContext } from 'react'
const About=()=>{
    const {loggedinuser}=useContext(useContextlogin)
    return(
        <div>
            <h1>about</h1>
            <h2>i am about page</h2>
            <h3>{loggedinuser}</h3>
            <User/>
        </div>
    )
}
// in class based we can use useContextlogin.consumer and inside it we can give arrow fucntuon and can orint loggedinuser
export default About