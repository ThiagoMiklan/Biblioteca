import React from 'react';
import ReactDOM from 'react-dom';
import CheckBox from './biblioteca/CheckBox';
import Control from './biblioteca/Control';
import './css/bulma.css';


ReactDOM.render(
  <div className="container is-fluid">
    <Control>
      <CheckBox>
        normal
        </CheckBox>
    </Control>

    <Control>
      <CheckBox>
        with link <a href="#">here</a>
      </CheckBox>
    </Control>

    <Control>
      <CheckBox onClick={()=>{alert("Clicou CheckBox")}}>
       with on click
      </CheckBox>
    </Control>


    <Control>
      <CheckBox disabled={true} onClick={()=>{alert("Clicou CheckBox")}}>
        disabled with onClick
      </CheckBox>
    </Control>


  </div>
  , document.getElementById("root"))
