import react from 'react';
class Triangle extends react.Component{
    render(){
        var l=3;
        var b=8;
        var area=1/2*l*b;
        return (
            <div>
                <center>
                    <h1>Triangle</h1>
                <h2>Triangle side:{l}</h2>
                <h2>Triangle side2:{b}</h2>
                <h4>Area of the Triangle:{area}</h4>
                </center>
            </div>
        );
    }
}
export default Triangle;