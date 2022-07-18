import { useState } from "react";
const buttonArray = ['You clicked button one', 'You clicked button two', 'You clicked button three'];

const ThreeButtons = (props) => {

    const [buttonInput, ChangeButtonInput] = useState('Please select a button');
    props.transferButton(buttonInput);

    return(
        <div>
            <button onClick = {() => ChangeButtonInput(buttonArray[0]) }>Button 1</button>
            <button onClick = {() => ChangeButtonInput(buttonArray[1])}>Button 2</button>
            <button onClick = {() => ChangeButtonInput(buttonArray[2])}>Button 3</button>
        </div>
    )
}
export default ThreeButtons;