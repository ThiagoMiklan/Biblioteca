/*
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'
import MediaObject from './components/MediaObject';
import Icon from './components/Icon';
import Level from './components/Level';
import Columns from './components/Columns';
import Column from './components/Column'

const itens = [
  {value:<Icon definition="is-small has-text-info" icon_name="fas fa-reply"></Icon>, left: true, onClick:()=>{alert("Clicked")}, key: 1},
  {value:<Icon definition="is-small has-text-info" icon_name="fas fa-retweet"></Icon>, left: true,key: 2},
  {value:<Icon definition="is-small has-text-info"  icon_name="fas fa-heart"></Icon>,left: true, key: 3}
]


ReactDOM.render(
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://bulma.io/images/placeholders/128x128.png"/>
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
        <br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
      </p>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-reply"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-retweet"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-heart"></i></span>
        </a>
      </div>
    </nav>
  </div>
  <div class="media-right">
    <button class="delete"></button>
  </div>
</article>
,
  document.getElementById("root"))

*/

/*
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'
import MediaObject from './components/MediaObject';
import Icon from './components/Icon';
import Level from './components/Level';
import Columns from './components/Columns';
import Column from './components/Column'

const itens = [
  {value:<Icon definition="is-small has-text-info" icon_name="fas fa-reply"></Icon>, left: true, onClick:()=>{alert("Clicked")}, key: 1},
  {value:<Icon definition="is-small has-text-info" icon_name="fas fa-retweet"></Icon>, left: true,key: 2},
  {value:<Icon definition="is-small has-text-info"  icon_name="fas fa-heart"></Icon>,left: true, key: 3}
]


ReactDOM.render(
  <Columns definition="is-multiline">
    <Column definition="is-half is-spaced">
        <MediaObject itens={itens} src="https://bulma.io/images/placeholders/128x128.png" image_definition="is-64x64" level_definition="is-mobile"> 
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
      </MediaObject> 
    </Column>
    
  </Columns>
,
  document.getElementById("root"))

*/
"use strict";