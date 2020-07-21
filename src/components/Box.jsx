// @flow
import * as React from 'react';

type Props = {
  children?: React.Node,
  definition?: string,
  custom?: Object
};

function Box(props: Props) {
  let definition = (props.definition == undefined) ? "box" : "box " + props.definition
  return <div className={definition} {...props.custom}>
    {props.children}
  </div>
}

export default Box7