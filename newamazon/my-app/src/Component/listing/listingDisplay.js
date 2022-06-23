import React, { Component } from "react";
import {Link} from 'react-router-dom';


const ListedData=(props)=>{
   const listedProducts = ({listData})=>{
    console.log("LISTED DATA>>>>",listData)
      if(listData){
            <div className="row p-3 ">
        <div className="col-lg-3 col-md-6 col-sm-8 cost p-2">
            <div className="innercolm item-box text-center">
                <center>
                <img className="proimg" src="https://i.ibb.co/W5dD4Vh/c-5.jpg"  alt=""/>
               </center>
               <h3>Oneplus nord 10</h3>
               <h5>₹24,999.00</h5>
           </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-8 cost p-2">
            <div className="innercolm item-box text-center">
                <center>
                <img className="proimg" src="https://i.ibb.co/W5dD4Vh/c-5.jpg"  alt=""/>
               </center>
               <h3>Oneplus nord 10</h3>
               <h5>₹24,999.00</h5>
           </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-8 cost p-2">
            <div className="innercolm item-box text-center">
                <center>
                <img className="proimg" src="https://i.ibb.co/W5dD4Vh/c-5.jpg"  alt=""/>
               </center>
               <h3>Oneplus nord 10</h3>
               <h5>₹24,999.00</h5>
           </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-8 cost p-2">
            <div className="innercolm item-box text-center">
                <center>
                <img className="proimg" src="https://i.ibb.co/W5dD4Vh/c-5.jpg"  alt=""/>
               </center>
               <h3>Oneplus nord 10</h3>
               <h5>₹24,999.00</h5>
           </div>
        </div>     
           </div>
      }
      else{
        console.log("not Getting API")
      }
   }
   return(
       <div className="listing-box">
            <div className="listing">
                {listedProducts(props)}
            </div>
       </div>
   )

}
export default ListedData;