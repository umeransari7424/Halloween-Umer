import React from 'react'
import {FaTelegramPlane} from 'react-icons/fa';
import {AiFillTwitterSquare} from 'react-icons/ai';

function Halloween() {
  return (
    <div className='halloweenbg'>

    <div className='container py-5'>
        <div className="row">
            <div className="col-md-6 hallo">
                <span>__________ <b>WHAT IS HALLOWEEN FLOKI</b></span> <br /> <br />
                <h1>From the Team That Brought You Valentine Floki</h1> <br />  <br />
                <p>Halloween Floki (FLOH) is a meme cryptocurrency token operating on the BEP-20 Blockchain technology (Binance Smart Chain). With the great experience, knowledge and wisdom of the core team, FLOH will attempt to peak at the highest market cap a Floki sub-project has ever reached, all while distributing BUSD rewards every day to its holders.</p><br />
                <p>We are taking advantage of the upcoming Holiday to gain the crypto community’s attention but as the weeks go by, this project will gain its reputation through continuous communication with its investors, aggressive marketing campaigns, listings and constant deliveries from the leadership team. Backed by cryptocurrency and stock market whales, we invite you on this journey to the double-digits millions market cap!</p> <br /><br />
                <div>
                <AiFillTwitterSquare size={"60px"} style={{color:"#1D9BF0",borderRadius:"10%"}}/>
                <FaTelegramPlane size={"50px"} style={{color:"white" ,backgroundColor:"#F27022" ,borderRadius:"10%"}}/>
                </div>


            </div>
            <div className="col-md-6 hallo-img">
                <img className='img-fluid' src="Assets/FLOH_Logo.png" alt="Floh" />
            </div>
        </div>

    </div>
    </div>
  )
}

export default Halloween