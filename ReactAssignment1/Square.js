import react from 'react';
class Square extends react.Component{
    render(){
        var a=3;
        var area=a*a;
        return (
            <div>
                <center>
                    <h1>Square</h1>
                <h2>square size:{a}</h2>
                <h4>Area of the Square:{area}</h4>
                </center>
                <br></br>
            </div>
        );
    }
}
export default Square;