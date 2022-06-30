import {Button} from 'antd';
import React, {useContext} from 'react';
import {GlobalContext} from '../../../business/contextsBusiness/GlobalContext';
import ModalForNewProducts from '../ModalForNewProducts';

const AddNewProduct = () => {
  const {
    setOpenModal
  } = useContext(GlobalContext);
  return (
    <Button
      type="primary"
      shape='round'
      onClick={() => setOpenModal(true)}
      key={'insertNewItemButton'}
      title='teste'
    >
        Add New Product
      <ModalForNewProducts/>
    </Button>
  );
};

export default AddNewProduct;