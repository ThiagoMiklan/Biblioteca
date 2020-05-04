import React from 'react';
import ReactDOM from 'react-dom';
import Button from './biblioteca/Button.jsx';
import NavigationBar from './biblioteca/NavigationBar.jsx';
import 'bulma/css/bulma.css';

var object_item = {
    "value": "More",
    "definition": "link",
    "localization_menu": "start"
};

var itens_start = [ 
                    { "value": "teste 1" },
                    { "value": "teste 2" },
                    { "value": "teste 3" },
                  ];

var itens_start_2 = [   {"value":"teste 1"},
                        {"value" :"teste 2"},
                        [{"value":"teste 1"}, {"value":"teste 2"},{"value": "teste 3"}]
                    ];

var itens_start_3  = [
                        {"value":"teste 1"},
                        {"value":"teste 2"},
                        {"value":"teste 3"}
                    ];
var itens_start_4 = {"value" : "teste 1"}
var itens_start_5  = [];

var itens_start_6 = [   { "value": <Button value="testando" definition="primary button"/> },
                        { "value": <Button value="testando" definition="primary button"/> },
                        [ { "value": <Button value="testando" definition="primary button"/> }, { "value": <Button value="testando" definition="primary button"/> },{"value": "teste 3"}]
                    ];




var itens_end = [ { "value": <Button value="testando" definition="primary button"/> }];




ReactDOM.render(
    <div className="container is-fluid">
        <NavigationBar src_brand="https://versions.bulma.io/0.7.2/images/bulma-logo.png"
            link_brand="https://bulma.io"
            width_brand={112}
            height_brand={28}
            alt_brand="Bulma: a modern CSS framework based on Flexbox"
            itens_start={itens_start_3}
            itens_end={itens_start_3}
        />
    </div>
    ,
    document.getElementById('root')
);

 /*
WIKi
 import React from 'react';
import ReactDOM from 'react-dom';
import "bulma/css/bulma.css";
import Button from './biblioteca/Button.jsx';
import NavigationBar from './biblioteca/NavigationBar.jsx';



const itens_start = [
  { "value": "Home" },
  { "value": "Documentation" },
  [{ value: "More", definition: "active" },
  { value: "About", definition: "active", onClick: () => { alert("Clicked") } },
  { value: "Jobs" },
  { value: "Contact" },
  { value: "Report a issue" }
  ]
];

var itens_end = [{ value: <Button definition="info">Log in</Button> },
{ value: <Button definition="primary">Log out</Button> }
];


ReactDOM.render(
  <div className="container is-fluid">
    <NavigationBar 
      definition="dark"
      src_brand="https://versions.bulma.io/0.7.2/images/bulma-logo.png"
      link_brand="https://bulma.io"
      width_brand={112}
      height_brand={28}
      alt_brand="Bulma: a modern CSS framework based on Flexbox"
      itens_start={itens_start}
      itens_end={itens_end}
    />
  </div>
  ,
  document.getElementById('root')
);


 */