import {Avatar, List, Skeleton} from 'antd';
import React, {useState} from 'react';
import {MainContainer} from './styles';
import ProductImg from '../../../data/assets/ProductImg.svg';
import {ReactComponent as PlusIcon} from '../../../data/assets/PlusIcon.svg';
import {ReactComponent as MinusIcon} from '../../../data/assets/MinusIcon.svg';


const OrderListOfItems = () => {

  const [listData, setListData] = useState({
    initLoading: false,
    loading: false,
    startingPosition: 0,
    items : [
      {id: '16', name: 'AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML', price: '20.49', qty_stock: 158}, {id: '16', name: 'AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML', price: '20.49', qty_stock: 158}, {id: '16', name: 'AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML', price: '20.49', qty_stock: 158}, {id: '16', name: 'AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML', price: '20.49', qty_stock: 158}, {id: '16', name: 'AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML', price: '20.49', qty_stock: 158}, {id: '16', name: 'AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML', price: '20.49', qty_stock: 158}, {id: '16', name: 'AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML', price: '20.49', qty_stock: 158},
      {id: '18', name: 'BEBIDA ENERGÉTICA VIBE 2L', price: '8.99', qty_stock: '659'}
    ]
  });

  console.log('asda', listData.items.slice(listData.startingPosition, listData.startingPosition + 9));

  return (
    <MainContainer>
      <List
        className="list-of-products"
        loading={listData.initLoading}
        itemLayout="vertical"
        header={<div style={{fontWeight: '700', fontSize: '130%'}}>List of Products</div>}
        pagination={{
          onChange: page => {
            console.log(page);
          }, pageSize: 10,
          size: 'small',
          style:{display: 'flex', alignItems: 'center', justifyContent: 'center'},
          total: 10
        }}
        dataSource={listData.items.slice(listData.startingPosition, listData.startingPosition + 9)}
        style={{justifyContent: 'center'}}
        renderItem={(item, index) => {
          return <List.Item>
            <Skeleton avatar title={false}
              loading={listData.loading}
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
                    />
                    <PlusIcon
                      className='svg-icons'
                      width={'1.5rem'}
                      fill='var(--success)'
                      filter='brightness(80%)'
                    />
                    <p key='lol'>
                      {item.qty_stock}
                    </p>
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