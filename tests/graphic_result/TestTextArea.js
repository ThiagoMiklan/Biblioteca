import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import TextArea from './components/TextArea';
import 'bulma/css/bulma.css';
import Control from './components/Control';



ReactDOM.render(
  <>
    <div className="container is-fluid">
      <div className="columns">
          <div className="column is-half">
          
          <TextArea placeholder="e.g. Hello world"></TextArea>

          <TextArea rows="10" placeholder="10 lines of text"></TextArea>

          <Control>
            <TextArea definition="is-primary" placeholder="e.g. Hello world"></TextArea>
            <br></br>
            <TextArea definition="is-info" placeholder="e.g. Hello world"></TextArea>
            <br></br>
            <TextArea definition="is-success" placeholder="e.g. Hello world"></TextArea>
            <br></br>
            <TextArea definition="is-warning" placeholder="e.g. Hello world"></TextArea>
            <br></br>
            <TextArea definition="is-danger" placeholder="e.g. Hello world"></TextArea>
            <br></br>
          </Control>

          <TextArea definition="is-small" placeholder="e.g. Hello world"></TextArea>
          <TextArea placeholder="e.g. Hello world"></TextArea>
          <TextArea definition="is-medium" placeholder="e.g. Hello world"></TextArea>
          <TextArea definition="is-large" placeholder="e.g. Hello world"></TextArea>

          <br></br>
          <TextArea placeholder="e.g. Hello world" definition="is-loadingr" readonly={true}></TextArea>
          <TextArea placeholder="e.g. Hello world" definition="is-loading" disabled={true}></TextArea>
          </div>
      </div>
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