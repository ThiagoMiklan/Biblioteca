import React from 'react';
import ReactDOM from 'react-dom';
import Button from './biblioteca/elements/Button.jsx';
import NavigationBar from './biblioteca/components/NavigationBar.jsx';
import './css/bulma.css';

var object_item = { "value": "More",
                    "definition": "link",
                    "localization_menu": "start"
                   };

var itens = [{"value": "teste 1" },
             {"value": "teste 2"},
             {"value": "teste 2"}
            ];           

ReactDOM.render(
    <NavigationBar src_brand ="https://versions.bulma.io/0.7.2/images/bulma-logo.png" 
                    link_brand ="https://bulma.io"
                    width_brand = {112}
                    height_brand ={28}
                    alt_brand ="Bulma: a modern CSS framework based on Flexbox"
                    itens ={itens}

                    
                    />,
   document.getElementById('root')
  );

 