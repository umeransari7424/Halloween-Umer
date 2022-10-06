import React from 'react';
import {FaTelegramPlane} from 'react-icons/fa';
import {AiFillTwitterSquare} from 'react-icons/ai';

function Footer() {
  return (
    <div className='footerbg'>

    <div className='container text-center '>
        <div>
        <div className='pt-5'> 
                <AiFillTwitterSquare size={"60px"} style={{color:"#1D9BF0",borderRadius:"10%"}}/>
                <FaTelegramPlane size={"50px"} style={{color:"white" ,backgroundColor:"#F27022" ,borderRadius:"10%"}}/>
                </div>
        </div>
        <div className='py-5'>
            <hr color='purple'/>
        </div>
        <div className='pb-5'>
            <p>Copyright © 2022. All rights reserved by Halloween Floki. Contact: hello@halloweenfloki.co</p>
        </div>

    </div>
    </div>
  )
}

export default Footer