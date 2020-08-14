import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import Tiles from './components/Tiles';
import Notification from './components/Notification';


ReactDOM.render(
  <Tiles definition="tile is-ancestor">
  <Tiles definition="tile is-vertical is-8">
    <Tiles definition="tile">
      <Tiles definition="tile is-parent is-vertical">
        <Notification definition="tile is-child is-primary" title="Vertical..." subtitle="Top tile"/>
        <Notification definition="tile is-child is-warning" title="...tiles" subtitle="Bottom tile"/>
      </Tiles>
      <Tiles definition="tile is-parent">
        <Notification definition="tile is-child is-info" title="Middle tile" subtitle="With an image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/640x480.png"/>
          </figure>
        </Notification>
      </Tiles>
    </Tiles>
    <Tiles definition="tile is-parent">
      <Notification definition="tile is-child is-danger" title="Wide tile" subtitle="ALigned with the right tile">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
      </Notification>
    </Tiles>
  </Tiles>
  <Tiles definition="is-parent">
    <Notification definition="tile is-child is-success" title="Tall tile" subtitle="With even more content">
     
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.

Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.

Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.
     
    </Notification>
  </Tiles>
</Tiles>
  , document.getElementById("root"))


