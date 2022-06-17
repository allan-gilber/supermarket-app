import {Avatar, Button, Dropdown, Space} from 'antd';
import React from 'react';
import {DropDownMenu} from './DropDownMenu';
import {PageHeaderContainer} from './styles';
import {UnorderedListOutlined, UserOutlined} from '@ant-design/icons';

export default function PageHeader() {
  return (
    <PageHeaderContainer>
      <Dropdown
        overlay={DropDownMenu}
        trigger={['click', 'hover']}
        autoFocus
      >
        <Button
          size='large'
          type='primary'
          shape={'round'}
          style={{
            backgroundColor: 'var(--secondary-color)', textAlign: 'center', justifyContent: 'center'
          }}
        >
          <Space>
            <UnorderedListOutlined />
                My Orders
          </Space>
        </Button>
      </Dropdown>
      <div
        style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
      >
        <Avatar
          size={60}
          icon={<UserOutlined />}
          alt='avatar'
        />
      </div>
    </PageHeaderContainer>
  );
}