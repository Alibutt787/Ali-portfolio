import { React } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { About } from './About';
import { Videos } from './Videos';
import { Home } from './Home';
import './App.css'
import { Notfound } from './Notfound';
import { Feedback } from './Feeback';
import {  Covid } from './Covid';
import {  Birthday } from './Birthday';



function App() {




  return (
    <div  >

      <BrowserRouter>
        <div className="con">

          <div className="  d-flex flex-row co  justify-content-between fixed-top" >
            <div className="co" style={{ fontSize: "40px" }}><b>AQIB Portfolio</b><i class="fas fa-user-tie"></i></div>
            <div className="dropdown co">
              <button className="btn  " type="button" data-toggle="dropdown" style={{ width: "50px", height: "50px" }}>
                <i className="fas fa-bars "  style={{fontSize: "2em"}}></i></button>
              <ul className="  dropdown-menu  dropdown-menu-right "  >
                <li className="  dropdown-item "> <Link className=" Link dropdown-item " to="/"><i className="fa fa-home "></i><span style={{ fontSize: "20px" }}>Home</span></Link> </li>
                <li className="  dropdown-item "> <Link className="Link dropdown-item " to="/Videos"><i class="fas fa-video "></i><span style={{ fontSize: "20px" }}>Videos</span></Link></li>
                <li className="  dropdown-item "> <Link className="Link dropdown-item " to="/Birthdays">  <i class="fas fa-birthday-cake "></i><span style={{ fontSize: "20px" }}>Birthdays</span></Link></li>
                <li className="  dropdown-item "> <Link className="Link dropdown-item " to="/Covid"> <i class="fas fa-virus "></i> <span style={{ fontSize: "20px" }}>Covid_19</span></Link></li>
                <li className="  dropdown-item "> <Link className="Link dropdown-item " to="/feedback"><i class="fas fa-comments "></i><span style={{ fontSize: "20px" }}>Feedback</span></Link></li>
                <li className="  dropdown-item "> <Link className="Link dropdown-item " to="/contect"><i class="fas fa-address-book"></i><span style={{ fontSize: "20px" }}>Contect</span></Link></li>

              
              </ul>
            </div>
          
          </div>
<br/>
<br/>
<br/>
<br/>

          <div className=" d-flex flex-row ">
            <Routes  >
              <Route path="/" element={<Home />} />
              <Route path="/Videos" element={<Videos />} />
              <Route path="/Covid" element={<Covid />} />
              <Route path="/Birthdays" element={<Birthday />} />
            
              <Route path="/Videos/:id" element={<About  />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/*" element={<Notfound />} />
            </Routes>

          </div>

        </div>
      </BrowserRouter>
      <nav class=" fixed-bottom navbar-light bg-dark bot" style={{textAlign:"center" ,color:"white"}} >
  <div class=" bg-dark" ><h4><b>2020&copy;AliButt</b></h4></div>
</nav>
    </div>
  );
}

export default App;
