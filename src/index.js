import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './css/bulma.css';
import './css/all.js';
import Icon from './biblioteca/elements/Icon';
import ButtonList from './biblioteca/elements/ButtonList';
import Button from './biblioteca/elements/Button';
ReactDOM.render(
  <ButtonList>
    <Button>
    <Icon icon_definition="fas fa-bold"></Icon>
    </Button>
    
    <Button>
    <Icon icon_definition="fas fa-italic"></Icon>
    </Button>

    <Button>
    <Icon icon_definition="fas fa-underline"></Icon>
    </Button>

    <Button>
    <Icon icon_definition="fab fa-github">
      Github
    </Icon>
    </Button>
    
    <Button definition="primary">
    <Icon icon_definition="fab fa-twitter">
      Twitter
    </Icon>
    </Button>
    
    <Button definition="success">
    <Icon icon_definition="fas fa-check">
      
    </Icon>
    </Button>

    <Button definition="danger">
    <Icon icon_definition="fas fa-times">
      Delete
    </Icon>
    </Button>

  </ButtonList>
  
    ,
  document.getElementById("root"))