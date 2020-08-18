import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../../src/components/Footer';

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


test('footer normal',()=>{
    const component = renderer.create(
        <Footer> 
            <div class="content has-text-centered">
            <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
            </p>
            </div>
        </Footer>
  ).toJSON();
    expect(component).toMatchSnapshot();
});
