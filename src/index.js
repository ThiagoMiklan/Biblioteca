import React from 'react';
import ReactDOM from 'react-dom';
import Table from './biblioteca/Table.jsx';
import Tag from './biblioteca/Tag.jsx';
import ProgressBar from './biblioteca/ProgressBar.jsx';
import Button from './biblioteca/Button.jsx';
import Content from './biblioteca/Content.jsx';
import Box from './biblioteca/Box.jsx';
import Image from './biblioteca/Image.jsx';
import Notification from './biblioteca/Notification.jsx';
import './css/bulma.css';


/*

  
=================================================
TESTE TABLE

var elements_header = [];
elements_header.push({"value":"Pos","abbr_text":"Position"});
elements_header.push({"value":"Pld","abbr_text":"PLayed"});
elements_header.push({"value":"W","abbr_text":"Won"});
elements_header.push({"value":"D","abbr_text":"Drawn"});
elements_header.push({"value":"L","abbr_text":"Lost"});
elements_header.push({"value":"Gl","abbr_text":"Goals for"});
elements_header.push({"value":"GA","abbr_text":"Gaols Against"});
elements_header.push({"value":"GD","abbr_text":"Goal diferrence"});
elements_header.push({"value":"PTS","abbr_text":"Points"});
elements_header.push("Qualification or Relegation");

var elements_footer = [];
elements_footer.push("Somália");
elements_footer.push("Panamá");
elements_footer.push("Nova Zelândia");
elements_footer.push("Austrália");

var elements_body1= [];
elements_body1.push(1);
elements_body1.push({"value":"Leicester", "have_link":true});
elements_body1.push(38);
elements_body1.push(23);
elements_body1.push(12);
elements_body1.push(3);
elements_body1.push(6);
elements_body1.push(36);
elements_body1.push(32);
elements_body1.push("Qualification for the Champions League Group Stage")


var elements_body2 = [];
elements_body2.push(1);
elements_body2.push({"value":"Leicester", "have_link":true});
elements_body2.push(38);
elements_body2.push(23);
elements_body2.push(12);
elements_body2.push(3);
elements_body2.push(6);
elements_body2.push(36);
elements_body2.push(32);
elements_body2.push("Qualification for the Champions League Group Stage")

var elements_body = [];

elements_body[0] = elements_body1;
elements_body[1] = elements_body2;

ReactDOM.render(
    <Table rows_header={elements_header} 
           rows_footer={elements_footer} 
           rows_body={elements_body}/>,

    document.getElementById('root')
  );

*/

/*
==================================================  
TESTE PROGRESS BAR
ReactDOM.render(
        <div class="container is-fluid">
          <ProgressBar definition ="progress" value ="15" max ="100"/>
          <ProgressBar definition ="progress primary" value ="15" max ="100"/>
          <ProgressBar definition ="progress link" value ="30" max ="100"/>
          <ProgressBar definition ="progress info" value ="45" max ="100"/>
          <ProgressBar definition ="progress sucess" value ="60" max ="100"/>
          <ProgressBar definition ="progress warning" value ="75" max ="100"/>
          <ProgressBar definition ="progress danger" value ="90" max ="100"/>
          <ProgressBar definition ="progress small" value ="15" max="100"/>
          <ProgressBar definition ="progress medium" value ="15" max="100"/>
          <ProgressBar definition ="progress large" value ="15" max="100"/>
        </div>
       
    ,
       document.getElementById('root')
     );

  //ReactDOM.render(<Button />,document.getElementById('root'));*/

  /*
  ==================================================  
  TESTE TAG
  var tags = [];
  tags[0] = {"definition": "tag primary rounded large light", value:"tag1"} ;
  tags[1] = {"definition": "tag primary", value:"tag2"} ;
  ReactDOM.render(<Tag tag={tags}/>,document.getElementById('root'));
  */

  /*
  ==================================================  
  TESTE STATE BUTTON
  var count = 0 ;
  function onClick(){
    if(count == 0 ){
      this.setState({definition:"button primary"});
    }else if(count == 1){
      this.setState({definition:"button warning"});
    }else if(count == 2){
      this.setState({definition:"button info"});
    }
    count++;
    //alert("teste");
  }
   ReactDOM.render(
    <Button button_name ="Teste" definition="button danger" onClick ={onClick}/>,document.getElementById("root")
  )*/

/*

==================================================  
TESTE CONTENT
var value_content =  [];
var value_content_when_list = [
{
  "value" : ["coffeee","tea","milk"],
  "definition": "UR"
},
{
  "value" : ["milk","tea","coffee"],
  "definition": "UA"
}
] ;
 
var value_content_when_single = {
  "value" : ["coffeee","tea","milk"],
  "definition": "UR"
};

ReactDOM.render(<Content value ={value_content_when_list}/>,document.getElementById("root"))*/

/*
 ==================================================  
  TESTE IMAGE 
 ReactDOM.render(
  <div>
<Image src ="https://versions.bulma.io/0.7.2/images/placeholders/16x16.png" definition ="16x"/>
<Image src ="https://versions.bulma.io/0.7.2/images/placeholders/128x128.png" definition ="24x"/>
<Image src ="https://versions.bulma.io/0.7.2/images/placeholders/128x128.png" definition ="32x"/>
<Image src ="https://versions.bulma.io/0.7.2/images/placeholders/128x128.png" definition ="48x"/>
<Image src ="https://versions.bulma.io/0.7.2/images/placeholders/128x128.png" definition ="64x"/>
<Image src ="https://versions.bulma.io/0.7.2/images/placeholders/128x128.png" definition ="96x"/>
<Image src ="https://versions.bulma.io/0.7.2/images/placeholders/128x128.png" definition ="128x"/>
</div>

  ,document.getElementById("root")) */

  ReactDOM.render(<Notification definition ="primary" delete ={false} value ="Primar lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
  consectetur adipiscing elit"
  />,document.getElementById("root"))