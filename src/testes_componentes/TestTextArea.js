import React from 'react';
import ReactDOM from 'react-dom';
import TextArea from './biblioteca/form/TextArea';
import Column from './biblioteca/columns/Columns';
import Columns from './biblioteca/columns/Column';
import './css/bulma.css';

ReactDOM.render(
  <>
    <div className="container is-fluid">
    <TextArea placeholder="e.g. Hello world"></TextArea>
    <TextArea rows="10" placeholder="10 lines of text"></TextArea>
    <TextArea definition="primary" placeholder="e.g. Hello world"></TextArea>
    <TextArea definition="info" placeholder="e.g. Hello world"></TextArea>
    <TextArea definition="success" placeholder="e.g. Hello world"></TextArea>
    <TextArea definition="warning" placeholder="e.g. Hello world"></TextArea>
    <TextArea definition="danger" placeholder="e.g. Hello world"></TextArea>
    <TextArea definition="small" placeholder="e.g. Hello world"></TextArea>
    <TextArea placeholder="e.g. Hello world"></TextArea>
    <TextArea definition="medium" placeholder="e.g. Hello world"></TextArea>
    <TextArea definition="large" placeholder="e.g. Hello world"></TextArea>
    <TextArea placeholder="e.g. Hello world" loading={true} readonly={true}></TextArea>
    <TextArea placeholder="e.g. Hello world" loading={true} disabled={true}></TextArea>
    </div>
  </>
  ,document.getElementById("root"))


  /*
  <>
    <div className="container is-fluid">
    <TextArea placeholder="e.g. Hello world"></TextArea>
    <TextArea rows="10" placeholder="10 lines of text"></TextArea>
    <TextArea definition="primary" placeholder="e.g. Hello world"></TextArea>
    <TextArea definition="info" placeholder="e.g. Hello world"></TextArea>
    <TextArea definition="success" placeholder="e.g. Hello world"></TextArea>
    <TextArea definition="warning" placeholder="e.g. Hello world"></TextArea>
    <TextArea definition="danger" placeholder="e.g. Hello world"></TextArea>
    <TextArea definition="small" placeholder="e.g. Hello world"></TextArea>
    <TextArea placeholder="e.g. Hello world"></TextArea>
    <TextArea definition="medium" placeholder="e.g. Hello world"></TextArea>
    <TextArea definition="large" placeholder="e.g. Hello world"></TextArea>
    <TextArea definition="hovered" placeholder="e.g. Hello world"></TextArea>
    </div>
  </>
  
  */