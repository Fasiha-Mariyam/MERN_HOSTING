import React from 'react'
import { FiHome } from 'react-icons/fi'
import { BiCategoryAlt } from 'react-icons/bi'
import {Link , useLocation} from 'react-router-dom'
import { GlobalContext } from '../../Context/context'
import { useContext } from 'react';

export default function SideBar() {

  const location = useLocation()
  const { state, dispatch } = useContext(GlobalContext)
  const NavItems = [
    {
        tab: "Home",
        url: "/",
        icon: <FiHome />
    },
    {
        tab: "Categories",
        url: "/category",
        icon: <BiCategoryAlt />
    },
    {
        tab: "Products",
        url: "/product",
        icon: <BiCategoryAlt />
    },
    {
        tab: "Brands",
        url: "/brand",
        icon: <BiCategoryAlt />
    }


]

  return (
<>


    <div className="bg-dark p-3 d-flex text-white justify-content-between align-items-center fw-bold">
    <span>Admin</span>
    <button className="btn btn-outline-light fw-bold" 
     onClick={() => dispatch({ type: "USER_LOGOUT" })}>Logout</button>
    </div>
    <ul className="nav flex-column pt-3">
                {
                    NavItems.map((val, key) =>

                        <li key={key} className={`nav-item m-2  ${location.pathname == val.url ? ' bg-dark rounded fw-bold' : null}`}>
                            <Link className='nav-link d-flex align-items-center  text-white  gap-2' to={val.url}>
                                <span>{val.icon}</span>

                                <span>{val.tab}</span>
                            </Link>
                        </li>)
                }

            </ul>


</>
  )
  
}
