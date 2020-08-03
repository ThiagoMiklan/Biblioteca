// @flow
import * as React from 'react';
import { validate } from '../tools/type_validations.js';

// validate ok(all)
// props ok (all)

type Props = {
  children?: React.Node,
  definition?: string,
  custom?: Object
};

const props_obj = {
  definition: 'string',
  custom: 'object'
}

function Box(props: Props) {
  validate(props,props_obj,"Box");
  let definition = (props.definition == undefined) ? "box" : "box " + props.definition
  return <div className={definition} {...props.custom}>
    {props.children}
  </div>
}

export default Box;