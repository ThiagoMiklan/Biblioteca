import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import Card from './biblioteca/Card';
import Column from './biblioteca/Column';
import Columns from './biblioteca/Columns';

ReactDOM.render(
  <Columns>
    <Column definition="one-quarter">
      <Card  definition="background-light" title="Teste Card" title_definition="centered background-danger" image_definition="4by3"
            
            src="https://bulma.io/images/placeholders/1280x960.png"> 
            <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">John Smith</p>
            <p class="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br/>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </Card>
   </Column>

  </Columns>

  ,

  document.getElementById("root"))


