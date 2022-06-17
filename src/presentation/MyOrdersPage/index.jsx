import React from 'react';
import {MainContainer} from './styles';
import OrderForm from '../components/OrderForm';

export default function MyOrdersPage(){
  return (
    <MainContainer>
      <OrderForm/>
    </MainContainer>
  );
}