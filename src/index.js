import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './css/bulma.css';
import Button from './biblioteca/Button';
import Field from './biblioteca/Field';

const FieldHook = (props)=>{
  var initial ={
    cpf:''
  }
  const[state,setState] = useState(initial);

  function onChangeCpf(e){
    setState({cpf:e.target.value});
  }

 return <>
        <Field placeholder={props.placeholder} onChange={onChangeCpf}/>;
        <Button onClick={()=>{alert(state.cpf)}}>Ok</Button>
        </>
}

ReactDOM.render(<FieldHook placeholder="testando"/>,document.getElementById('root'));