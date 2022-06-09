import React, {useState} from 'react';
import {PropTypes} from 'prop-types';
import {GlobalContext} from './GlobalContext';

const GlobalState = props => {

  const [template, setTemplate] = useState('');

  return (
    <GlobalContext.Provider
      value={{
        template,
        setTemplate
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

GlobalState.propTypes ={
  children: PropTypes.any
};
export default GlobalState;