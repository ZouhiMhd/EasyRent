'use client'

import { usePathname } from 'next/navigation'; 

import {useEffect} from "react"
import Link from "next/link"

const SideBar = () => {

  const pathname = usePathname();
  return (
	<section id="sidebar">
        
        <a href="#" className="brand">
            <i className ='bx bxs-smile'></i>
            <span className="text">AdminHub</span>
        </a> 
        
        <ul className="side-menu top">
            <li className={pathname === '/' ? 'active' : ''}>       
                <Link href="/" >
                    <i className ='bx bxs-dashboard'></i>
                    <span className="text">Dashboard</span>
                </Link> 
            </li>
            <li className={pathname === '/store' ? 'active' : ''}>
                <Link href="/store" >
                    <i className ='bx bxs-shopping-bag-alt'></i>
                    <span className="text">My Store</span>
                </Link>
            </li>
            <li className={pathname === '/analytics' ? 'active' : ''}>
                <Link href="/analytics" >
                    <i className ='bx bxs-doughnut-chart'></i>
                    <span className="text">Analytics</span>
                </Link>
            </li>
            <li className={pathname === '/message' ? 'active' : ''}>
                <Link href="/message" >
                    <i className ='bx bxs-message-dots'></i>
                    <span className="text">Message</span>
                </Link>
            </li>
            <li className={pathname === '/team' ? 'active' : ''}>
                <Link href="/team" >
                    <i className ='bx bxs-group '></i>
                    <span className="text">Team </span>
                </Link>
            </li>
        </ul>
        <ul className="side-menu">
            <li >
                <Link href="/" >
                    <i className ='bx bxs-cog'></i>
                    <span className="text">Settings</span>
                </Link>
            </li>
            <li className="logout">
                <Link href="/" >
                    <i className ='bx bxs-log-out-circle'></i>
                    <span className="text">Logout </span>
                </Link>
            </li>
        </ul>
    </section>
    
  )
}

export default SideBar