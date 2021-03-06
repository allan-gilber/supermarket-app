import {Avatar, Empty, Input, List, Modal, Skeleton} from 'antd';
import React, {useContext, useEffect} from 'react';
import {GlobalContext} from '../../../business/contextsBusiness/GlobalContext';
import {addNewItemToList} from '../../../business/handleAddProductLogic';
import {Title, MainContainer} from './styles';
import ProductImg from '../../../data/assets/ProductImg.svg';
import {getProducListByName} from '../../../business/axiosRequistions';


const ModalForNewProducts = () => {
  const maxProductLimit = 5;
  let searchInterval;
  const {
    searchInput,
    setSearchInput,
    setOpenModal,
    openModal,
    formData,
    setFormData,
    initLoading,
    setInitLoading,
    loading,
    searchInputLoading,
    setSearchInputLoading,
    setLoading
  } = useContext(GlobalContext);

  const getNewListOfProducts = async () => {
    const newProductList = await getProducListByName(searchInput);
    setInitLoading(false);
    setLoading(false);
    setSearchInputLoading(false);
    setFormData({...formData, searchList: newProductList});
  };

  useEffect(() => {
    searchInterval = setTimeout(() => {
      getNewListOfProducts();
    }, 1000);
  }, [ searchInput ]);


  return (
    <MainContainer>
      <Modal
        title={<Title>Choose your product</Title>}
        visible={openModal}
        closable={false}
        cancelButtonProps={{disabled: false, shape: 'round'}}
        onCancel={  e => {
          e.stopPropagation();
          setOpenModal(!openModal);
        }}
        bodyStyle={{
          maxHeight:'620px',
          maxWidth:'520px',
          padding: '5%'
        }}
        style={{
          borderRadius: '4px',
          width: '50%',
          height: '80%'
        }}
      >
        <Input.Search
          loading={searchInputLoading}
          value={searchInput}
          style={{marginBottom: '2rem', width: '100%'}}
          onChange={event => {
            setSearchInputLoading(true);
            clearTimeout(searchInterval);
            setSearchInput(event.target.value);
          }}
        />
        <List
          loading={initLoading}
          itemLayout="vertical"
          dataSource={formData.searchList}
          style={{justifyContent: 'center'}}
          locale={{
            emptyText:
         <Empty
           description={
             <span style={{fontWeight: '700'}}>
             Your order is empty
             </span>
           }
         />
          }}
          split={false}
          renderItem={(item, index) => {
            if (index < maxProductLimit) {
              return <List.Item
                onClick={ e =>  {
                  e.stopPropagation();
                  addNewItemToList(item, setOpenModal, formData, setFormData, setInitLoading);
                }}
                style={{cursor: 'pointer'}}
              >
                <Skeleton
                  avatar
                  title={false}
                  loading={loading}
                  active
                >
                  <List.Item.Meta
                    className={'teste'}
                    avatar={<Avatar src={ProductImg} onError />}
                    title={<p>{item.product_name}</p>}
                    description={
                      <div
                        key={`${item.product_name + index}`}
                        style={{
                          display: 'block',
                          width: '50%',
                          minWidth: 'min(10%, 50px)'
                        }}
                      >
                        Quantity in stock: <b>{item.product_qty_stock}</b>
                      </div>
                    }
                  />
                </Skeleton>
              </List.Item>;
            }
          }}
        />
      </Modal>
    </MainContainer>
  );
};

export default ModalForNewProducts;