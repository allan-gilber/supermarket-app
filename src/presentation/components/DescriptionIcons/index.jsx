import React, {useContext} from 'react';
import {ReactComponent as PlusIcon} from '../../../data/assets/PlusIcon.svg';
import {ReactComponent as MinusIcon} from '../../../data/assets/MinusIcon.svg';
import {removeOneToQty, removeProductFromList, sumOneToQty} from '../../../business/productQtyBusiness';
import {GlobalContext} from '../../../business/contextsBusiness/GlobalContext';
import {InputNumber} from 'antd';
import PropTypes from 'prop-types';
import {ButtomDisposition} from './styles';

export const DescriptionIcons = ({item, index}) => {
  const {
    formData,
    setFormData
  } = useContext(GlobalContext);

  return (
    <ButtomDisposition>
      <MinusIcon
        width={'1.5rem'}
        className='svg-icons'
        fill='red'
        filter='brightness(80%)'
        onClick={() => {item.qty_stock <= 1 ? removeProductFromList(index, formData, setFormData) : removeOneToQty(index, formData, setFormData);}}
      />
      <PlusIcon
        className='svg-icons'
        width={'1.5rem'}
        fill='var(--success)'
        filter='brightness(80%)'
        onClick={() => sumOneToQty(index, formData, setFormData)}
      />
      <InputNumber
        className='input-qty-of-products'
        key={`qty-of-products${index}`}
        controls={false}
        bordered={false}
        min={1}
        max={item.qty_stock}
        onChange={event => {
          const newArray = formData.items;
          newArray[index] = {...newArray[index], qty_stock: event};
          setFormData({...formData, items: newArray});
        }}
        value={item.qty_stock}
        style={{width: '50%', minWidth: 'min(10%, 50px)'}}
      />
    </ButtomDisposition>
  );
};

DescriptionIcons.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number
};