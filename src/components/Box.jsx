// @flow
import * as React from 'react';

type Props = {
  children?: React.Node,
  definition?: string
};

function Box(props: Props) {
  let definition = (props.definition == undefined) ? "box" : "box " + props.definition
  return <div className={definition}>
    {props.children}
  </div>
}

export default Box