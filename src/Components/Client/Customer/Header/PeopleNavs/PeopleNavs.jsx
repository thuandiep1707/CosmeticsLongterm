import {useContext} from "react"
import {useNavigate} from "react-router-dom"

import { GlobalContext } from "../../../../../GlobalContext"

import "./peoplenavs.scss"

const PeopleNavs = () => {
    const {setCart, setToken} =useContext(GlobalContext)
    const navigate = useNavigate()
    const handleLogOut = () => {
        setCart([])
        setToken(null)
        navigate("/")

    }
    return(
        <>
            <li className="icon_people_navs_nav ">My profile</li>
            <li className="icon_people_navs_nav ">My setting</li>
            <li className="icon_people_navs_nav " onClick={()=>{handleLogOut()}}>Log out</li>
        </>
    )
}
export default PeopleNavs