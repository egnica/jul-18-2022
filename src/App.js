import Form from './Form/Form';
import ThreeButtons from './ThreeButtons/ThreeButtons';
import ColorButton from './ColorButton/ColorButton';
import DynamicBox from './DynamicBox/DynamicBox';
import './App.css';
import { useState } from 'react';

const stringData = 'This is a string from App.js rendered to Form.js'
const listArray = [];

function App() {

const [userSubmit, ChangeUserSubmit] = useState('')
const [threeButton, ChangeThreeButton] = useState('')

const SubmitHandler = (value) => {
  ChangeUserSubmit(value);
  listArray.push(value)
}

const ThreeButtonHandler = (value) => {
  ChangeThreeButton(value);

}

  return (
    <div className="App">

    <Form stringTransfer = {stringData} submitTransfer = {SubmitHandler}/>
    <p>{userSubmit}</p>
    {listArray.map((item, index) => <p key={index}>{(index + 1) + ': ' + item}</p>)}
    <p>{threeButton}</p>
    <ThreeButtons transferButton = {ThreeButtonHandler}/>
    <br/><br/>
    <ColorButton/>
    <DynamicBox/>
    </div>
  );
}

export default App;
