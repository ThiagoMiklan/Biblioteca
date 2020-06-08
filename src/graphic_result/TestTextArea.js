import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import TextArea from './biblioteca/TextArea';
import 'bulma/css/bulma.css';
import Control from './biblioteca/Control';


const TextAreaHook = ()=>{
  var initial = {
    definition : '',
    count: 0
  }
  
  const [state,setState] = useState(initial);
    
    function onChange() {
      if(state.count == 0){
        setState({ ...state, definition: "primary", count:state.count+1});
      }else if(state.count == 1){
        setState({ ...state, definition: "info", count:state.count+1});
      }else if(state.count == 2){
        setState({ ...state, definition: "warning", count:state.count+1});
      }else if(state.count == 3){
        setState({ ...state, definition: "danger", count:state.count+1});
      }
      
    }
  return  <TextArea definition={state.definition} onChange={onChange} placeholder="Testando onChange"></TextArea>
}

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
          <TextArea placeholder="e.g. Hello world" loading={true} readonly={true}></TextArea>
          <TextArea placeholder="e.g. Hello world" loading={true} disabled={true}></TextArea>
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