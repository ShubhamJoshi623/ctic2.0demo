import React from 'react'


export default function Headernavbar() {
  return (
    <div>
      <header className="bg-header-black flex justify-between h-header">
        <img src="./images/ctic-logo-white.bf83e0e3.svg" alt="CTIC Logo"/>

        
        <div className="header__container flex h-full flex-row">
          <button className="btn__header bg-secondary-burgundy 
          hover:bg-secondary-burgundy-hover">
              EN/FR</button>
        </div>
      </header>
    </div>
  )
}
