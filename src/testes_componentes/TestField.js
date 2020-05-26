import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Field from './biblioteca/Field'
import 'bulma/css/bulma.css';

ReactDOM.render(<div className="container is-fluid">
       
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

        <br></br>
      </div>
  , document.getElementById('root')
);

