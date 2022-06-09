import React from 'react';

export default function Home(): any{
  return (
    <div>
      <p>Hello</p>
      <h1>{`teste env: ${process.env.REACT_APP_TEST}`}</h1>
    </div>
  );
}