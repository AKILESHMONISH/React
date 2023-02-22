import react from 'react';

class Sphere extends react.Component{
    constructor(props){
        super(props);
        this.state={
            a:2,
            b:3,
            c:5,
            d:2
        };
    }
    changeR=()=>{
        this.setState((prevState)=>({a:5}));
    }
    changeR1=()=>{
        this.setState((prevState)=>({b:5}));
    }
    changeR2=()=>{
        this.setState((prevState)=>({c:2}));
    }

    changeR3=()=>{
        this.setState((prevState)=>({d:6}));
    }

    render(){
        return (
            <>
            <button onClick={this.changeR}>click</button>
            <br></br>
            <button onClick={this.changeR1}>click</button>
            <br></br>
            <button onClick={this.changeR2}>click</button>
            <br></br>
            <button onClick={this.changeR3}>click</button>
            <br></br>
            <h1>{this.state.a*this.state.b*this.state.c*this.state.d}</h1>
            </>
        );

    }
}

export default Sphere;