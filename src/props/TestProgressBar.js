import React, { useState } from 'react';
import ReactDOM from 'react-dom';
 
import './css/all.js';
import ProgressBar from './biblioteca/elements/ProgressBar';

function onClick() {
  alert("testando delete");
}
var itens = ["coffee", "tea", "milk"];

ReactDOM.render(
  <>
  <ProgressBar max="100" value="15" max="100"></ProgressBar>
  <ProgressBar definition="primary" value="15" max="100"></ProgressBar>
  <ProgressBar definition="link" value="30" max="100"></ProgressBar>
  <ProgressBar definition="info" value="45"max="100"></ProgressBar>
  <ProgressBar definition="success" value="60" max="100"></ProgressBar>
  <ProgressBar definition="warning" value="75" max="100"></ProgressBar>
  <ProgressBar definition="danger" value="90" max="100"></ProgressBar>

  <ProgressBar definition="small" value="15" max="100"></ProgressBar>
  <ProgressBar definition="" value="30" max="100"></ProgressBar>
  <ProgressBar definition="medium" value="45"max="100"></ProgressBar>
  <ProgressBar definition="large" value="60" max="100"></ProgressBar>

  <ProgressBar definition="small primary" max="100"></ProgressBar>
  <ProgressBar definition="danger"  max="100"></ProgressBar>
  <ProgressBar definition="medium dark" max="100"></ProgressBar>
  <ProgressBar definition="large info" max="100"></ProgressBar>
</>
  ,
document.getElementById("root"))
