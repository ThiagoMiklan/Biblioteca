import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'
import Level from './components/Level';
import Button from './components/Button';
import Input from './components/Input';
import Control from './components/Control';
import Field from './components/Field';

const itens = [
  {value: <p class="subtitle is-5"><strong>123</strong> posts</p>,left: true},
  {value:  <Field definition= "has-addons">
              <Control><Input type="text" placeholder="Find a post"/></Control>
              <Control><Button> Search</Button></Control>
           </Field>, left:true},
           
  {value: <div class="field has-addons">
        <p class="control">
          <input class="input" type="text" placeholder="Find a post"/>
        </p>
        <p class="control">
          <button class="button">
            Search
          </button>
        </p>
      </div>},
  {value:<strong>All</strong>,right:true},
  {value:<a>Published</a>,right:true},
  {value:<a>Drafts</a>,right:true},
  {value:<a>Deleted</a>,right:true},
  {value:<a class="button is-success">New</a>,right:true}
]

const itens_center = [
  {value: 
      <div>
      <p class="heading">Tweets</p>
      <p class="title">3,456</p>
    </div>},
  {value:<div>
      <p class="heading">Following</p>
      <p class="title">123</p>
    </div>},
    {value:<div>
      <p class="heading">Followers</p>
      <p class="title">456K</p>
    </div>},
    {value:<div>
      <p class="heading">Likes</p>
      <p class="title">789</p>
    </div>}
]

const itens_center_2 = [
  {value: 
      <p class="level-item has-text-centered">
    <a class="link is-info">Home</a>
  </p>},
  {value:<a class="link is-info">Menu</a>, definition:"has-text-centered"},
  {value:<img src="https://bulma.io/images/bulma-type.png" alt="" style={{height:"30px"}}/>, definition: "has-text-centered"},
  {value:<a class="link is-info">Reservations</a>, definition:"has-text-centered"},
  {value:<p class="level-item has-text-centered">
    <a class="link is-info">Contact</a>
  </p>}
]

ReactDOM.render(
    <div className="container is-fluid">
        <Level itens={itens}> </Level>
        <Level itens={itens_center} center={true}/>
        <Level itens={itens_center_2} center={true}/>
     </div>
,
  document.getElementById("root"))
