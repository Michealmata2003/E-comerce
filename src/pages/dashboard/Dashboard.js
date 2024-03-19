import React from 'react'
import ProfileHero from '../../userdashboard/components/hero/Hero'
import Assurance from '../../userdashboard/components/assurance/Assurance'
import SellerComp from '../../userdashboard/components/sellers/SellerComp'
import Nav from '../../userdashboard/components/navbar/Navbar'

const Dashboard = () => {
  return (
    <div>
      <Nav />
      <ProfileHero />
      <Assurance />
      <SellerComp />
      <h4>You are a step closer from your order</h4>
    </div>

  )
}

export default Dashboard