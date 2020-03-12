import React from 'react';
import classnames from 'classnames';
import getClassNames from '../../tools/getClassName';

const ButtonList = (props) => {
    var definition = classnames(getClassNames("buttons " + props.definition,"ButtonList"));
    return (<div className={definition}>
        {props.children}
    </div>
    );
}

export default ButtonList;