import React from 'react'
import "./css/Second.css"



const Second = () => {
  return (
    <div className='SecondMain' >
        <div className='secondMainTitle'>
            <p className='secondTitle'> <img className='person' alt="timer" src={require('../images/person.PNG')} /><span className='explore'>Explore</span> Uttarakhand</p>
        </div>
        <div className='container'>
          <div className="location one">
            <p className='rishikesh'>Rishikesh</p> 
          </div>
          <div className="location two">
            <p className='rishikesh'>Mussorie</p> 
          </div>
          <div className="location three">
            <p className='rishikesh'>Nainital</p> 
          </div>            
        </div>    
    </div>
  )
}

export default Second



