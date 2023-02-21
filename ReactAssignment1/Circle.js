import react from 'react';
import Rect from './Rect';
import Square from './Square';
class Circle extends react.Component{
    render(){
        var r=5;
        var area=Math.PI*r*r;
        return (
            <div>
                <center>
                <h1>Circle</h1>
                <h2>circle radius:{r}</h2>
                <h4>Area of the circle:{area}</h4>
                </center>
                <br></br>
            </div>
        );
    }
}
export default Circle;