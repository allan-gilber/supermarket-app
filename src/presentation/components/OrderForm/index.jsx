import {Button, DatePicker, Form, Input} from 'antd';
import React, {useContext} from 'react';
import OrderListOfItems from '../OrderListOfItems';
import {MainContainer} from './styles';
import {endOfTomorrow, format, isFuture} from 'date-fns';
import {GlobalContext} from '../../../business/contextsBusiness/GlobalContext';

export default function OrderForm(){
  const {
    formData,
    setFormData
  } = useContext(GlobalContext);

  return (
    <MainContainer>
      <Form
        name='orderList'
        initialValues={{remember: true}}
        onFinish={data => {console.log('finished', data);}}
        onFinishFailed={data => {console.log('failure', data);}}
        requiredMark={false}
        scrollToFirstError
        style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems:'center', padding: '5% 0 0 0'}}
        labelCol={{span: 6, offset: 0}}
      >
        <div
          style={{width: '60%', height: '80%'}}
        >
          <Form.Item
            label={<p style={{fontWeight: '700', margin: '0'}}>Client Name</p>}
            name='clientName'
            rules={[
              {
                required: true,
                message: 'Please, insert your name!'
              },
              {
                pattern: new RegExp(/^[a-z ,.'-]+$/i),
                message: 'Please, insert a valid name (no special characters).'
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
            label={<p style={{fontWeight: '700', margin: '0'}}>Shipping Date</p>}
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
              disabledDate={date => {
                return date && !isFuture(new Date(date._d));
              }}
              format={'DD-MM-YYYY'}
              placeholder={format(endOfTomorrow(), 'dd-MM-yyyy')}
              placement={'topLeft'}
              showNow={false}
              showToday={false}
              onChange={value => {
                setFormData({...formData, shippingDate: value});
              }}
            />
          </Form.Item>
          <Form.Item
            style={{width: '100%', minHeight: '10rem'
            }}
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
          {formData.items.length ? <Button
            type="primary"
            htmlType="submit"
            style={{
              width: '100%',
              height:'100%',
              marginBottom: '2rem'
            }}
            shape={'round'}
          >
          Submit
          </Button> : null}
        </Form.Item>
      </Form>
    </MainContainer>
  );
}