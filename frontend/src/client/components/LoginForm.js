import React, {Fragment, useRef, useState} from 'react';
import {Button, Col, Form, Input, notification, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {loginPending,loginSuccess,loginFail} from "../../features/reducers/LoginSlice";
import {Alert, Spinner} from "react-bootstrap";

const LoginForm = () => {
    const formRef = useRef(null);
    const [sending,setSending] = useState(false);
    const dispatch = useDispatch();
    const {isLoading,isAuth,error} = useSelector(state => state.login);

    const dateFormat = 'YYYY-MM-DD';
    const onFinish = (values: any) => {
        // setSending(true);
        // const data = {
        //     "patientNumber": values.patientNumber,
        //     "isAnOutPatient": values.isAnOutPatient,
        //     "fullNames": values.fullNames,
        //     "emailAddress": values.emailAddress,
        //     "contactPhoneNumber": values.contactPhoneNumber,
        //     "dateOfBirth": values.dateOfBirth
        // }
        dispatch(loginPending())
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
                    <Button type="primary" htmlType="submit"  disabled={isLoading} loading={isLoading}>
                        {isLoading? 'Please wait ... ': 'Submit'}
                    </Button>
                </Row>
                <Row style={{paddingTop:12, width:'100%'}}>
                    <Col span={12}>
                        <Alert variant="danger">{error}</Alert>
                    </Col>
                </Row>
            </Form>
        </Fragment>
    );
};

export default LoginForm;