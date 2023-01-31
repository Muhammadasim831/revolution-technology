import React from "react";
import Navbar from './Components/Navbar';
import Header from './Header';
import Services from './Services';
import Leads from './Leads';
import Introduce from './Introduce';
import Test from './Test';
import Expert from './Expert';
import Solution from './Solution';
import Form from './Form';
import Footer from './Footer';
const Home=()=>{

    return(
        <>
    <Navbar/>,
  <Header/>,
<Services/>,
  <Leads/>,
  <Introduce/>,
  <Test/>,
  <Expert/>,
  <Solution/>,
  <Form/>,
  <Footer/>
        
        </>

    );
        


    
}
export default Home;