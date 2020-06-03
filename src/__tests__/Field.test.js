import React from 'react';
import Field from '../components/Field'
import renderer from 'react-test-renderer';

test('fields colors', () => {
    const colors = renderer.create(
        <>
           <Field label="Example"
               input_definition="is-primary"
               icon_definition="is-primary"
               icon_name="fas fa-user"
               placeholder="testing"
               control_definition="has-icons-right">
        </Field>
        <Field label="Example"
               input_definition="is-info"
               icon_definition="is-info"
               icon_name="fas fa-user"
               placeholder="testing"
               control_definition="has-icons-right">
        </Field>
        <Field label="Example"
               input_definition="is-success"
               icon_definition="is-success"
               icon_name="fas fa-user"
               placeholder="testing"
               control_definition="has-icons-right">
        </Field>
        <Field label="Example"
               input_definition="is-danger"
               icon_definition="is-danger"
               icon_name="fas fa-user"
               placeholder="testing"
               control_definition="has-icons-right">
        </Field>
        <Field label="Example"
               input_definition="is-warning"
               icon_definition="is-warning"
               placeholder="testing"
               icon_name="fas fa-user"
               control_definition="has-icons-right">
        </Field>
        </>
    ).toJSON();

    expect(colors).toMatchSnapshot();
})

test('sizes',()=>{

    const sizes = renderer.create(
        <>
       <Field label="Example"
               input_definition="is-small"
               icon_definition="is-warning"
               icon_name="fas fa-user"
               control_definition="has-icons-right">
        </Field>

        <Field label="Example"
               input_definition="is-medium"
               icon_definition="is-warning"
               icon_name="fas fa-user"
               control_definition="has-icons-right">
        </Field>

        <Field label="Example"
               input_definition="is-large"
               icon_definition="is-warning"
               icon_name="fas fa-user"
               control_definition="has-icons-right">
        </Field>
        </>
    ).toJSON();

    expect(sizes).toMatchSnapshot();
})

test('sizes rounded',()=>{
    const rounded = renderer.create(
        <>
       <Field label="Example"
               input_definition="is-small is-rounded"
               control_definition="has-icons-right">
        </Field>

        <Field label="Example"
               input_definition="is-medium is-rounded"
               control_definition="has-icons-right">
        </Field>

        <Field label="Example"
               input_definition="is-large is-rounded"
               control_definition="has-icons-right">
        </Field>

        </>
    ).toJSON();

    expect(rounded).toMatchSnapshot();
})