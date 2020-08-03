import React from 'react';
import ReactDOM from 'react-dom';
import CheckBox from './components/CheckBox';
import Control from './components/Control';
import 'bulma/css/bulma.css' 

const custom = {
  checked: true
}

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

    <Control>
        <CheckBox custom={custom}>
            Custom
        </CheckBox>
    </Control>


  </div>
  , document.getElementById("root"))
