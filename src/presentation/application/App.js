import React from 'react';
import {GlobalStyle} from './styles';
import GlobalState from '../../business/contextsBusiness/GlobalState';
import Router from '../../business/routerBusiness/RouterLogic';

export default function App() {
  return (
    <GlobalState>
      <GlobalStyle />
      <Router/>
    </GlobalState>  );
}