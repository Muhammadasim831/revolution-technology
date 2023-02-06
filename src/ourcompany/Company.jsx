import React from 'react';
import './company.css';

const Company =()=>{
    return(
        <>
        <div className="container-fluid" id ="company-countainer">
            <div className="row">
                <p id="company-para1">EXPERIENCE. EXECUTION. EXCELLENCE</p>
                <h1 id='ompany-h1'>What We Actually Do</h1>
            </div>
            <div className="row " id='row-cen'>
                <div className="col-sm-1 col-md-1 col-lg-1 c-height bg-img" >
             <img src="./images/comp1.png" alt="image" srcset="" className='img-h'  />
             

                </div>
                <div className="col-sm-1 col-md-1 col-lg-1 c-height bg-img">
                <img src="./images/comp1.png" alt="image" srcset="" className='img-h'  />  
                </div>
                <div className="col-sm-12 col-md-4 col-lg-1 c-height bg-img">
                <img src="./images/comp1.png" alt="image" srcset="" className='img-h'  />
                </div>
                <div className="col-sm-1 col-md-1col-lg-1 c-height bg-img ">
                <img src="./images/comp1.png" alt="image" srcset="" className='img-h'  />
                </div>
            </div>
            <div className="row">
                <h2 className='h2-color'>PHP Website Development Services</h2>
                <p className='h2-color'>Revolution Technologies is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help 
                      businesses elevate their value through custom software development, product design, QA and consultancy services.</p>
            </div>

        </div>
        <div className="container-fluid head.contibm">
        <div className="row  head.co">
          <div className=" col-xs-12 col-sm-12 col-md-2 col-lg-3"><img src="images/ibm.png" alt="pic" /></div>
          <div className=" col-xs-12 col-sm-12 col-md-2 col-lg-2"><img src="images/ibm2.png" alt="pic" /></div>
          <div className=" col-xs-12 col-sm-12 col-md-2 col-lg-2"><img src="images/ibm3.png" alt="pic" /></div>
          <div className=" col-xs-12 col-sm-12 col-md-2 col-lg-2"><img src="images/ibm4.png" alt="pic" /></div>
          <div className=" col-xs-12 col-sm-12 col-md-2 col-lg-3"><img src="images/ibm5.png" alt="pic" /></div>

        </div>
      </div>

      <div className="container-fluid" id ="company-countainer2">
        <div className="row">
            <h1 className='count2-p2'>Our Testimonial</h1>
            <h5 className='count2-p2'>what our Customer are saying</h5>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-4">

                </div>
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-4">

                </div>
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-4">

                </div>
            </div>
        </div>

      </div>
      <div className="container-fluid" id ="company-countainer3">
        <div className="row">
        <div className=" col-xs-12 col-sm-12 col-md-3 col-lg-3 ">
            <h1 className='count3-h3'>20+</h1>
            <p className='count3-p3'>AC TIVE CLIENTS</p>

        </div>
        <div className=" col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <h1 className='count3-h3'>20+</h1>
            <p className='count3-p3'>AC TIVE CLIENTS</p>

        </div>
        <div className=" col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <h1 className='count3-h3'>20+</h1>
            <p className='count3-p3'>AC TIVE CLIENTS</p>

        </div>
        <div className=" col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <h1 className='count3-h3'>20+</h1>
            <p className='count3-p3'>AC TIVE CLIENTS</p>

        </div>
        </div>
      </div>
        </>

    );
}

export default Company;