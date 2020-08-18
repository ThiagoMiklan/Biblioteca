import React from 'react';
import renderer from 'react-test-renderer';
import Image from '../../src/components/Image';

const tags = [
  {value:'One', definition:'is-primary'},
  {value:'Two', definition:'is-success'},
  {value:"Three",definition:'is-info'},
  {value:"Four",definition:'is-link'},
  {value:"Five",definition:'is-warning'},
  {value:"Six", definition:'vdanger'}
];
const tags_addons =[
  {value:'Package'},
  {value:'Bulma', definition:'is-primary'},
]


test('images normal',()=>{
    const component = renderer.create(
        <>
        <Image src="https://bulma.io/images/placeholders/128x128.png" definition="is-16x16"> </Image>
        <Image src="https://bulma.io/images/placeholders/128x128.png" definition="is-24x24"> </Image>
        <Image src="https://bulma.io/images/placeholders/128x128.png" definition="is-32x32"> </Image>
        <Image src="https://bulma.io/images/placeholders/128x128.png" definition="is-48x48"> </Image>
        <Image src="https://bulma.io/images/placeholders/128x128.png" definition="is-64x64"> </Image>
        <Image src="https://bulma.io/images/placeholders/128x128.png" definition="is-96x96"> </Image>
        <Image src="https://bulma.io/images/placeholders/128x128.png" definition="is-128x128"> </Image>  
        </>
  ).toJSON();
    expect(component).toMatchSnapshot();
});


test('image rounded',()=>{
    const component = renderer.create(
        <>
       <Image src="https://bulma.io/images/placeholders/128x128.png" definition="is-128x128" image_definition="is-rounded"> </Image> 
        </>
  ).toJSON();
    expect(component).toMatchSnapshot();
});

test('image event',()=>{
    const component = renderer.create(
       <Image src="https://bulma.io/images/placeholders/128x128.png"
              definition="is-128x128" image_definition="is-rounded" 
              onClick={()=> alert("Clicked")}/> 
  ).toJSON();
    expect(component).toMatchSnapshot();
});



