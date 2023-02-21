import react from 'react';

class Rect extends react.Component{
    render(){
        var l=5;
        var b=10;
        var area=l*b;
        return (
            <div>
                <center>
                    <h1>Rectange</h1>
                <h2>Rectange length:{l}</h2>
                <h2>Rectange breadth:{b}</h2>
                <h4>Area of the Rectange:{area}</h4>
                </center>
                <br></br>
            </div>
        );
    }
}
export default Rect;