import {Avatar,  Empty, List, Skeleton} from 'antd';
import React, {useContext, useEffect} from 'react';
import {ListHeader, MainContainer} from './styles';
import ProductImg from '../../../data/assets/ProductImg.svg';
import {GlobalContext} from '../../../business/contextsBusiness/GlobalContext';
import AddNewProduct from '../AddNewProduct';
import {DescriptionIcons} from '../DescriptionIcons';


const OrderListOfItems = () => {

  const {
    formData,
    initLoading,
    setInitLoading,
    loading,
    setLoading,
    setFormData
  } = useContext(GlobalContext);

  useEffect(() => {
    setFormData({...formData, items: []});
    setInitLoading(false);
    setLoading(false);
  }, []);
  return (
    <MainContainer>
      <List
        loading={initLoading}
        itemLayout="vertical"
        header={
          <ListHeader>
            <div
              style={{fontWeight: '700', fontSize: '130%'}}
              id='title'
              key='title'
            >
            List of Products
            </div>
            <AddNewProduct/>
          </ListHeader>}
        pagination={{
          onChange: () => {
            document.getElementById('title').scrollIntoView(
              {behavior: 'smooth'},
              'alignToTop'
            );
          },
          pageSize: 10,
          size: 'small',
          style:{display: 'flex', alignItems: 'center', justifyContent: 'center'},
          hideOnSinglePage: true
        }}
        dataSource={formData.items}
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
        renderItem={(item, index) => {
          return <List.Item>
            <Skeleton avatar title={false}
              loading={loading}
              active>
              <List.Item.Meta
                avatar={<Avatar src={ProductImg} onError />}
                title={<p>{item.name}</p>}
                description={
                  <DescriptionIcons
                    item={item}
                    index={index}
                  />
                }
              />
            </Skeleton>
          </List.Item>;
        }}
      />
    </MainContainer>
  );
};

export default OrderListOfItems;