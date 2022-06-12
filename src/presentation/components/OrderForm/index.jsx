import {Button, DatePicker, Form, Input} from 'antd';
import React from 'react';
import {MainContainer} from './styles';

export default function OrderForm(){
  return (
    <MainContainer>
      <Form
        name='orderList'
        // labelCol={{span: 10}}
        // wrapperCol={{span: 10}}
        initialValues={{remember: true}}
        onFinish={data => {console.log('lol', data);}}
        onFinishFailed={data => {console.log('lol2', data);}}
        requiredMark={false}
        scrollToFirstError
        style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems:'center', padding: '5% 0'}}
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
                message: 'please, insert your name!'
              }
            ]}
            style={{width: '100%'}}
            labelCol={{span: 30, offset: 0}}
            wrapperCol={{span: 70, offset: 0}}
          >
            <Input
            />
          </Form.Item>
          <Form.Item
            label='Shipping Date'
            name='shippingDate'
            style={{width: '100%'}}
            rules={[
              {
                required: true,
                message: 'please, insert a valid date!'
              }
            ]}
            labelCol={{span: 30, offset: 0}}
            wrapperCol={{span: 70, offset: 0}}
          >
            <DatePicker
              mode='date'
            />
          </Form.Item>
          <Form.Item
            label='Client Name'
            name='ClientName'
            rules={[
              {
                required: true,
                message: 'please, insert your name!'
              }
            ]}
            style={{width: '100%'}}
            labelCol={{span: 30, offset: 0}}
            wrapperCol={{span: 70, offset: 0}}
          >
            <Input
            />
          </Form.Item>
        </div>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Button type="primary" htmlType="submit">
          Submit
          </Button>
        </Form.Item>
      </Form>
    </MainContainer>
  );
}