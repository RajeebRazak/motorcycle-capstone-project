import React from 'react'
import  CustomNavbar  from '../Home/Navbar'
import Body from './Body'
import Footer from './Footer'

function Home() {
  return (<>
    <div><CustomNavbar/></div>
    <div><Body/></div>
    <div><Footer/></div>
     </>
  )
}

export default Home