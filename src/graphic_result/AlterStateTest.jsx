import React from 'react';
import Button from '../biblioteca/elements/Button';

class AlterStateTeste extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            clickCount : 0,
            definition: "button danger",
            value: "testando"
        };

        this.onClick =  this.onClick.bind(this);
      }

      onClick(){

    
        if(this.state.clickCount == 0 ){
          this.setState({value:"1",clickCount:this.state.clickCount+1});
        }else if(this.state.clickCount == 1){
          this.setState({value:"2",clickCount:this.state.clickCount+1});
        }else if(this.state.clickCount == 2){
          this.setState({value:"3",clickCount: this.state.clickCount+1});
        }
      
      
       ;
      }
      

    
    render(){
        return (<div>
            <button onClick={this.onClick}>Troca cor filho</button>
            <Button definition={this.state.definition} value={this.state.value}/>
        </div>);
    }

}

/*
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
 
import Button from './hooks/ButtonHook';

var clickCount = 0;

const Helper = (props)=>{
    const[definition,setDefinition] =  useState("button is-primary");
    
    var onClickFunc = ()=>{
       
        if(clickCount == 0){
            setDefinition("button is-danger");
        }else if(clickCount == 1){
            setDefinition("button is-warning");
        }else if(clickCount == 2){
            setDefinition("button is-info");
        }else if(clickCount == 3){
            setDefinition("button is-info");
        }
        
        clickCount =  clickCount + 1;
    };

    return <Button definition={definition} value="testando hooks denovo" onClick={onClickFunc}/>
}



ReactDOM.render( 
   <Helper/>
 ,
document.getElementById('root'));
*/







export default AlterStateTeste;
