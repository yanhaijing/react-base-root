import { Button, Form, Radio } from 'antd';
import React from 'react';

function MyForm(props) {
  return (
    <Radio.Group value={props.value} onChange={props.onChange}>
      <Radio.Button value="1">1</Radio.Button>
      <Radio.Button value="2">2</Radio.Button>
      <Radio.Button value="3">3</Radio.Button>
    </Radio.Group>
  );
}
function Form11() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <MyForm />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export function Form2() {
  return (
    <div>
      <div style={{ margin: 10, width: 400 }}>
        <div>Form11</div>
        <Form11></Form11>
      </div>
    </div>
  );
}
