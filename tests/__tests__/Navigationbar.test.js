import React from 'react';
import renderer from 'react-test-renderer';
import NavigationBar from '../../src/components/NavigationBar';
import Button from '../../src/components/Button';


const itens_start = [
  { "value": "Home" },
  { "value": "Documentation" },
  [{ value: "More",definition:"is-active"}, 
  { value: "About" , definition:"is-active", onClick : ()=>{alert("Clicked") }},
  {value: "Jobs"},
  {value:"Contact"},
  {value:"Report a issue"}
  ]
];

const itens_end = [{ value: <Button definition="is-info">Sign up</Button> },
{ value: <Button definition="is-primary">Sign out</Button> }
];


test('navigationbar normal',()=>{
    const component = renderer.create(
       <NavigationBar src="https://versions.bulma.io/0.7.2/images/bulma-logo.png"
        link_brand="https://bulma.io"
        width_brand={112}
        height_brand={28}
        alt_brand="Bulma: a modern CSS framework based on Flexbox"
        itens_start={itens_start}
        itens_end={itens_end} 
      />
  ).toJSON();
    expect(component).toMatchSnapshot();
});

test('navigationbar primary',()=>{
    const component = renderer.create(
      <NavigationBar 
      definition="is-primary"
      src="https://versions.bulma.io/0.7.2/images/bulma-logo.png"
      link_brand="https://bulma.io"
      width_brand={112}
      height_brand={28}
      alt_brand="Bulma: a modern CSS framework based on Flexbox"
      itens_start={itens_start}
      itens_end={itens_end}
    />
  ).toJSON();
    expect(component).toMatchSnapshot();
});



