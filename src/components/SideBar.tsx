'use client'

import { usePathname } from 'next/navigation'; 
import { useEffect, useState } from "react";
import Link from "next/link"
// import '../globals.css'
import 'boxicons/css/boxicons.css'
import { FaCar, FaBuilding } from 'react-icons/fa';

const SideBar = () => {

    const [windowWidth, setWindowWidth] = useState(null);
    // const sideBar = document.getElementById('sidebar');
    useEffect(() => {
        const handleResize = () => {
            if(window) {
            setWindowWidth(window.innerWidth);
            // console.log("resize")
        }
        };
        window.addEventListener("resize", handleResize);
        handleResize(); // Appel initial pour obtenir la largeur actuelle
        return () => window.removeEventListener("resize", handleResize);
      }, []);
      const shouldHideSidebar = windowWidth && windowWidth < 800;
     


  const pathname = usePathname();
  return (
	<section id="sidebar" className={shouldHideSidebar ? 'hide' : ''}>
    {/* // <section id="sidebar" className='hide' >  */}
        
        <a href="#" className="brand">
            <i className ='bx bxs-smile'></i>
           
                <span className="text">AdminHub</span>
            
        </a> 
        
        <ul className="side-menu top">
            <li className={pathname === '/agence' ? 'active' : ''}>       
                <Link href="/agence" >
                    <i className ='bx bxs-dashboard'></i>
                    {/* {(window.innerWidth < 768 && ( */}
                        <span className="text">Dashboard</span>
                    {/* // ))||(<></>)} */}
                </Link> 
            </li>
            <li className={pathname.startsWith('/agence/store') ? 'active' : ''}>
                <Link href="/agence/store" >
                    <i className ='bx bxs-shopping-bag-alt'></i>
                    <span className="text">My Store</span>
                </Link>
            </li>
            <li className={pathname.startsWith('/agence/storDriver') ? 'active' : ''}>
                <Link href="/agnece/storDriver" >
                    <i className ='bx bxs-group'></i>
                    <span className="text">Drivers</span>
                </Link>
            </li>
            <li className={pathname.startsWith('/agence/offices') ? 'active' : ''}>
                <Link href="/agence/offices" >
                <i className="bx bxs-building"></i>

                    <span className="text">Offices</span>
                </Link>
            </li>
            <li className={pathname.startsWith('/agence/analytics') ? 'active' : ''}>
                <Link href="/agence/analytics" >
                    <i className ='bx bxs-doughnut-chart'></i>
                    <span className="text">Analytics</span>
                </Link>
            </li>
            <li className={pathname === '/agence/message' ? 'active' : ''}>
                <Link href="/agence/message" >
                    <i className ='bx bxs-message-dots'></i>
                    <span className="text">Message</span>
                </Link>
            </li>
            {/* <li className={pathname === '/team' ? 'active' : ''}>
                <Link href="/team" >
                    <i className ='bx bxs-group '></i>
                    <span className="text">Team </span>
                </Link>
            </li> */}
        </ul>
        <ul className="side-menu top">
            <li  className={pathname === '/agence/settings' ? 'active' : ''}>
                <Link href="/agence/settings" >
                    <i className ='bx bxs-cog'></i>
                    <span>Settings</span>
                </Link>
            </li>
            <li  className={pathname === '/agence/profile' ? 'active' : ''}>
                <Link href="/agence/profile" >
                    <i className ='bx bxs-user-circle '></i>
                    <span>Your Profile</span>
                </Link>
            </li>
            <li className={pathname === '/agence/logout' ? 'active' : ''}>
                <Link href="/agence/logout" >
                    <i className ='bx bxs-log-out-circle'></i>
                    <span >Logout </span>
                </Link>
            </li>
        </ul>
    </section>
    
  )
}

export default SideBar