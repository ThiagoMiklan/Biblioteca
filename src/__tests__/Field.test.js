import React from 'react';
import Field from '../biblioteca/Field'
import renderer from 'react-test-renderer';

test('fields colors', () => {
    const colors = renderer.create(
        <>
            <Field label="Example"
                input_definition="primary"
                icon_definition="primary"
                icon_name="fas fa-user"
                placeholder="testing"
                control_definition="icons-right">
            </Field>
            <Field label="Example"
                input_definition="info"
                icon_definition="info"
                icon_name="fas fa-user"
                placeholder="testing"
                control_definition="icons-right">
            </Field>
            <Field label="Example"
                input_definition="success"
                icon_definition="success"
                icon_name="fas fa-user"
                placeholder="testing"
                control_definition="icons-right">
            </Field>
            <Field label="Example"
                input_definition="danger"
                icon_definition="danger"
                icon_name="fas fa-user"
                placeholder="testing"
                control_definition="icons-right">
            </Field>
            <Field label="Example"
                input_definition="warning"
                icon_definition="warning"
                placeholder="testing"
                icon_name="fas fa-user"
                control_definition="icons-right">
            </Field>
        </>
    ).toJSON();

    expect(colors).toMatchSnapshot();
})

test('sizes',()=>{

    const sizes = renderer.create(
        <>
        <Field label="Example"
               input_definition="small"
               icon_definition="warning"
               icon_name="fas fa-user"
               control_definition="icons-right">
        </Field>

        <Field label="Example"
               input_definition="medium"
               icon_definition="warning"
               icon_name="fas fa-user"
               control_definition="icons-right">
        </Field>

        <Field label="Example"
               input_definition="large"
               icon_definition="warning"
               icon_name="fas fa-user"
               control_definition="icons-right">
        </Field>
        </>
    ).toJSON();

    expect(sizes).toMatchSnapshot();
})

test('sizes rounded',()=>{
    const rounded = renderer.create(
        <>
        <Field label="Example"
               input_definition={"small rounded"}
               control_definition="icons-right">
        </Field>

        <Field label="Example"
               input_definition={"medium rounded"}
               control_definition="icons-right">
        </Field>

        <Field label="Example"
               input_definition={"large rounded"}
               control_definition="icons-right">
        </Field>
        </>
    ).toJSON();

    expect(rounded).toMatchSnapshot();
})