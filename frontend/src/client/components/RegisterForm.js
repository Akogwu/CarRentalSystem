import React, {Fragment, useRef, useState} from 'react';
import {Button, Col, DatePicker, Form, Input, notification, Row} from "antd";
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
                            name="driverLicenseNumber"
                            label="Driver License Number"
                            rules={[{ required: true, message: 'Please enter your driver license number' }]}>
                            <Input placeholder="Please enter driver license number" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="fullNames"
                            label="Full Name"
                            id="fullNames"
                            rules={[{ required: true, message: 'Please enter full name' }]}
                        >
                            <Input placeholder="Please enter full name" />
                        </Form.Item>
                    </Col>
                </Row>
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
                            rules={[{ required: true, message: '*Email address is required' }]}
                        >
                            <Input placeholder="Please enter email address"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>

                        <Form.Item
                            name="contactPhoneNumber"
                            label="Contact number"
                            rules={[{ required: true, message: '*Contact phone number is required' }]}>
                            <Input placeholder="Please enter contact number"/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="dateOfBirth"
                            label="Date Of Birth"
                        >
                            <DatePicker style={{ width: '100%' }}  format={dateFormat}/>
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