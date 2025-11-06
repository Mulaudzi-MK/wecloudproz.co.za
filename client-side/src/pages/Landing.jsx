import React from "react";
import  "../styles/landing.css"
import Navbar from "../components/Navbar"
import landingpic from "../../public/landpic.svg"
import Cloud from "../../public/icons/Cloud"
import Spline from "@splinetool/react-spline"


const Landing = () => {

    return ( 
        <section>
            <div className="landing_content">
             <Spline scene='https://prod.spline.design/sBeZLY9lck9wqOb3/scene.splinecode' className="landing_bg"/>
                <div className="logo">
                <div className="cloud"><Cloud/></div>
                <h1>We</h1> 
                    <h3><span >C</span>loud</h3>
                    <h1   style={{"color": "rgb(66, 152, 202)", "fontSize": "50px"}}>Proz</h1>
                </div>

                <div className="typo">
                    <h5 className="slogan"> Your partner in digital transformation.</h5>
                    <button className="contact_btn">Contact Us</button>
                </div>
              
            </div>
           
            <Navbar/>
        </section>
        
    )
};

export default Landing 