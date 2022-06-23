import React, { Component } from "react";
import axios from'axios';
import ListedData from "./listingDisplay"
import Header from "../../header";
import './style.css'

const url =  "http://localhost:9705/product/category_id="

class Listing extends Component{
    constructor(props){
        super(props)

        this.state={
            itemData:''
        }
    }
    render(){
        return(
            <>
             <Header/>
             <ListedData listData={this.state.itemData}/>
            </>

        )
    }
   
    async componentDidMount(){
        let restId = this.props.location.search.split('=')[1];
        console.log("restId",restId)
        // let response = await axios.get(`${url}/${restId}`)
        // console.log(">>>response.data[0].restaurant_id",response.data[0].restaurant_id)
        // let menuResponse = await axios.get(`${menuUrl}${response.data[0].restaurant_id}`)
        // this.setState({details:response.data[0],menuList:menuResponse.data})
    }
}
export default Listing