import React from 'react'
import { ProfileText } from './Text'

const ProfileHero = () => {
  return (
    <div className='h-screen flex bg-profile_bg bg-no-repeat bg-cover bg-center h-screen m-auto justify-center align-center'>
      <ProfileText />
    </div>
  )
}

export default ProfileHero;
