import { useState } from "react";



const ColorButton = () => {
const [buttonColor, ChangeButtonColor] = useState('')
const [toggle, ChangeToggle] = useState(false)    

    const ColorClickHandler = () => {
        ChangeToggle(toggle => !toggle)
        if (toggle === false){
        ChangeButtonColor('yellow');
        }else{
            ChangeButtonColor('');
        }
    }

    return(
        <div style={{backgroundColor:buttonColor, padding: '20px'} }>
           
            <button onClick = {ColorClickHandler}  style={{backgroundColor:buttonColor}} >{!toggle ?'Click to Turn Yellow':'Toggle Back'}</button>
            { toggle &&
           <p>Toggle the button</p>
           }
        </div>
    )
}
export default ColorButton;