import React from 'react';
import ReactDOM from 'react-dom';
import Tag from './biblioteca/elements/Tag';
import TagList from './biblioteca/elements/TagList';
import Control from './biblioteca/elements/Control';
 

var tags = [
  {value:'One', definition:'primary'},
  {value:'Two', definition:'success'},
  {value:"Three",definition:'info'},
  {value:"Four",definition:'link'},
  {value:"Five",definition:'warning'},
  {value:"Six", definition:'danger'}
];
var tags_addons =[
  {value:'Package'},
  {value:'Bulma', definition:'primary'},
]


ReactDOM.render(
          <>
            <TagList itens={tags}></TagList>
            <TagList itens={tags_addons}></TagList>
         </>
         ,document.getElementById('root'));

