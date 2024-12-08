import React from 'react'
import { useNavigate } from 'react-router-dom'

const Host = () => {
  const navigate=useNavigate();
  const handleButtonClick = () =>{
    navigate("/contact");
  }
  return (
    <>
      <section id='host'>
          <div className="container">
            <h3>Become a host</h3>
            <p>Want Build You Future With Us?<br />
              Registration Started
            </p>
            <button onClick={handleButtonClick}>JOIN US</button>
            
          </div>
        </section> 
    </>
  )
}

export default Host
