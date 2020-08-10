import 'bulma/css/bulma.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './biblioteca/Button';
import {Route,BrowserRouter as Router,useHistory} from 'react-router-dom'
import Title from './biblioteca/Title';

const History = (props)=>{
    let history =  useHistory();

    function onClickBackHome(){
        history.push("/");
    }

    function onClickBackButton(){
        history.push("/button");
    }

    return <>
                <Title definition={1}>Testing Router React</Title>
                <Button onClick={onClickBackHome}>Back to Home</Button>
                <Button onClick={onClickBackButton}>Back to Button</Button>
            </>
}

ReactDOM.render(<Router>
         
      <Route exact path="/">
        <Title definition={1}>Hello Router</Title>
      </Route>

      <Route path="/button">
          <Button>Testando</Button>
      </Route>

      <Route path="/back">
          <History/>
      </Route>
     
  </Router>
                ,document.getElementById('root'));