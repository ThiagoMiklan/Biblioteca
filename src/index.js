import React from 'react';
import ReactDOM from 'react-dom';
import Radio from './biblioteca/form/Radio';
import File from './biblioteca/form/File';
import './css/bulma.css';
import {renderToString} from 'react-dom/server'

ReactDOM.render(
  <div className="container is-fluid">
      <File label="Upload File" icon_definition="info" icon_name="fas fa-upload"/>
  </div>
  , document.getElementById("root"))

