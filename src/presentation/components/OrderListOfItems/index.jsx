import {Avatar, List, Skeleton} from 'antd';
import React, {useState} from 'react';

const OrderListOfItems = () => {
  const [listData, setListData] = useState({
    initLoading: false,
    loading: false,
    data: [],
    list: []
  });
  return (
    <List
      loading={listData.initLoading}
      itemLayout="horizontal"
      loadMore={listData.loadMore}
      dataSource={listData.list}
      renderItem={ item => {
        <List.Item actions={[<a key='edit'>edit</a>, <a key='more'>more</a>]}>
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.name.last}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div>content</div>
          </Skeleton>
        </List.Item>;
      }}
    >
    </List>
  );
};

export default OrderListOfItems;