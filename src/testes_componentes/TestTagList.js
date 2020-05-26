import React from 'react';
import ReactDOM from 'react-dom';
import Tag from './biblioteca/Tag';
import TagList from './biblioteca/TagList';
import Control from './biblioteca/Control';
import 'bulma/css/bulma.css';


var tags = [
  {value:'One', definition:'is-primary'},
  {value:'Two', definition:'is-success'},
  {value:"Three",definition:'is-info'},
  {value:"Four",definition:'is-link'},
  {value:"Five",definition:'is-warning'},
  {value:"Six", definition:'vdanger'}
];
var tags_addons =[
  {value:'Package'},
  {value:'Bulma', definition:'is-primary'},
]

ReactDOM.render(
          <>
            <TagList itens={tags}></TagList>
            <TagList itens={tags_addons}></TagList>
         </>
         ,document.getElementById('root'));

