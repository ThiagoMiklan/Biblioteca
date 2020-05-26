import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import TableQuery from './biblioteca/TableQuery';
import 'bulma/css/bulma.css';

/*
async function fetchJson(url){
    var respJson = await window.fetch(url).then(res => res.json());
    return respJson;
}

const TableQueryHook = ()=>{
    var initial = {itens:[]};
    
    const[state,setState] = useState(initial);

    useEffect(()=>{
        fetchJson("http://localhost:3000/allClients").then(res=> setState({itens:res}));
    },[]);

    return <TableQuery definition="fullwidth" itens={state.itens} header={true}/>
}

ReactDOM.render( <TableQueryHook/>,document.getElementById('root'))*/

var itens = [
    { nome: "Jackson", email: "jackson@arb.com.br", telefone: "123456" },
    { nome: "Marty", email: "marty@arb.com.br", telefone: "123456" },
    { nome: "Walter", email: "walter@arb.com.br", telefone: "123456" },
    { nome: "Antony", email: "antony@arb.com.br", telefone: "123456" }
]

ReactDOM.render(<div className="container is-fluid">
    <TableQuery definition="is-fullwidth is-bordered" itens={itens} header={true} />
    <TableQuery definition="is-fullwidth is-striped" itens={itens} header={true} />
    <TableQuery definition="is-fullwidth is-narrow" itens={itens} header={true} />
    <TableQuery definition="is-fullwidth is-hoverable" itens={itens} header={true} />


    <TableQuery definition="is-fullwidth" itens={itens} header={true} footer={true} />
    <TableQuery definition="is-fullwidth" itens={itens} footer={true} />
    <TableQuery definition="is-bordered is-striped is-narrow is-hoverable is-fullwidth" itens={itens} />
    <br></br>
</div>
    , document.getElementById('root')
);