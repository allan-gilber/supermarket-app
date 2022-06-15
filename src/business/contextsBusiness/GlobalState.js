import React, {useCallback, useState} from 'react';
import {PropTypes} from 'prop-types';
import {GlobalContext} from './GlobalContext';
import {endOfDay, endOfToday, format} from 'date-fns';

const GlobalState = props => {

  const [initLoading, setInitLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    initLoading: false,
    loading: false,
    startingPosition: 0,
    readOnly: true,
    shippingDate: null,
    items : [
      // {id: '16', name: 'AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML', price: '20.49', qty_stock: 1},
      // {id: '16', name: 'AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML', price: '20.49', qty_stock: 3},
      // {id: '16', name: 'AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML', price: '20.49', qty_stock: 4},
      // {id: '16', name: 'AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML', price: '20.49', qty_stock: 1},
      // {id: '16', name: 'AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML', price: '20.49', qty_stock: 1},
      // {id: '16', name: 'AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML', price: '20.49', qty_stock: 1},
      // {id: '16', name: 'AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML', price: '20.49', qty_stock: 1},
      // {id: '18', name: 'BEBIDA ENERGÉTICA VIBE 2L', price: '8.99', qty_stock: 1},
      // {id: '18', name: 'BEBIDA ENERGÉTICA VIBE 2L', price: '8.99', qty_stock: 1},
      // {id: '18', name: 'BEBIDA ENERGÉTICA VIBE 2L', price: '8.99', qty_stock: 1},
      // {id: '18', name: 'BEBIDA ENERGÉTICA VIBE 2L', price: '8.99', qty_stock: 1},
      // {id: '18', name: 'BEBIDA ENERGÉTICA VIBE 2L', price: '8.99', qty_stock: 1},
      // {id: '18', name: 'BEBIDA ENERGÉTICA VIBE 2L', price: '8.99', qty_stock: 1},
      // {id: '18', name: 'BEBIDA ENERGÉTICA VIBE 2L', price: '8.99', qty_stock: 1},
      // {id: '18', name: 'BEBIDA ENERGÉTICA VIBE 2L', price: '8.99', qty_stock: 1},
      // {id: '18', name: 'BEBIDA ENERGÉTICA VIBE 2L', price: '8.99', qty_stock: 1},
      // {id: '18', name: 'BEBIDA ENERGÉTICA VIBE 2L', price: '8.99', qty_stock: 1},
      // {id: '18', name: 'BEBIDA ENERGÉTICA VIBE 2L', price: '8.99', qty_stock: 1}
    ]
  });


  const formDataHandler = data => {
    useCallback(
      () => {
        setFormData(data);
      },
      [ formData ]
    );
  };

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        formDataHandler,
        initLoading,
        setInitLoading,
        loading,
        setLoading
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