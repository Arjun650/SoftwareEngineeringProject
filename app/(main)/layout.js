import React from 'react'

const MainLayout = ({children}) => {
    // redirect to onboarding

  return (
    <div className='container mx-auto mt-24 mb-20 max-w-[1650px]' >
      {children}
    </div>
  )
}

export default MainLayout
