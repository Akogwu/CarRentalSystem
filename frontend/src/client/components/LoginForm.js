import React, {Fragment, useRef, useState} from 'react';
import {Button, Col, Form, Input, notification, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {loginPending,loginSuccess,loginFail} from "../../features/reducers/LoginSlice";
import {Alert} from "react-bootstrap";
import {userLogin} from "../../api/userApi";


const LoginForm = () => {
    const formRef = useRef(null);
    const [sending,setSending] = useState(false);
    const dispatch = useDispatch();
    const {isLoading,isAuth,error} = useSelector(state => state.login);

    const dateFormat = 'YYYY-MM-DD';
    const onFinish = async (values: any) => {
        // setSending(true);
        const data = {
            "username": values.username,
            "password": values.password,
        }
        try {
            const isAuth = await userLogin(data);
            if (isAuth.status === 'error') {
                dispatch(loginFail(isAuth.message))
            }

        } catch (e) {
            console.log(e);
        }

    }

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
                            name="username"
                            label="Username"
                            rules={[{ required: true, message: '*Username is required' }]}
                        >
                            <Input placeholder="Please enter username"/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[{ required: true, message: '*Password is required' }]}
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