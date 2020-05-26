import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import Card from './biblioteca/Card';
import Column from './biblioteca/Column';
import Columns from './biblioteca/Columns';
import Content from './biblioteca/Content';

var itens_footer = [
  { value: "Save" }, { value: "Edit" }, { value: "Delete" }
]

var itens_footer_2 = [
  {value: <span>
          View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
          </span>},
  {value: <span>
          Share on <a href="#">Facebook</a>
          </span>}
]

ReactDOM.render(
  <Columns definition="multiline">
    <Column definition="one-quarter">
      <Card definition="background-light"
            image_definition="4by3"
            src="https://bulma.io/images/placeholders/1280x960.png">

        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
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
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </Card>
    </Column>

    <Column definition="one-quarter">
      <Card icon_name="fas fa-angle-down" title="Component" itens_footer={itens_footer}>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
           <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </Card>
    </Column>

    <Column definition="one-quarter">
      <Card itens_footer={itens_footer_2}>
        <p class="title">
          “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
        </p>
        <p class="subtitle">
          Jeff Atwood
        </p>
      </Card>
    </Column>

  </Columns>
,

  document.getElementById("root"))


