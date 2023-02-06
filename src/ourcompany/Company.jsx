import React from 'react';
import './company.css';

const Company =()=>{
    return(
        <>
        <div className="container-fluid" id ="company-countainer">
            <div className="row">              
                <h1 id='company-h1'>What We Actually Do</h1>
            </div>
            <div className="row">
                <p className='company-p1'>EXPERIENCE.EXECUTION.EXCELLENCE</p>
                
            </div>
           

        </div>
        <div className="container-fluid contibm">
        <div className="row  ">
          <div className=" col-xs-12 col-sm-12 col-md-2 col-lg-3"><img src="images/ibm.png" alt="pic" /></div>
          <div className=" col-xs-12 col-sm-12 col-md-2 col-lg-2"><img src="images/ibm2.png" alt="pic" /></div>
          <div className=" col-xs-12 col-sm-12 col-md-2 col-lg-2"><img src="images/ibm3.png" alt="pic" /></div>
          <div className=" col-xs-12 col-sm-12 col-md-2 col-lg-2"><img src="images/ibm4.png" alt="pic" /></div>
          <div className=" col-xs-12 col-sm-12 col-md-2 col-lg-3"><img src="images/ibm5.png" alt="pic" /></div>

        </div>
      </div>
      <div className="container-fluid" id='company-countainer22'>
        <div className="row row1-heading">
            <h3>About Us</h3>
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