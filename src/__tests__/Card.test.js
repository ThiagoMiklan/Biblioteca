import React from 'react';
import Card from '../biblioteca/Card';
import Content from '../biblioteca/Content';
import renderer from 'react-test-renderer';


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

test('card 1 with media object',()=>{
    const cardWithMedia = renderer.create(
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
    ).toJSON();

    expect(cardWithMedia).toMatchSnapshot();
})

test('card with content',()=>{
    const cardWithContent = renderer.create(
        <Card icon_name="fas fa-angle-down" title="Component" itens_footer={itens_footer}>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
           <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </Card>
    ).toJSON();

    expect(cardWithContent).toMatchSnapshot();
})

test('card with title and subtitle',()=>{
    const cardWithTitle = renderer.create(
        <Card itens_footer={itens_footer_2}>
        <p class="title">
          “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
        </p>
        <p class="subtitle">
          Jeff Atwood
        </p>
      </Card>
    ).toJSON();

    expect(cardWithTitle).toMatchSnapshot();
})
