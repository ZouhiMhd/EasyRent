'use client';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import React from 'react'
import {useEffect} from "react"


const NavBar = () => {
  // if(window){
  // const searchButton = document.querySelector('#content nav form .form-input button');
  // const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
  // const searchForm = document.querySelector('#content nav form');
  // if(searchButton & window & searchButton)  {
  //   searchButton.addEventListener('click', function(e){
  //   if(window.innerWidth<576){
  //       e.preventDefault();
  //       searchForm.classList.toggle('show');
  //       if(searchForm.classList.contains ('show')){
  //           searchButtonIcon.classList.replace('bx-search', 'bx-x');
  //       }else{
  //           searchButtonIcon.classList.replace('bx-x','bx-search');
  //       }
  //   }
  //   });

  //   if(window.innerWidth < 768){
  //     sideBar.classList.add('hide');
  //   }else if(window.innerWidth <576) {
  //     searchButtonIcon.classList.replace('bx-x', 'bx-search');
  //     searchForm.classList.remove('show');
  //   }
  
   
  //   window.addEventListener('resize', function(){
  //     if(this.innerWidth > 576) {
  //         searchButtonIcon.classList.replace('bx-x', 'bx-search');
  //         searchForm.classList.remove('show');
  //     }
  //   })
  // }
  //}

  return (

    <nav>
            <i className="bx bx-menu"></i>
            <a href="" className="nav-link">Categories</a>
            <form action="#">
                <div className="form-input">
                    <input type="search" placeholder="Search..."/>
                    <button type="submit" className="search-btn"><i className='bx bx-search'></i></button>
                </div>
            </form>
            <a href="#" className="notification">
                <i className="bx bxs-bell"></i>
                <span className="num">8</span>
            </a>
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="/images/photo1.jpg" sx={{ width: 50, height: 50 }} />
            </Stack>
    </nav>
       
    
  )
}

export default NavBar