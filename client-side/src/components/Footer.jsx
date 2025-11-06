import React from "react";
import "../styles/footer.css"
import Cloud from "../../public/icons/Cloud"

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer_container">

                <div className="logo_footer">
                    <div className="cloud_footer">
                        <Cloud/>
                    </div>

                    <div className="typo">
                        WE CLOUD PROZ
                    </div>
                </div>

                <div className="rights">
                    <h4>&copy; 2024 All rights reserved</h4>
                </div>

                <div className="socials">

                </div>
            </div>
        </section>

    )
};

export default Footer