import { useState } from "react";

const Form = (props) => {

    const [buttonReveal, ChangeButtonReveal] = useState(false);
    const [userInput, ChangeUserInput] = useState('');

    const ButtonRevealHandler = () => {
        ChangeButtonReveal(buttonReveal => !buttonReveal)
    }
    const UserInputHandler = (event) => {
        ChangeUserInput(event.target.value)
    }
    const SubmitHandler = (event) => {
        event.preventDefault();
        props.submitTransfer(userInput)
        ChangeUserInput('')
        ChangeButtonReveal(buttonReveal => !buttonReveal)
    }
    return(
        <div>
            <p>{props.stringTransfer}</p>
{!buttonReveal &&
<button onClick = {ButtonRevealHandler}>Reveal Form</button>
}
<br/><br/>
{buttonReveal &&
            <form onSubmit = {SubmitHandler}>
                <label>Enter Data: </label>
                <input onChange = {UserInputHandler} value = {userInput}/>
                <button>Submit</button>
            </form>
}
        </div>
    )
}
export default Form;