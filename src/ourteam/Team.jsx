import react from 'react';
import './ourteam.css';

const Team=()=>{

return(
<>
<div className="container-fluid " id='team-container'>
  <div id="team-right">
    <div id="teaminner">
      <div className="row">
      <h2 id='team-heading'>Meet Our Team</h2>
      </div>
     
      <p id='team-para'>We are conversation starters and trend-setters. Let’s discover, build and grow your digital business</p>
    </div>

  </div>

</div>

<div className="container-fluid" id='team-container2'>
  <div className="row">
    <h4>Our Team</h4>
    <h4 id='ourteamclr'>Get To Know Us</h4>
  </div>

  <div className="container-fluid " id='team-count3'>
    <div className="row">
      <div className="col-sm-12 col-md-4 col-lg-4">
        <div className="card" id='teamcard'>
          <div className=" teamcard1">
            
            <img src="./images/teamcir1.png" alt="image" srcset="" className='teamimag' /><br></br>
            <h3>Adam jonson</h3>

          </div>

        </div>

      </div>
      <div className="col-sm-12 col-md-4 col-lg-4">

      </div>
      <div className="col-sm-12 col-md-4 col-lg-4">

      </div>
    </div>

  </div>

</div>
</>

);
}

export default Team;