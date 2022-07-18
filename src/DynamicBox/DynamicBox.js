import { useState } from "react"
import'../App.css'
const DynamicBox = () => {

    const [width, ChangeWidth] = useState(5);
    const [height, ChangeHeight] = useState(5)
    return(
        <div>
            <div>
                <p>Dynamic Box</p>
                <label>Height: </label><button onClick = {() => ChangeHeight(height+1) }>+</button><button onClick = {() => ChangeHeight(height-1)} >-</button>
                
                <label> Width: </label><button onClick = {() => ChangeWidth(width+1)}>+</button><button onClick = {() => ChangeWidth(width-1)}>-</button>

            
            </div>
            <br/><br/>
            <div className = 'dynamic-box' style={{height:(height +'em'), width:(width + 'em')}}></div>

        </div>
    )
}
export default DynamicBox