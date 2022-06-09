import React from 'react';
import {MainContainer} from './style';

export default function Home(): any{
  return (
    <MainContainer>
      <p>Hello</p>
      <h1>{`teste env: ${process.env.REACT_APP_TEST}`}</h1>
    </MainContainer>
  );
}