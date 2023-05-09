
import React from 'react';
import { ReactComponent as SpaceXSvg } from '../Assets/spacex.svg';
import { NavLink, useNavigate } from 'react-router-dom';
function NavbarMenu() {
    const navigate = useNavigate()
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const menuStyle = {
        navLink: "text-gray-400 hover:text-white focus:text-white ",
        active: "underline underline-offset-[0.5rem] text-white font-semibold ",
    }

    return (
        <div className="sticky top-0 z-50">
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

                        <SpaceXSvg className="h-10 w-48 cursor-pointer" onClick={()=>{navigate('/')}} />

                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="white"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto gap-4 text-white">
                            <li className="nav-item">
                                <NavLink to={'/history'} className={(navData) => navData.isActive ? menuStyle.active : menuStyle.navLink}>History</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/launches'} className={(navData) => navData.isActive ? menuStyle.active : menuStyle.navLink}>Launches</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/rockets'} className={(navData) => navData.isActive ? menuStyle.active : menuStyle.navLink}>Rockets</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}
export default NavbarMenu