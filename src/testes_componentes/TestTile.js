import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import Tiles from './biblioteca/Tiles';
import { renderToString } from 'react-dom/server';
import Notification from './biblioteca/Notification';


var y = 0;

ReactDOM.render(
  <Tiles definition="tile ancestor">
  <Tiles definition="tile vertical 8">
    <Tiles definition="tile">
      <Tiles definition="tile parent vertical">
        <Notification definition="tile child primary" title="Vertical..." subtitle="Top tile"/>
        <Notification definition="tile child warning" title="...tiles" subtitle="Bottom tile"/>
      </Tiles>
      <Tiles definition="tile parent">
        <Notification definition="tile child info" title="Middle tile" subtitle="With an image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/640x480.png"/>
          </figure>
        </Notification>
      </Tiles>
    </Tiles>
    <Tiles definition="tile parent">
      <Notification definition="tile child danger" title="Wide tile" subtitle="ALigned with the right tile">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
      </Notification>
    </Tiles>
  </Tiles>
  <Tiles definition="parent">
    <Notification definition="tile child success" title="Tall tile" subtitle="With even more content">
     
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.

Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.

Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.
     
    </Notification>
  </Tiles>
</Tiles>
  , document.getElementById("root"))


