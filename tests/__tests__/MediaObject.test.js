import React from 'react';
import renderer from 'react-test-renderer';
import MediaObject from '../../src/components/MediaObject';
import Icon from '../../src/components/Icon';


const itens = [
  {value:<Icon definition="is-small has-text-info" icon_name="fas fa-reply"></Icon>, left: true, onClick:()=>{alert("Clicked")}, key: 1},
  {value:<Icon definition="is-small has-text-info" icon_name="fas fa-retweet"></Icon>, left: true,key: 2},
  {value:<Icon definition="is-small has-text-info"  icon_name="fas fa-heart"></Icon>,left: true, key: 3}
]


test('images normal',()=>{
    const component = renderer.create(
       <MediaObject itens={itens} src="https://bulma.io/images/placeholders/128x128.png" image_definition="is-64x64" level_definition="is-mobile"> 
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa 
            sem. Etiam finibus odio quis feugiat facilisis.
          </p>
      </MediaObject> 
  ).toJSON();
    expect(component).toMatchSnapshot();
});

