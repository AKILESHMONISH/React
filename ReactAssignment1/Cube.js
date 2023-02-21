import react from 'react';
class Cube extends react.Component{
    render(){
        var a=9;
        var area=a*a*a;
        return (
            <div>
                <center>
                    <h1>Cube</h1>
                <h2>Cube side:{a}</h2>
                <h4>Area of the Cube:{area}</h4>
                </center>
                <br></br>
            </div>
        );
    }
}
export default Cube;