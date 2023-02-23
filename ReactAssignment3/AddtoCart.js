import React from "react";
import './Add.css';
class AddtoCart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cost:0
        };
    }
    changeAdd=(val)=>{
        this.setState({cost:this.state.cost+val});
    }
    changeDel=(val)=>{
        if(this.state.cost-val<0){
            return false
        }
        this.setState({cost:this.state.cost-val});
    }
    render(){
        return(
            <>
            <div class="card">
                <h1>Trimmers Collections For Mens</h1>
                <img src="https://tse3.mm.bing.net/th?id=OIP.60mBDh05Z9uRkifLheObkgHaHa&pid=Api&P=0" height={"400px"} width={"400px"} class="s"/>
                <button onClick={()=>{this.changeAdd(1800)}} class="A1">Add to cart</button>
            <button onClick={()=>{this.changeDel(1800)}} class="A2">Delete from cart</button>
            <img src="https://tse4.mm.bing.net/th?id=OIP.Ll4aBPoP90ntZtxbGERLcgHaHa&pid=Api&P=0" height={"400px"} width={"400px"} class="s1"/>
                <button onClick={()=>{this.changeAdd(1200)}} class="A1">Add to cart</button>
            <button onClick={()=>{this.changeDel(1200)}} class="A2">Delete from cart</button>
            <img src="https://tse2.mm.bing.net/th?id=OIP.ObwbW-DNvV7F4Z8sZbSZOwHaHa&pid=Api&P=0" height={"400px"} width={"400px"} class="s2"/>
                <button onClick={()=>{this.changeAdd(6000)}} class="A3" >Add to cart</button>
            <button onClick={()=>{this.changeDel(6000)}} class="A4">Delete from cart</button>
            <img src="https://tse4.mm.bing.net/th?id=OIP.N15VUDBpXCxFCQoWGel2owHaIq&pid=Api&P=0" height={"400px"} width={"400px"} class="s3"/>
                <button onClick={()=>{this.changeAdd(2000)}} class="A3">Add to cart</button>
            <button onClick={()=>{this.changeDel(2000)}} class="A4">Delete from cart</button>
            <h1 class="P1">The total amount for the product in cart is ${this.state.cost}</h1>
            </div>
        </>
        );
    }
}
export default AddtoCart;