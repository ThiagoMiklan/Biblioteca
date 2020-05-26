import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import DropDown from './biblioteca/DropDown';
import 'bulma/css/bulma.css'


var itens_link =[{value: "Dropdown Button" ,link:true, href:"https://ufsc.br", onClick:()=>{alert("Clicou")}},
            {value: "Dropdown Item",link:true, href:"https://ufsc.br"},
            {value: "Other Dropdown Item",link:true, href:"https://ufsc.br"},
            {value: "Active Dropdown Item", link:true , definition:"is-active", href:"https://ufsc.br"},
            {value: "Other Dropdown Item",link:true, href:"https://ufsc.br"},
            {value: "With a divider",link:true, href:"https://ufsc.br"}
            ];

var itens_div =[
{value: <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>, onClick:()=>{alert("Clicou")}},
{value: <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>},
{value: "This is a link", link:true}

];


const HookDropDown = (props) => {
  var initial = {
    definition: ""
  }
  const [state, setState] = useState(initial);

  var onClick = () => {
    if (state.definition == "is-active") {
      setState({ definition: "" })
    } else {
      setState({ definition: "is-active" })
    }
  }

  return <DropDown definition={state.definition} onClick={onClick} itens={itens_link} />
}



 ReactDOM.render(
        <>
          <DropDown definition="is-active" itens={itens_link}/>    
          <DropDown definition="is-active is-right" itens={itens_div}/>
        </>
     ,
     document.getElementById('root')
 );
