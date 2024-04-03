import React, { useState } from 'react'
import ProfileHero from '../../userdashboard/components/hero/Hero'
import Assurance from '../../userdashboard/components/assurance/Assurance'
import SellerComp from '../../userdashboard/components/sellers/SellerComp'
import Nav from '../../userdashboard/components/navbar/Navbar'
import Cartegories from '../../userdashboard/components/categories/Cartegories'
import PopUp from '../../userdashboard/components/popup/PopUp'
import SetProfile from '../../userdashboard/components/setprofile/SetProfile'
import Footer from '../../components/footer/Footer'

const Dashboard = () => {
  const [popUp, setPopUp] = useState(true);
  const [ showSettings, setShowSettings ] = useState(false);

  const handleShowSettings = () => {
    setShowSettings(true)
    console.log('i was clicked')
  };

  return (
    <div>
      {popUp ?
        (<PopUp setPopUp={setPopUp} />)
        :
        (<div>
          {showSettings ? <SetProfile setShowSettings={setShowSettings} /> : (
            <div>
              <Nav handleShowSettings={handleShowSettings} />
              <ProfileHero />
              <Assurance />
              <SellerComp />
              <Cartegories />
              <Footer />
            </div>
          )}

        </div>)
      }
    </div>


  )
}

export default Dashboard