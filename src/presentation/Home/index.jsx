import React from 'react';
import {MainContainer} from './styles';
import OrderForm from '../components/OrderForm';

export default function Home(){
  return (
    <MainContainer>
      <OrderForm/>
    </MainContainer>
  );
}