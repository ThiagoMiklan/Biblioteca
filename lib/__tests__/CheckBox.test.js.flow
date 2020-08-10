import React from 'react';
import renderer from 'react-test-renderer';
import Control from '../components/Control';
import CheckBox from '../components/CheckBox';



test('checkbox normal',()=>{
    const component = renderer.create(<Control>
        <CheckBox>
          normal
          </CheckBox>
      </Control>
  ).toJSON();
    expect(component).toMatchSnapshot();
});


test('checkbox with differents tags inside',()=>{
    const component = renderer.create(<Control>
        <CheckBox>
          with link <a href="#">here</a>
        </CheckBox>
      </Control>).toJSON();
    expect(component).toMatchSnapshot();
});

test('checkbox with onClick',()=>{
    const component = renderer.create(<Control>
        <CheckBox onClick={()=>{alert("Clicou CheckBox")}}>
         with on click
        </CheckBox>
      </Control>
  ).toJSON();
    expect(component).toMatchSnapshot();
});

test('checkbox disabled',()=>{
    const component = renderer.create(<Control>
        <CheckBox disabled={true} onClick={()=>{alert("Clicou CheckBox")}}>
          disabled with onClick
        </CheckBox>
      </Control>).toJSON();
    expect(component).toMatchSnapshot();
});


