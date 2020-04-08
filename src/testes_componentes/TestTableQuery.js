import React, { useState , useEffect} from 'react';
import ReactDOM from 'react-dom';
import TableQuery from './biblioteca/TableQuery';
import './css/bulma.css';

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

ReactDOM.render( <TableQueryHook/>,document.getElementById('root'))