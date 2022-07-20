import React from "react";
import img1 from "../Home/Img/img1.gif";
import img2 from "../Home/Img/img2.gif";
import img3 from "../Home/Img/img3.gif"
import {Link} from "react-router-dom";



const Home = () => {
  
  return (
      <div>
        <div style={{width:"100%", height:"70px", border:"1px solid#ccc", backgroundColor:"#DA5C5C"}}>
            <img src={img1}  alt=""/>
        </div>
        <div  style={{display:"flex"}}>
            <div style={{display:"", marginLeft:"80px", marginTop:"60px"}}>
              <h1 style={{width:"470px", fontSize:"55px"}}>Faça seu pedido que entregamos pra você!!!</h1>
              <p/>
              <h2 style={{width:"500px", color:"#9E9E9E", fontSize:"24px"}}>Escolha seu pedido e em poucos minutos levaremos na sua porta</h2>
              <button  style={{
                fontSize:"24px",
                 border:"0px",
                 borderRadius:"5%", 
                 width:"220px", 
                 height:"70px", 
                 fontWeight:"bolder", 
                 color:"#FFFFFF", 
                 backgroundColor:"#DA5C5C",
                 marginTop:"40px"
                 }}><Link style={{ fontSize:"24px", color:"FFFFFF", textDecoration:"none"}} to="/Pages/Pedido">FAZER PEDIDO</Link></button>
            </div>
            <div style={{width:"200px", height:"100px", backgroundColor:"#ccc", marginLeft:"1px", marginTop:"120px"}}>
              <img src={img2} alt=""/>
              
            </div>
        </div>
        <div style={{ backgroundColor:"#263238",marginTop:"150px", height:"85px"}}>
          <div style={{display:"flex", justifyContent:"center"}}>
            <h2 style={{color:"#FFFFFF", fontSize:"12px", textAlign:"center", marginTop:"14px"}}>App desenvolvido durante a 2ª ed. do evento Semana DevSuperior</h2>
          </div>
          <div style={{display:"flex", justifyContent:"center"}}>
            <img style={{width:"86px", height:"23.14px", marginTop:"04px"}} src={img3} alt=""/>
          </div>
          
          
        </div>
      </div>  
    );
}

export default Home;