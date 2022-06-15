import {Avatar, Button, Empty, Input, InputNumber, List, Skeleton} from 'antd';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {MainContainer} from './styles';
import ProductImg from '../../../data/assets/ProductImg.svg';
import {ReactComponent as PlusIcon} from '../../../data/assets/PlusIcon.svg';
import {ReactComponent as MinusIcon} from '../../../data/assets/MinusIcon.svg';
import {GlobalContext} from '../../../business/contextsBusiness/GlobalContext';


const OrderListOfItems = () => {

  const {
    formData,
    setFormData,
    formDataHandler,
    initLoading, setInitLoading, loading, setLoading
  } = useContext(GlobalContext);

  useEffect(() => {
    // setFormData({...formData, items: []});
    setInitLoading(false);
    setLoading(false);
  }, []);
  console.log('asda', formData);

  const sumOneToQty = index => {
    const newArray = formData.items;
    const amount = newArray[index].qty_stock;
    newArray[index] = {...newArray[index], qty_stock: amount + 1};
    setFormData({...formData, items: newArray});
  };

  const removeOneToQty = index => {
    const newArray = formData.items;
    const amount = newArray[index].qty_stock;
    if (amount === 1){
      newArray.splice(index, index);
    }
    newArray[index] = {...newArray[index], qty_stock: amount - 1};
    setFormData({...formData, items: newArray});
  };

  const removeProductFromList = index => {
    const newArray = formData.items;
    newArray.splice(index, 1);
    setFormData({...formData, items: newArray});
  };

  return (
    <MainContainer>
      <List
        loading={initLoading}
        itemLayout="vertical"
        header={<div
          style={{fontWeight: '700', fontSize: '130%'}}
          id='title'
        >
            List of Products
        </div>}
        pagination={{
          onChange: page => {
            console.log(page);
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
        locale={{emptyText:
          <Empty
            // image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            // imageStyle={{
            //   height: 60
            // }}
            description={
              <span style={{fontWeight: '700'}}>
              Your order is empty
              </span>
            }
          >
            <Button type="primary" shape='round'>Select New Product</Button>
          </Empty>
        }}
        renderItem={(item, index) => {
          return <List.Item>
            <Skeleton avatar title={false}
              loading={loading}
              active>
              <List.Item.Meta
                avatar={<Avatar src={ProductImg} onError />}
                title={<a href="https://ant.design">{item.name}</a>}
                description={
                  <div className='buttom-disposition'>
                    <MinusIcon
                      width={'1.5rem'}
                      className='svg-icons'
                      fill='red'
                      filter='brightness(80%)'
                      onClick={() => {item.qty_stock <= 1 ? removeProductFromList() : removeOneToQty(index);}}
                    />
                    <PlusIcon
                      className='svg-icons'
                      width={'1.5rem'}
                      fill='var(--success)'
                      filter='brightness(80%)'
                      onClick={() => sumOneToQty(index)}
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
                  </div>
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