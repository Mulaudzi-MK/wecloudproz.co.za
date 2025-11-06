import React from "react";
import  "../styles/service.css"
import servicesData from "../services/servicesData"
import Spline from "@splinetool/react-spline";

const Services = () => {
    return (
        <section className="servicebg">
                 <div className="service_heading">Our Services</div>
                <div class="services-container">
                {servicesData.map((sev, index) => (
                <div class="service-card" key={index}>
                        
                        
                <div className="top_shelve">
                   <div className="tile">{sev.title} </div>
                   <div className="icon">
                    <sev.icon/>
                   </div>
                </div>
                
                <div className="description">
                    <p>{sev.description}</p>
                </div>

            </div>
                 ))}
                    
                  
                </div>
        </section>
        
    )
};

export default Services