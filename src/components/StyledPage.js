import React from 'react';
import { Link} from 'react-router-dom';
import '../styles/styles.css'

const StyledPage =()=>(
<div className="box">
    <div className="row">
        <div className="textSquare">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
            <Link to="/houses">Zobacz Więcej: Houses</Link>
        </div>
        <div className="pictureGrid">
            <img src="../images/water.jpg" className="smallPicture"></img>
            <img src="../images/green.jpg" className="smallPicture"></img>
            <img src="../images/blue.jpg" className="smallPicture"></img>
            <img src="../images/yellow.jpg" className="smallPicture"></img>
        </div>
    </div>
    <div className="row">
    <div className='yellow'>
      hi
    </div>
        <div className="textSquare">
        <h1>
            Nasza oferta
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
    </div>
</div>
)

export default StyledPage;