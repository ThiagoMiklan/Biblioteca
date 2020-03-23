import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import './css/bulma.css';
import Field from './biblioteca/elements/Field';
import Tabs from './biblioteca/components/Tabs';
import Columns from './biblioteca/columns/Columns';
import Column from './biblioteca/columns/Column';
import Message from './biblioteca/components/Message';
import Button from './biblioteca/elements/Button';
import ButtonList from './biblioteca/elements/ButtonList';
import Icon from './biblioteca/elements/Icon';

var itens = [{value:"Cadastro"}, {value:"Visualização"}, {value: "Exclusão"}]

const Usuarios = ()=>{
   return<>
         <div className="container is-fluid">
            <Tabs definition ="centered medium info" itens={itens}></Tabs>
            <div className="container is-fluid">
               
            </div>
         </div>
        </>
}

const ContainerCadCliente = (props) => {

   
   return <div className="container is-fluid">
      <Message name_header="Cadastro Cliente">
      <Columns definition="centered">
         <Column definition="half">
            <Field input_definition="info" icon_definition={"right"} icon_name="fas fa-user" label="Nome" control_definition="icons-right" type="text" />
            <Field input_definition="info" icon_definition={"right"} icon_name="fas fa-envelope" label="Email" control_definition="icons-right" type="text" />
            <Field input_definition="info" icon_definition={"right"} icon_name="fas fa-phone" label="Telefone" control_definition="icons-right" type="text" />
            <Field input_definition="info" icon_definition={"right"} icon_name="fas fa-id-card" label="RG" control_definition="icons-right" type="text" />
            <br></br>
            <ButtonList>
               <Button definition="info">Cadastrar Cliente</Button>
               <Button definition="danger light">
               <Icon definition ="danger" icon_name="fas fa-window-close">Sair</Icon>
               </Button>
            </ButtonList>
         </Column>

      </Columns>
      </Message>

   </div>   
}

ReactDOM.render(
<ContainerCadCliente></ContainerCadCliente>
    ,


    document.getElementById("root"))

  

    

