import React from 'react';
import renderer from 'react-test-renderer';
import Control from '../../src/components/Control';
import Columns from '../../src/components/Columns';
import Column from '../../src/components/Column';

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


test('control normal',()=>{
    const component = renderer.create(
         <div className="container is-fluid">
          <Columns>
          <Column definition="is-half is-centered">
          <div class="field">
            <label class="label">Name</label>
            <Control>
              <input class="input" type="text" placeholder="Text input"/>
          </Control>
          </div>

          <div class="field">
            <label class="label">Subject</label>
            <Control>
              <div class="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </Control>
          </div>

          <div class="field">
            <Control> 
              <label class="radio">
              <input type="radio" name="question"/>
                Yes
              </label>
              <label class="radio">
              <input type="radio" name="question"/>
                 No
              </label>
            </Control>
          </div>
          </Column>
          </Columns>
         </div>     
  ).toJSON();
    expect(component).toMatchSnapshot();
});
