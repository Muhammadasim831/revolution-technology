import React from "react";
import './portfolios.css';
const Portfolio = () => {
    return (
        <>
            <div className="container-fluid" id="port-container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="row" id="portrow1">
                            <h1>CUSTOMIZABLE</h1>
                            <h3>SOFTWARE PRODUCTS</h3>
                            <p id="port-para">We build custom digital solutions to meet our clients unique business needs</p>
                        </div>

                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="">
                            <img src="./images/portbg1.png" alt="image" srcset="" id="port-imag1" />
                        </div>

                    </div>
                </div>

            </div>
            <div className="container-fluid" id="port-container2">
                <div className="row">
                    <h1>Introduce Our Projects</h1>
                    <p id="port-para2">Software development outsourcing is just a tool to achieve business goals. But there is no wayto get
                        worthwhile results without cooperation and trust between a client company.  </p>
                </div>
                <div className="row" >
                    <div className="col-sm-12 col-md-4 col-lg-4 port-row1" >
                        <h2>All</h2>

                        <div className="port-imag">
                            <img src="./images/imgport11.png" alt="image" srcset="" className="img-port11" />
                            <div>
                                <img src="./images/portcolor1.png" alt="image" srcset="" className="portcolor1" />
                                <div className="row">
                                    <p className="port-p1">Galaxy world wide</p>
                                    <p className="port-p2">IOS App</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4  port-row1">
                        <h2>Web Develoment</h2>
                        <div className="port-imag">
                            <img src="./images/imgport22.png" alt="image" srcset="" className="img-port11" />
                            <div>
                                <img src="./images/portcolor2.png" alt="image" srcset="" className="portcolor1" />
                                <div className="row">
                                    <p className="port-p1">Galaxy world wide</p>
                                    <p className="port-p2">IOS App</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4  port-row1">
                        
                        
                        <div className="port-imag">
                        <h2>Mobile App</h2>
                            <img src="./images/imgport33.png" alt="image" srcset="" className="img-port11" />
                            <div>
                                <img src="./images/portcolor3.png" alt="image" srcset="" className="portcolor1" />
                                <div className="row">
                                    <p className="port-p1">Galaxy world wide</p>
                                    <p className="port-p2">IOS App</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </>
    )
}
export default Portfolio;