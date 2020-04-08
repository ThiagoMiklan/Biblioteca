import React from 'react';
import ReactDOM from 'react-dom';
import BreadCrumb from './biblioteca/BreadCrumb.jsx';
import Icon from './biblioteca/Icon';
import './css/bulma.css';


// Array comum sem eventos
var itens = [
    { value: "Bulma" },
    { value: "Documentation" },
    { value: "Componentes" },
    { value: "BreadCrumb" }
];

// Array com componente como value
var itens_with_icons = [
    { value: <Icon icon_name="fas fa-home">Bulma</Icon> },
    { value: <Icon icon_name="fas fa-book">Documentation</Icon> },
    { value: <Icon icon_name="fas fa-puzzle-piece">Componentes</Icon> },
    { value: <Icon icon_name="fas fa-thumbs-up">BreadCrumb</Icon> }];

// Array com href em cada item do BreadCrumb
var itens_with_href = [{ value: "Bulma", href: "https://ufsc.br" },
{ value: "Documentation", href: "https://ufsc.br" },
{ value: "Componentes", href: "https://ufsc.br" }
    , { value: "BreadCrumb", href: "https://ufsc.br" }];


// Evento ao clicar
var onClickItem = () => {
    alert("Clicou no item do BreadCrumb");
}

// Array com a propriedade onClick
// Nesse caso o usuário informa através do objeto o que irá acontecer
// quando for clicado no item,sendo essa uma solução provida pelo 
//  componente BreadCrumb

var itens_with_onClick = [
    { value: "Bulma", onClick: onClickItem },
    { value: "Documentation", onClick: onClickItem },
    { value: "Componentes", onClick: onClickItem },
    { value: "BreadCrumb", onClick: onClickItem }
];

// Array com um componente que contém seu próprio onClick
// Neste caso, o usuário informa o evento dentro do componente
// Icon(fornecido pela presente biblioteca), e esse evento será disparado
// normalmente, porém ao contrário de itens_with_onClick, será o componente
// Icon o responsável pelo evento e não BreadCrumb
var itens_with_onClick_on_component = [
    { value: <Icon icon_name="fas fa-home">Bulma</Icon> },
    { value: <Icon icon_name="fas fa-book">Documentation</Icon> },
    { value: <Icon icon_name="fas fa-puzzle-piece">Componentes</Icon> },
    { value: <Icon icon_name="fas fa-thumbs-up">BreadCrumb</Icon> }];

// Caso deseje-se informar uma key para cada item
// adicionar a propriedade id em cada objeto
// Caso não informe a propriedade key unica para cada valor,
// provalvemente uma warning será disparada pelo browser
var itens_with_id = [
    { value: "Bulma", key: "bulma_item" },
    { value: "Documentation", key: "documentation_item" },
    { value: "Componentes", key: "components_item" },
    { value: "BreadCrumb", key: "breadcrumb_item" }
];

// Junção de algumas características
// Com os itens abaixo é possível
// Informar um ícone no BreadCrumb
// Informar um evento para quando o usuário clicar no ícone (props no componente Icon)
// Informar um evento no link, através do onClick suportado pelo BreadCrumb
// Informar uma key para cada item, precavendo-se de warnings em browsers
// Informar um redirecionamento para o link quando for clicado, através de href

var itens_merge = [
    { value: <Icon icon_name="fas fa-home" onClick={onClickItem}>Bulma</Icon>, key: "bulma_item", onClick: onClickItem, href: "https://ufsc.br" },
    { value: <Icon icon_name="fas fa-book" onClick={onClickItem}>Documentation</Icon>, key: "documentation_item", onClick: onClickItem, href: "https://ufsc.br" },
    { value: <Icon icon_name="fas fa-puzzle-piece" onClick={onClickItem}>Componentes</Icon>, key: "components_item", onClick: onClickItem, href: "https://ufsc.br" },
    { value: <Icon icon_name="fas fa-thumbs-up" onClick={onClickItem}>BreadCrumb</Icon>, key: "breadcrumb_item", onClick: onClickItem, href: "https://ufsc.br" }
];

ReactDOM.render(
    <div className="container is-fluid">
        <BreadCrumb itens={itens} />
        <BreadCrumb itens={itens} />
        <BreadCrumb definition="centered" itens={itens} />,
        <BreadCrumb definition="right" itens={itens} />
        <BreadCrumb itens={itens_with_icons} />
        <BreadCrumb definition="arrow" itens={itens} />
        <BreadCrumb definition="bullet" itens={itens} />
        <BreadCrumb definition="dot" itens={itens} />
        <BreadCrumb definition="succeeds" itens={itens} />
        <BreadCrumb definition="small" itens={itens} />
        <BreadCrumb definition="medium" itens={itens} />
        <BreadCrumb definition="large" itens={itens} />
        <h1>Usando Href Abaixo</h1>
        <BreadCrumb itens={itens_with_href} />
        <h1>Usando onClick Abaixo</h1>
        <BreadCrumb itens={itens_with_onClick} />
        <BreadCrumb itens={itens_with_id} />
        <br></br>
        <BreadCrumb itens={itens_merge} />
    </div>
    , document.getElementById('root')
);

