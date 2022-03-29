import React from 'react'
import "./css/stay.css"
import {AiTwotoneHome } from "react-icons/ai"
import {AiOutlineArrowDown} from "react-icons/ai"
import { TiPlane } from "react-icons/ti";
import { MdFastfood } from "react-icons/md";


export const Stay = () => {
  return (
    <div className='stayMain'>
    <div className='stayFirst'>
        <h1 className='stayHeading1'>Let's Plan your trip</h1>
        <h1 className='stayHeading2'>Together</h1>
    </div>


<div className=''>
    <div className='middlee'>
    <h1 className='staySecondHeading'>Where do you wanna <span className='staySecondSpan'>stay</span><AiTwotoneHome   size = "1.2em " /></h1>
    </div>


    <div className='staySecondFlex'>
    <div  className='staySecondImages1' >
    <img className='persons'  alt="timer" src={require('../images/private.PNG')} />
    <h3 className='staySecondHome'>HOME STAY</h3>
    <div className='boxx'>
        <span className='reducedCost1'><AiOutlineArrowDown/> Reduced Cost</span>
        <span className='reducedCost2'><AiOutlineArrowDown/>Locals Interaction</span>
    </div>
    </div>

    <div  className='staySecondImages1' >
    <img className='persons'  alt="timer" src={require('../images/private.PNG')} />
    <h3 className='staySecondHome'>HOME STAY</h3>
    <div className='boxx'>
        <span className='reducedCost1'><AiOutlineArrowDown/> Reduced Cost</span>
        <span className='reducedCost2'><AiOutlineArrowDown/>Locals Interaction</span>
    </div>
    </div>
    <div  className='staySecondImages1' >
    <img className='persons'  alt="timer" src={require('../images/private.PNG')} />
    <h3 className='staySecondHome'>HOME STAY</h3>
    <div className='boxx'>
        <span className='reducedCost1'><AiOutlineArrowDown/> Reduced Cost</span>
        <span className='reducedCost2'><AiOutlineArrowDown/>Locals Interaction</span>
    </div>
    </div>


    </div>
    </div>

    <div className='middlee'>
    <div className=''>
    <h1 className='staySecondHeading'>How you want to <span className='staySecondSpan'>Travel</span><TiPlane   size = "1.2em " /></h1>
    </div>


    <div className='staySecondFlex'>
    <div  className='staySecondImages1' >
    <img className='persons'  alt="timer" src={require('../images/private.PNG')} />
    <h3 className='staySecondHome'>HOME STAY</h3>
    <div className='boxx'>
        <span className='reducedCost1'><AiOutlineArrowDown/> Reduced Cost</span>
        <span className='reducedCost2'><AiOutlineArrowDown/>Locals Interaction</span>
    </div>
    </div>
    
    <div  className='staySecondImages1' >
    <img className='persons'  alt="timer" src={require('../images/private.PNG')} />
    <h3 className='staySecondHome'>HOME STAY</h3>
    <div className='boxx'>
        <span className='reducedCost1'><AiOutlineArrowDown/> Reduced Cost</span>
        <span className='reducedCost2'><AiOutlineArrowDown/>Locals Interaction</span>
    </div>
    </div>
    <div  className='staySecondImages1' >
    <img className='persons'  alt="timer" src={require('../images/private.PNG')} />
    <h3 className='staySecondHome'>HOME STAY</h3>
    <div className='boxx'>
        <span className='reducedCost1'><AiOutlineArrowDown/> Reduced Cost</span>
        <span className='reducedCost2'><AiOutlineArrowDown/>Locals Interaction</span>
    </div>
    </div>


    </div>

</div>

<div className='middlee'>
    <div className=''>
    <h1 className='staySecondHeading'>Are you a <span className='staySecondSpan'>Foodie</span><MdFastfood   size = "1.2em " /></h1>
    </div>


    <div className='staySecondFlex'>
    <div  className='staySecondImages1' >
    <img className='persons'  alt="timer" src={require('../images/private.PNG')} />
    <h3 className='staySecondHome'>HOME STAY</h3>
    <div className='boxx'>
        <span className='reducedCost1'><AiOutlineArrowDown/> Reduced Cost</span>
        <span className='reducedCost2'><AiOutlineArrowDown/>Locals Interaction</span>
    </div>
    </div>
    
    <div  className='staySecondImages1' >
    <img className='persons'  alt="timer" src={require('../images/private.PNG')} />
    <h3 className='staySecondHome'>HOME STAY</h3>
    <div className='boxx'>
        <span className='reducedCost1'><AiOutlineArrowDown/> Reduced Cost</span>
        <span className='reducedCost2'><AiOutlineArrowDown/>Locals Interaction</span>
    </div>
    </div>
    <div  className='staySecondImages1' >
    <img className='persons'  alt="timer" src={require('../images/private.PNG ')} />
    <h3 className='staySecondHome'>HOME STAY</h3>
    <div className='boxx'>
        <span className='reducedCost1'><AiOutlineArrowDown/> Reduced Cost</span>
        <span className='reducedCost2'><AiOutlineArrowDown/>Locals Interaction</span>
    </div>
    </div>


    </div>
</div>




    </div>
  )
}


export default Stay
