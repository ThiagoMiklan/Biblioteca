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
    <File filename="Screenshot 2020/01/01"
      label="Choose a File"
      icon_name="fas fa-upload"/>
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
      label="Primary File"
      icon_name="fas fa-upload" />
      <br></br>

      <File 
      definition="info has-name"
      filename="Screenshot 2020/01/01"
      label="Info File"
      icon_name="fas fa-upload" />
      <br></br>

      <File 
      definition="warning boxed"
      filename="Screenshot 2020/01/01"
      label="Choose a File"
      icon_name="fas fa-upload" />
      <br></br>

      <File 
      definition="danger has-name medium boxed"
      filename="Screenshot 2020/01/01"
      label="Choose a File"
      icon_name="fas fa-upload" />
      <br></br>

      <File 
      definition="small"
      filename="Screenshot 2020/01/01"
      label="Smalll File"
      icon_name="fas fa-upload" />
      <br></br>

      <File 
      filename="Screenshot 2020/01/01"
      label="Normal File"
      icon_name="fas fa-upload" />
      <br></br>

      <File 
      definition="medium"
      filename="Screenshot 2020/01/01"
      label="Medium File"
      icon_name="fas fa-upload" />
      <br></br>

      <File 
      definition="large"
      filename="Screenshot 2020/01/01"
      label="Large File"
      icon_name="fas fa-upload" />
      <br></br>

      <File 
      definition="small  has-name"
      filename="Screenshot 2020/01/01"
      label="Smalll File"
      icon_name="fas fa-upload" />
      <br></br>

      <File 
      definition="has-name"
      filename="Screenshot 2020/01/01"
      label="Normal File"
      icon_name="fas fa-upload" />
      <br></br>

      <File 
      definition="medium has-name"
      filename="Screenshot 2020/01/01"
      label="Medium File"
      icon_name="fas fa-upload" />
      <br></br>

      <File 
      definition="large has-name"
      filename="Screenshot 2020/01/01"
      label="Large File"
      icon_name="fas fa-upload" />
      <br></br>




      <File 
      definition="small  boxed"
      filename="Screenshot 2020/01/01"
      label="Smalll File"
      icon_name="fas fa-upload" />
      <br></br>

      <File 
      definition="boxed"
      filename="Screenshot 2020/01/01"
      label="Normal File"
      icon_name="fas fa-upload" />
      <br></br>

      <File 
      definition="medium boxed"
      filename="Screenshot 2020/01/01"
      label="Medium File"
      icon_name="fas fa-upload" />
      <br></br>

      <File 
      definition="large boxed"
      filename="Screenshot 2020/01/01"
      label="Large File"
      icon_name="fas fa-upload" />
      <br></br>
    

      <File 
      definition="small  has-name boxed"
      filename="Screenshot 2020/01/01"
      label="Smalll File"
      icon_name="fas fa-upload" />
      <br></br>

      <File 
      definition="has-name boxed"
      filename="Screenshot 2020/01/01"
      label="Normal File"
      icon_name="fas fa-upload" />
      <br></br>

      <File 
      definition="medium has-name boxed"
      filename="Screenshot 2020/01/01"
      label="Medium File"
      icon_name="fas fa-upload" />
      <br></br>

      <File 
      definition="large has-name boxed"
      filename="Screenshot 2020/01/01"
      label="Large File"
      icon_name="fas fa-upload" />
      <br></br>

      <File 
      definition="success has-name boxed centered"
      filename="Screenshot 2020/01/01"
      label="Large File"
      icon_name="fas fa-upload" />

     <File 
      definition="info has-name right"
      filename="Screenshot 2020/01/01"
      label="Large File"
      icon_name="fas fa-upload" />
    
    <br></br>
  </div>)
        .toJSON();
 
 
    expect(component).toMatchSnapshot();
})