// @flow
import * as React from 'react';

type Props = {
  children?: React.Node,
};

function Box(props: Props) {
  return  <div className="box">
            {props.children}
        </div>
}

export default Box