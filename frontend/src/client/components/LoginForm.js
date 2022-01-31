import React, {Fragment, useRef, useState} from 'react';
import {Button, Col, DatePicker, Drawer, Form, Input, notification, Row, Select, Space} from "antd";
const LoginForm = () => {
    const formRef = useRef(null);
    const [sending,setSending] = useState(false);
    const dateFormat = 'YYYY-MM-DD';
    const onFinish = (values: any) => {
        setSending(true);
        const data = {
            "patientNumber": values.patientNumber,
            "isAnOutPatient": values.isAnOutPatient,
            "fullNames": values.fullNames,
            "emailAddress": values.emailAddress,
            "contactPhoneNumber": values.contactPhoneNumber,
            "dateOfBirth": values.dateOfBirth
        }
    };

    const onFinishFailed = (errorInfo: any) => {
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
                            name="password"
                            label="Password"
                            rules={[{ required: true, message: '*Password is required' }]}
                        >
                            <Input placeholder="Please enter email address"/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="emailAddress"
                            label="Email address"
                            rules={[{ required: true, message: 'Email address is required' }]}
                        >
                            <Input placeholder="Please enter email address"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Button type="primary" htmlType="submit"  disabled={sending}>
                        {sending? 'Please wait ... ': 'Submit'}
                    </Button>
                </Row>
            </Form>
        </Fragment>
    );
};

export default LoginForm;