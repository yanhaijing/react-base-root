import { Button, Form, Input, Radio } from 'antd';
import React from 'react';

function Question1() {
  return (
    <Form.Item name="t1" label="t1">
      <Input />
    </Form.Item>
  );
}
function Question2() {
  return (
    <Form.Item name="t2" label="t2">
      <Input />
    </Form.Item>
  );
}
function Question3() {
  return (
    <Form.Item name="t3" label="t3">
      <Input />
    </Form.Item>
  );
}
function Form11() {
  const [form] = Form.useForm();
  return (
    <Form form={form} initialValues={{}}>
      <Form.Item name="type" label="type">
        <Radio.Group
          options={[
            { value: 1, label: 'question1' },
            { value: 2, label: 'question2' },
            { value: 3, label: 'question3' },
          ]}
        ></Radio.Group>
      </Form.Item>

      <Form.Item noStyle shouldUpdate>
        {({ getFieldValue }) => {
          const type = getFieldValue('type');
          if (type === 1) {
            return <Question1></Question1>;
          }
          if (type === 2) {
            return <Question2></Question2>;
          }
          if (type === 3) {
            return <Question3></Question3>;
          }
        }}
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export function Form3() {
  return (
    <div>
      <div style={{ margin: 10, width: 400 }}>
        <div>Form11</div>
        <Form11></Form11>
      </div>
    </div>
  );
}
