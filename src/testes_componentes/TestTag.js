import React from 'react';
import ReactDOM from 'react-dom';
import Tag from './biblioteca/elements/Tag';
import Control from './biblioteca/elements/Control';
 

var tags = [];
tags[0] = {"definition": "tag primary rounded large light", value:"tag1"} ;
tags[1] = {"definition": "tag primary", value:"tag2"} ;

ReactDOM.render(
          <>
          <Tag>Tag label</Tag>
          <Tag definition="black">Tag label</Tag>
          <Tag definition="dark">Tag label</Tag>
          <Tag definition="light">Tag label</Tag>
          <Tag definition="white">Tag label</Tag>
          <Tag definition="primary">Tag label</Tag>
          <Tag definition="link">Tag label</Tag>
          <Tag definition="info">Tag label</Tag>
          <Tag definition="success">Tag label</Tag>
          <Tag definition="warning">Tag label</Tag>
          <Tag definition="danger">Tag label</Tag>
          <Control></Control>
          <Tag definition="primary light">Tag label</Tag>
          <Tag definition="link light">Tag label</Tag>
          <Tag definition="info light">Tag label</Tag>
          <Tag definition="success light">Tag label</Tag>
          <Tag definition="warning light">Tag label</Tag>
          <Tag definition="danger light">Tag label</Tag>
          <Control></Control>
          <Tag definition="link">Normal</Tag>
          <Tag definition="primary medium">Normal</Tag>
          <Tag definition="link large">Normal</Tag>
          <Control></Control>
          <Tag definition="primary rounded">Tag rounded</Tag>
          <Tag onClickDelete={()=>{alert("clicou")}}definition="primary rounded delete">Tag rounded</Tag>
          
         </>

          ,document.getElementById('root'));

