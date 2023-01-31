import React from "react";
import './countactus.css';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
const Contact=()=>{

    return(
        <>
        <div className="container-fluid" id="contact-container">
            <h1>Contact Us</h1>
        
        </div>
        <div className="container" id="contact-container2">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h1 className="contact-color-black">Contact us</h1>
                    <p className="contact-color-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam quidem 
                        blanditiis corporis a consequatur aperiam, rerum culpa 
                        soluta quae iure quasi deleniti totam molestias fugiat est, eum assumenda numquam!</p>
                        <p className="contact-color-black"> < LanguageIcon  fontSize="small" style={{ color: "#ffcc39" }}/><h5 className="contact-color-black">Our Address</h5>Office#09, National Business Center, Murree Rd, Shamsabad, Rawalpindi</p>

                        <p className="contact-color-black"> <EmailIcon fontSize="small" style={{ color: "#ffcc39" }} /> <h5 className="contact-color-black">Our Mails</h5> info@therevolutiontechnologies.com</p>

                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div id="contact-form">
                        <h1 className="contact-color">Ready to get Started?</h1>
                        <p className="contact-color">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, iure.</p>
                        <form action="">
                        <input type="text" placeholder="Name" /><br></br>
                         <input type="text" placeholder="Email" /><br></br>
                         <textarea name="textbox" id="" cols="" rows="5" placeholder="Message" className="textarea1"></textarea>
                        </form>
                    </div>

                </div>
            </div>

        </div>
        
        
        </>
    )

}
export default Contact;