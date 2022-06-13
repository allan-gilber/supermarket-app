import {Button, DatePicker, Form, Input, message} from 'antd';
import React from 'react';
import OrderListOfItems from '../OrderListOfItems';
import {MainContainer} from './styles';

export default function OrderForm(){
  return (
    <MainContainer>
      <Form
        name='orderList'
        initialValues={{remember: true}}
        onFinish={data => {console.log('lol', data);}}
        onFinishFailed={data => {console.log('lol2', data);}}
        requiredMark={false}
        scrollToFirstError
        style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems:'center', padding: '5% 0'}}
        labelCol={{span: 6, offset: 0}}
      >
        <div
          style={{width: '50%', height: '80%'}}
        >
          <Form.Item
            label='Client Name'
            name='clientName'
            rules={[
              {
                required: true,
                message: 'Please, insert your name!'
              },
              {
                pattern: new RegExp(/^[a-zA-Z0-9]*$/),
                message: 'Please, insert a valid name.'
              }
              , {
                min:7,
                message: 'Please, entender a valid name with at least 2 words.'
              }
            ]}
          >
            <Input

              required
            />
          </Form.Item>
          <Form.Item
            label='Shipping Date'
            name='shippingDate'
            rules={[
              {
                required: true,
                message: 'Please, insert a valid date!'
              }
            ]}
          >
            <DatePicker
              mode='date'
            />
          </Form.Item>
          {/* <Form.Item
            label='Client Name'
            name='ClientName'
            rules={[
              {
                required: true,
                message: 'Please, insert your name!'
              }
            ]}
          >
            <Input
            />
          </Form.Item> */
          }
          <Form.Item
            style={{width: '100%', minHeight: '12rem'}}
          >
            <OrderListOfItems/>
          </Form.Item>
        </div>
        <Form.Item
          style={{
            width: '40%',
            alignItems: 'center'
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: '100%',
              height:'100%'
            }}
            shape={'round'}
          >
          Submit
          </Button>
        </Form.Item>
      </Form>
    </MainContainer>
  );
}