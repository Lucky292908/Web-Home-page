import React, { useContext } from "react";
import "./Intro.css";
import V from "../../img/v.png";
import V2 from "../../img/V2.png";
const Intro = () => {
  return (

<div > 
  <div className="E"></div>
<div className="K"><span className="P" >👋WELCOME TO MANAGE WISE!
</span></div>
<div>
<h1 className="D">Empower your business with 
   <br></br>
   <samp className="C" >Strategic</samp>
   &nbsp;insights</h1>
</div>


  <p className="F">Powerful management platform designed to streamline your
    <br />
business operations, boost productivity, and drive success</p>
<div className="I"><a href="https://www.youtube.com/"> <span><button className="G">&nbsp; &nbsp;Get Started &nbsp; &nbsp;</button></span></a>
 
<a href="https://www.youtube.com/"><button className="H">&nbsp;Watch Demo &nbsp; <img className="Im" src={V} alt="Logo" /></button></a>

</div>

<div className="image-container">
<img className="responsive-image" src={V2} alt="Responsive Image" />
     
    </div >
{/*     
<div className="M">
  
  
  
  <div className="T"><samp className="R">&nbsp;&nbsp;🔥PREMIER FEATURES&nbsp;&nbsp;</samp>
  
  
  
  <div className="N">
  Discover our product's <span className="O">Capabilities</span>
  <div className="F">Don't settle for mediocrity - embrace the future of management <br /> with Manage Wise.</div>
  
  
  
  </div>
  </div>
  </div> */}








</div>



   
    
  );
};

export default Intro;
