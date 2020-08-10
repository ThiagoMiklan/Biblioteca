import React from 'react';
import ReactDOM from 'react-dom';
import Tag from './components/Tag';
import TagList from './components/TagList';
import Control from './components/Control';
import Columns from './components/Columns';
import Column from './components/Column';

import 'bulma/css/bulma.css';


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

ReactDOM.render(
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
            <Control class="control">
              <div class="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </Control>
          </div>

          <div class="field">
            <Control class="control">
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
         ,document.getElementById('root'));

