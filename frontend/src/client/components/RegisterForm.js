import React, {Fragment, useRef, useState} from 'react';
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import {Alert} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {Button, Col, Form, Input, Row,notification} from "antd";


import {userRegistration} from "../../api/userApi";
import {registrationFail, registrationPending, registrationSuccess} from "../../features/reducers/userSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [error,setError] = useState(false);
  const errorNotification = (message) => {
    notification["error"]({
        message:message
    });
}

const successNotification = () => {
        notification["success"]({
            message:"your reservation was successful",
            description:"The vehicle will be available for pickup"
        });
    }

    const displayError = (message) => <Alert variant="danger">{message}</Alert>

  const onFinish = async (values) => {
    setSending(true);
    const data = {
      "role": "CUSTOMER",
      "email": values.email,
      "password": values.password,
      "username": values.username,
      "firstName": values.firstName,
      "lastName": values.lastName,
      "contactPhoneNumber": values.contactPhoneNumber,
      "driverLicenseNumber": values.driverLicenseNumber,
    };
    dispatch(registrationPending());
    try {
      await userRegistration(data);
      dispatch(registrationSuccess());
      formRef.reset();
    } catch (e) {
      setError(true);
      displayError(e?.data?.error?.message || "Something went wrong");
      dispatch(registrationFail(e?.data?.error?.message || "Something went wrong"))
      
    } finally {
      setSending(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Fragment>
      <Form layout="vertical" hideRequiredMark
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            ref={formRef}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[{required: true, message: 'Please enter First Name'}]}>
              <Input placeholder="Please enter First Name"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[{required: true, message: 'Please enter Last Name'}]}>
              <Input placeholder="Please enter Last Name"/>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="email"
              label="Email Address"
              rules={[{required: true, message: 'Please enter a valid email address'}]}>
              <Input placeholder="Please enter an email address"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="username"
              label="Username"
              rules={[{required: true, message: '*Username is required'}]}
            >
              <Input placeholder="Please enter a username"/>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Phone Number"
              name="contactPhoneNumber"
              rules={[{required: true, message: '*Contact phone number is required'}]}>
              <Input placeholder="Please enter contact number"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="driverLicenseNumber"
              label="Driver License Number"
              rules={[{required: true, message: 'Please enter your driver license number'}]}>
              <Input placeholder="Please enter driver license number"/>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="password"
              label="Password"
              rules={[{required: true, message: '*Password is required'}]}
            >
              <Input.Password
                placeholder="Please enter password"
                iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              rules={[
                {required: true, message: '*Confirm Password is required'},
                ({getFieldValue}) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder="Please re-enter your password"
                iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Button type="primary" htmlType="submit" disabled={sending}>
            {sending ? 'Please wait ... ' : 'Submit'}
          </Button>
        </Row>
        {error && successNotification()}
      </Form>
    </Fragment>
  );
};

export default LoginForm;
