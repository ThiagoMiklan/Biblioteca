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







export default AlterStateTeste;
