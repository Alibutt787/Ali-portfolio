import React from 'react'
import aqib_pic from './aqib.ico'
export const Home = () => {
  return (


    <div className="card  container  bg-dark ,mar" style={{ color: "white", width: "50rem", height: "400px", opacity: .7, margin: "0 auto" }}>
    
      <img src={aqib_pic} className=" card-img-top rounded-circle" style={{ marginTop: "10px", marginLeft: "28%", width: "40%", height: "40%" }} alt="Profile pic" />
     
      <div className="card-body  " >
        <div className ="  " style={{margin:"0 auto", marginLeft:"20%"}}>
        <h3 className="card-title"><i class="fas fa-user"></i><b>  Aqib Ali Butt</b></h3>
        <h5 className="card-text"><b> <i class="fas fa-university"></i>   Studying in Punjab University</b></h5>
        <h5 className="card-text"><i class="fas fa-map-marker-alt"></i><b>  Live in Sialkot</b></h5>
        <h5 className="card-text"><i class="far fa-calendar-alt"></i><b>  Wishing me on 10 Dec </b></h5>
        <h5 className="card-text"><i class="fas fa-laptop-code"></i><b>  Learning phase</b></h5>
        
       </div>
       <b className="card-text"><i class="fas fa-edit"></i> All limitations are self-imposed.</b>
      
        <div className="d-flex justify-content-around b-0 ">
       
          <h3 ><a href="https://twitter.com/AqibAliButt1"><i className="fab fa-twitter-square  "></i></a></h3>
          <h3><a href="https://www.instagram.com/aqibalibhat/?igshid=t0lwo233oilk"><i className="fab fa-instagram-square "></i></a></h3>
          <h3><a href="https://github.com/Alibutt787"> <i className="fab fa-github-square "></i></a></h3>
          <h3><a  href="https://www.linkedin.com/in/aqib-ali-butt-a75086208/"><i className="fab fa-linkedin "></i></a></h3>

         
        </div>
      
      </div>
    </div>


  )
}
