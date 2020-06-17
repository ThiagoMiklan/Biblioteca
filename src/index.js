import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'
import MediaObject from './components/MediaObject';
import Icon from './components/Icon';
import Level from './components/Level';
import Columns from './components/Columns';
import Column from './components/Column'

const itens = [
  {value:<Icon definition="is-small has-text-info" icon_name="fas fa-reply"></Icon>, left: true },
  {value:<Icon definition="is-small has-text-info" icon_name="fas fa-retweet"></Icon>, left: true},
  {value:<Icon definition="is-small has-text-info"  icon_name="fas fa-heart"></Icon>,left: true}
]


ReactDOM.render(
  <Columns definition="is-multiline">
    <Column definition="is-half is-spaced">
        <MediaObject src="https://bulma.io/images/placeholders/128x128.png" image_definition="is-64x64"> 
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
          <Level definition="is-mobile" itens={itens}/>
      </MediaObject> 
    </Column>
    
  </Columns>
,
  document.getElementById("root"))
