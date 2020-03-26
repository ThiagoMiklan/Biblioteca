import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import getClassName from '../../tools/getClassName';
import assembleListTabs  from '../../tools/assembleListTabs';
import Icon from '../elements/Icon';

const Tabs = (props)=>{
var definition = "tabs "+ classname(getClassName(props.definition,"Tabs"));

    return (<div className={definition}>
            {assembleListTabs(props.itens)}
            </div>
  );
}

export default Tabs;