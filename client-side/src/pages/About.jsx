import React,{useState} from "react";
import "../styles/about.css"
import aboutpic from "../../public/landpic.svg"
import Spline from "@splinetool/react-spline";

import cloudV from "../../public/animations/cloudV.mp4"
import secure from "../../public/animations/secure.mp4"
import set from "../../public/animations/set.mp4"

const About = () => {
const [overFlow, setOverFlow] = useState(true);

const overFlowing = () => {
    setOverFlow(!overFlow);
}
    return (
        <section className={overFlow? "about_cover":"about_cover_active"}>
         <div className="about_content">

         <div className="about_pic">

           <div className="cloud_vid">
           <video width="200px" height="600px" autoPlay loop muted >
            <source src={cloudV} type="video/mp4" />
           </video>
           </div>

            <div className="secure_vid">
            <video width="100px" height="600px" autoPlay loop muted >
            <source src={secure} type="video/mp4" />
            </video>
            </div>
          
            <div className="set_vid">
            <video  width="290px" height="600px" autoPlay loop muted >
            <source src={set} type="video/mp4" />
           </video>
            </div>

           
         </div>
             <div className={overFlow ? "about_typography" : "overflow"}>
                    
                    <h1>About weCloud Proz</h1>
                    <h1>Our Mission</h1>
                    <p>
                    Our mission is to empower businesses of all sizes to thrive in the digital age by delivering scalable, flexible, and cost-effective cloud computing solutions. We believe that technology should adapt to your business, not the other way around. That's why we're committed to providing customizable cloud solutions that seamlessly integrate with your existing infrastructure and drive tangible results.
                    </p>

                    <h1>Why Choose Us?</h1>
                    <p>Expertise: Our team of cloud experts boasts years of experience in designing, implementing, and managing cloud solutions for businesses across various industries. We're passionate about staying ahead of the curve and continuously evolving our offerings to meet the ever-changing demands of the digital landscape.
                    
                    Reliability: We understand the critical importance of uptime and performance for your business operations. That's why we leverage robust infrastructure and best-in-class technologies to ensure unparalleled reliability and performance, so you can focus on what matters most—growing your business.
                    
                    Security: Your data's security is our top priority. We adhere to industry-leading security standards and employ advanced encryption protocols to safeguard your sensitive information against evolving cyber threats. With us, you can rest assured that your data is in safe hands.
                    
                    Scalability: Whether you're a startup experiencing rapid growth or an established enterprise looking to optimize your IT infrastructure, our cloud solutions are designed to scale alongside your business. With elastic resources and flexible deployment options, you can easily adapt to changing business needs without any hassle.
                    

                    </p>
                    

                    <h1>Our Commitment</h1>
                    <p>   At weCloud Proz, we're more than just a cloud computing provider—we're your trusted partner in digital transformation. We're committed to helping you unlock the full potential of the cloud and drive innovation, efficiency, and agility across your organization. With our comprehensive suite of cloud services and unwavering dedication to customer satisfaction, we're here to help you navigate the complexities of the digital landscape and achieve your business objectives.

                    Experience the power of the cloud with weCloud Proz Get in touch with us today to learn more about our services and how we can help propel your business forward.
                    </p>
                 
                    
             </div>

                

          </div>
          <button onClick={() => overFlowing()} className={overFlow? "about_btn" : "about_btn_active"}>{overFlow? "Read More" : "Read Less"}</button>
                
        </section>
        
    )
};

export default About