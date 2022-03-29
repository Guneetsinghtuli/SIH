import React from 'react'
import "./css/LastPg.css";

export const LastPg = () => {
  return (
    <div>
        <div className='heade'>
            <img className='logos1'  alt="timer" src={require('../images/logo.jpg')} />
            <div className='secondsOne'>
                <h1 className='redColorHeading'>YOUR</h1>
                <div className='secondsTwo'>
                    <h1 className='blackColorHeading'>TRAVEL</h1>
                    <h1 className='blackColorHeading'>BUDGET</h1>
                </div>
            </div>
        </div>



    <div className='travelBox'>
        <div className='firm'>
            <h3 className='suggest'>OUR SUGGESTIONS</h3>
            <div className='suggestDown'></div>
        </div>
        <div className='firm'>
            <h3 className='suggest'>TRAVEL SUMMARY</h3>
            <div className='suggestDown'>
                <p className='travelSummaryPara'>Transport</p>
                <p className='travelSummaryPara'>Accomodation</p>
                <p className='travelSummaryPara'>Food</p>
                <p className='travelSummaryPara'>Estimate Budget</p>
            </div>
        </div>
    </div>
    
    
    </div>
  )
}
export default LastPg;

