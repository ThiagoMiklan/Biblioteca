import React from 'react';
import ReactDOM from 'react-dom';
import File from '../biblioteca/File';
import renderer from 'react-test-renderer';

var onChange = (e)=>{
    alert("Escolheu o arquivo!")
}

test('test files',()=>{
    const component = renderer
    .create(<div className="container is-fluid">
    <File onChange={onChange} filename="Screenshot 2020/01/01"
      label="Choose a File"
      icon_name="fas fa-upload" />
      <br></br>
    <File
      definition="has-name"
      filename="Screenshot 2020/01/01"
      label="Choose File"
      icon_name="fas fa-upload" />
    <br></br>
    <File
      definition="has-name right"
      filename="Screenshot 2020/01/01"
      label="Choose File"
      icon_name="fas fa-upload" />
    <br></br>
    <File
      definition="has-name fullwidth"
      filename="Screenshot 2020/01/01"
      label="Choose File"
      icon_name="fas fa-upload" />
    <br></br>
    <File 
      definition="boxed"
      filename="Screenshot 2020/01/01"
      label="Choose a File"
      icon_name="fas fa-upload" />
    <br></br>
      <File 
      definition="boxed has-name"
      filename="Screenshot 2020/01/01"
      label="Choose a File"
      icon_name="fas fa-upload" />
      <br></br>
      <File 
      definition="primary"
      filename="Screenshot 2020/01/01"
      label="Choose a File"
      icon_name="fas fa-upload" />
      <br></br>
      <File
      definition="has-name info"
      filename="Screenshot 2020/01/01"
      label="Choose File"
      icon_name="fas fa-upload" />  
      <br></br>
      <File 
      definition="boxed warning"
      filename="Screenshot 2020/01/01"
      label="Choose a File"
      icon_name="fas fa-upload" />
      <br></br>
      <File 
      definition="boxed has-name danger"
      filename="Screenshot 2020/01/01"
      label="Choose a File"
      icon_definition="info"
      icon_name="fas fa-upload" />
      <br></br>
  </div>)
        .toJSON();
 
 
    expect(component).toMatchSnapshot();
})