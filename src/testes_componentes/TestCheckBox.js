import React from 'react';
import ReactDOM from 'react-dom';
import CheckBox from './biblioteca/form/CheckBox';
import Control from './biblioteca/elements/Control';
import './css/bulma.css';


ReactDOM.render(
  <div className="container is-fluid">
    <Control>
      <CheckBox onClick={() => { alert("Clicou CheckBox") }}>
        Remember me
        </CheckBox>
    </Control>

    <Control>
      <CheckBox onClick={() => { alert("Clicou CheckBox") }}>
        Remember m I agree to the <a href="#">terms and conditions</a>
      </CheckBox>
    </Control>

    <Control>
      <CheckBox onClick={() => { alert("Clicou CheckBox") }} disabled={true}>
        Save my preferences
      </CheckBox>
    </Control>



  </div>
  , document.getElementById("root"))

