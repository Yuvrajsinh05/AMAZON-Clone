import React from "react";
import { Link } from 'react-router-dom'

const Products = (props) => {


    const listdata = ({proData}) => {
        // console.log(">>>mealData111",proData)
        if(proData){
            // console.log(">>>mealData",proData)
            for (let i = 0; i < proData.length; i++){
                // console.log(proData[i])
                if (i % 2 == 0){
                    console.log("check this EVEN",i,proData[i]) 
                    // return(
                    // <div className="row">
                    //     <h2 className="proHead  text-center">{}<i className="fa-solid fa-shirt"></i></h2>
                    //     <div className="col-lg-3 col-sm-6 p-3 mt-5 colmm">
                    //         <div className="gridboox">
                    //             <div className="h-75 dd1">
                    //                 <img className="w-100 h-100 p-2" src={img[0]} alt="" />
                    //             </div>
                    //             <div className="h-25 dd1">
                    //                 <h3 className="text-center">{type[0]}</h3>
                    //             </div>
                    //         </div>
                    //     </div>
                    //     <div className="col-lg-3 col-sm-6 p-3 mt-5 colmm">
                    //         <div className="gridboox">
                    //             <div className="h-75 dd1">
                    //                 <img className="w-100 h-100 p-2" src={img[1]} alt="" />
                    //             </div>
                    //             <div class="h-25 dd1">
                    //                 <h3 className="text-center">{type[2]}</h3>
                    //             </div>
                    //         </div>
                    //     </div>
                    //     <div className="col-lg-3 col-sm-6 mt-5 p-3 colmm">
                    //         <div className="gridboox">
                    //             <div className="h-75 dd1">
                    //                 <img className="w-100 h-100 p-2" src={img[2]} alt="" />
                    //             </div>
                    //             <div className="h-25 dd1">
                    //                 <h3 className="text-center">{type[3]}</h3>
                    //             </div>
                    //         </div>
                    //     </div>
                    //     <div className="col-lg-3 col-sm-6 mt-5 p-3 colmm">
                    //         <div className="gridboox">
                    //             <div className="h-75 dd1">
                    //                 <img className="w-100 h-100 p-2" src={img[2]} alt="" />
                    //             </div>
                    //             <div className="h-25 dd1">
                    //                 <h3 className="text-center">{type[3]}</h3>
                    //             </div>
                    //         </div>
                    //     </div>
                    // </div>
                    // )}
                }
                else{
                    console.log("check this odd",i,proData[i]) 
                    // return(
                    //     <>
                    //     <div className="row">
                    //     <a href="">
                    //         <div className="col-12 p-1 colmm">
                    //             <div className="gridboox ">
                    //                 <div className="h-75">
                    //                     <div className="innerpro h-100"><a href="">
                    //                             <center className="h-100"><img className="h-100 w-75" src="./images/c-24.jpg" alt=""/>
                    //                             </center>
                    //                         </a></div>
                    //                     <div className="innerpro h-100"><a href="">
                    //                             <center className="h-100"><img className="h-100 w-75" src="./images/c-24.jpg" alt=""/>
                    //                             </center>
                    //                         </a></div>
                    //                     <div className="innerpro h-100"><a href="">
                    //                             <center className="h-100"><img className="h-100 w-75" src="./images/c-24.jpg" alt=""/>
                    //                             </center>
                    //                         </a></div>
                    //                     <div className="innerpro h-100"><a href="">
                    //                             <center className="h-100"><img className="h-100 w-75" src="./images/c-24.jpg" alt=""/>
                    //                             </center>
                    //                         </a></div>
                    //                     <div className="innerpro h-100"><a href="">
                    //                             <center className="h-100"><img className="h-100 w-75" src="./images/c-24.jpg" alt=""/>
                    //                             </center>
                    //                         </a></div>
                    //                 </div>
                    //                 <div className="h-25">
                    //                     <h3 className="text-center pt-3">Women's Fashion</h3>
                    //                 </div>
                    //             </div>
                    //         </div>
                    //     </a>
                    // </div>
                    // <hr/><br/>
                    // </>
                    // )
                }
        } 
    }

    }
        return (        
            <div>
                < div id="main-content m-auto" >
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://i.ibb.co/3yh1RY0/slide1.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://i.ibb.co/gzGjWb8/slide2.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://i.ibb.co/fr9CpZD/slide5.jpg" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="grid">
                        {listdata(props)}
                    </div>
                </div >
            </div>
       

        )
}
export default Products