import React, {useEffect, useState} from "react";
import img1 from "../Home/Img/img1.gif";

import mapa from "../Pedido/img/Mapa.png";
import group88 from "../Pedido/img/Group 88.png";
import img3 from "../Home/Img/img3.gif"
import api from "../../Services";
import "./styles.css";

const Pedido = () => {
    const baseURL = "http://localhost:8080/products"
    const[produtos, setProdutos] = useState([]);

    //Listar produtos===================================================n
    const getProdutos = async () => {
        const resposta = await api.get(baseURL);
        setProdutos(resposta.data);
        console.log("Listar Produtos", resposta.data);
    }
    //Listar produtos===================================================
    useEffect(() => {
        getProdutos();
    },[]);
    
    return(
        <div style={{display:"block"}}>
           <div style={{width:"100%", height:"70px", backgroundColor:"#DA5C5C"}}>
              <img src={img1}  alt=""/>
           </div>
           <div style={{display:"flex", width:"1540px"}}>
               <div style={{width:"435px", marginLeft:"310px", marginTop:"25px"}}>
                 <h1 style={{color:"#DA5C5C", margin:"0px", fontSize:"36px"}}>SIGA AS ETAPAS</h1>
               </div>
               <div style={{display:"flex", width:"410px",marginLeft:"20px", marginTop:"25px", backgroundColor:""}}>
                    <div style={{display:"block", width:"400px", backgroundColor:""}}>
                            <div style={{display:"flex", width:"510px"}}>
                               <h1 style={{margin:"0px", color:"#DA5C5C", fontSize:"24px"}}>1</h1>
                               <h1 style={{fontSize:"18px",margin:"05px", fontWeight:"normal", marginLeft:"05px", color:"#9E9E9E"}}>Selecione os produtos e localização.</h1>
                            </div>
                            <div style={{display:"flex", width:"500px"}}>
                                <h1 style={{margin:"0px", color:"#DA5C5C", fontSize:"24px", marginTop:"06px"}}>2</h1>
                                <div style={{display:"flex"}}>
                                    <h1 style={{fontSize:"18px", fontWeight:"normal", marginLeft:"05px", color:"#9E9E9E"}}>Depois clique em </h1>
                                    <h1 style={{fontSize:"18px", fontWeight:"bolder", marginLeft:"05px", color:"#9E9E9E"}}>“ENVIAR PEDIDO”</h1>
                                </div>
                                                              
                            </div>
                           
                    </div>
                                                     
               </div>
               <div style={{display:"flex", width:"1002px", height:"60px", margin:"0px", marginTop:"25px"}}>
                    <button style={{width:"410px", marginLeft:"120px", backgroundColor:"#DA5C5C", border:"0px", borderRadius:"5px", color:"#FFFFFF", fontSize:"18px"}}>Pedido enviado com sucesso! Nº 5</button>
               </div>  
               
           </div>    
           <div style={{display:"block", backgroundColor:"#F5F5F5", marginTop:"10px"}}>
               <br/>
               <div style={{display:"flex", flexWrap:"wrap", width:"1000px", height:"920px", marginBottom:"35px", marginLeft:"300px"}}>
               
               {produtos.map((produto) => {
                    return (
                       <div key={produto.id} style={{display:'block', boxShadow:' 0px 4px 20px rgba(0, 0, 0, 0.25)', justifyContent:'center', margin:'5px', width:'235px', height:'455px', borderRadius:'5%', border:'0px solid#ccc', color:'#FFFFFF',backgroundColor:''}}>
                          
                           <h2 style={{marginLeft:'20px', fontSize:"18px", fontWeight:"bold", color:'#DA5C5C'}}>{produto.name}</h2>

                           <img style={{borderRadius:'5%', width:'219px', height:'138px', marginLeft:'8px'}} src={produto.imageUri} alt=''/>

                           <h1 style={{marginLeft:'5px', color:'#DA5C5C', fontSize:'24px', fontWeight:'bold'}}>{new Intl.NumberFormat('pt', {
                               style: 'currency',
                               currency: 'BRL'
                               }).format(produto.price)}</h1>
                               <hr style={{width:'224px', color:'#E6E6E6'}}/>
                               <h1 style={{marginLeft:'5px', fontSize:'16px', fontWeight:'bold', color:'#9E9E9E'}}>Descrição</h1>
                               <div>
                                    <h1 style={{width:'210px',marginLeft:'5px', fontSize:'14px', fontWeight:'normal', color:'#9E9E9E'}}>{produto.description}</h1>
                            

                               </div>
                       </div>
                           
                    );

                    })}
     
               </div>
               
                <div style={{display:"block", marginLeft:"300px", marginTop:"15px" ,border:"1px solid #ccc", borderRadius:"3%", width:"1010px", height:"437px"}}>

                    <h1 style={{fontSize:"18px", fontWeight:"bold", color:"#9E9E9E", marginLeft:"300px"}}>Selecione onde o pedido deve ser entregue:</h1>
                    <div>
                       <img  style={{position:"absolute" ,top: 1235, left:302, right:100, bottom:100}}src={group88} alt=""/>                       
                    </div>
                    <div>
                       <img style={{margin:"10px"}} src={mapa}  alt=""/>
                    </div>
                    
                </div>
               
            <div style={{display:"flex", border:"0px solid#ccc", borderRadius:"05%", width:"1000px", height:"73px", backgroundColor:"#DA5C5C", marginLeft:"300px"}}>
                
                <div style={{display:"block"}}>
                    <div style={{display:"flex", backgroundColor:"", height:"35px"}}>
                       <h1 style={{fontSize:"16px", marginLeft:"10px", color:"#FFFFFF"}}>2</h1>
                       <h1 style={{fontSize:"11px", fontWeight:"normal", marginLeft:"10px", marginTop:"15px", color:"#FFFFFF"}}>PEDIDOS SELECIONADOS</h1>
                    </div>
                    <div style={{display:"flex"}}>
                        <h1 style={{color:"#FFFFFF", fontSize:"18px", fontWeight:"bold", marginLeft:"10px", marginTop:"0px"}}>R$ 71,80</h1>
                        <h1 style={{fontSize:"14px", fontWeight:"normal", marginLeft:"10px", marginTop:"03px", color:"#FFFFFF"}}>VALOR TOTAL</h1>
                    </div>

                </div>
                
                <button style={{border:"0px solid #ccc",borderRadius:"3%", fontSize:"18px", fontWeight:"bold", marginLeft:"590px", marginTop:"15px", width:"222px", height:"46px", color:"#DA5C5C", backgroundColor:"#FFFFFF"}}>FAZER PEDIDO</button>
            </div>
            
           </div>
           <div style={{ backgroundColor:"#263238",marginTop:"50px", height:"85px"}}>
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
export default Pedido;

