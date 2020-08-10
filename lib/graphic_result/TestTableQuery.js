"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _TableQuery = _interopRequireDefault(require("./components/TableQuery"));

require("bulma/css/bulma.css");

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
var itens = [{
  nome: "Jackson",
  email: "jackson@arb.com.br",
  telefone: "123456"
}, {
  nome: "Marty",
  email: "marty@arb.com.br",
  telefone: "123456"
}, {
  nome: "Walter",
  email: "walter@arb.com.br",
  telefone: "123456"
}, {
  nome: "Antony",
  email: "antony@arb.com.br",
  telefone: "123456"
}];

_reactDom.default.render( /*#__PURE__*/_react.default.createElement("div", {
  className: "container is-fluid"
}, /*#__PURE__*/_react.default.createElement(_TableQuery.default, {
  definition: "is-fullwidth is-bordered",
  itens: itens,
  header: true
}), /*#__PURE__*/_react.default.createElement(_TableQuery.default, {
  definition: "is-fullwidth is-striped",
  itens: itens,
  header: true
}), /*#__PURE__*/_react.default.createElement(_TableQuery.default, {
  definition: "is-fullwidth is-narrow",
  itens: itens,
  header: true
}), /*#__PURE__*/_react.default.createElement(_TableQuery.default, {
  definition: "is-fullwidth is-hoverable",
  itens: itens,
  header: true
}), /*#__PURE__*/_react.default.createElement(_TableQuery.default, {
  definition: "is-fullwidth",
  itens: itens,
  header: true,
  footer: true
}), /*#__PURE__*/_react.default.createElement(_TableQuery.default, {
  definition: "is-fullwidth",
  itens: itens,
  footer: true
}), /*#__PURE__*/_react.default.createElement(_TableQuery.default, {
  definition: "is-bordered is-striped is-narrow is-hoverable is-fullwidth",
  itens: itens
}), /*#__PURE__*/_react.default.createElement("br", null)), document.getElementById('root'));