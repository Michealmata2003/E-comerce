import React from 'react'
import Navbar from '../../userdashboard/components/navbar/Navbar'
import ProfileHero from '../../userdashboard/components/hero/Hero'
import Assurance from '../../userdashboard/components/assurance/Assurance'
import SellerComp from '../../userdashboard/components/sellers/SellerComp'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <ProfileHero />
      <Assurance />
      <SellerComp />
      <h4>You are a step closer from your order</h4>
    </div>

  )
}

export default Dashboard