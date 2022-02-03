import React, {Fragment, useRef} from 'react';
import {Button, Col, Form, Input, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {loginSuccess,loginFail} from "../../features/reducers/LoginSlice";
import {Alert} from "react-bootstrap";
import {userLogin} from "../../api/userApi";
import { useNavigate } from 'react-router';


const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formRef = useRef(null);
    const {isLoading,error} = useSelector(state => state.login);

    const onFinish = async (values) => {
        // setSending(true);
        const data = {
            "username": values.username,
            "password": values.password,
        }
        try {
            const response = await userLogin(data);
            localStorage.setItem("token", response.token);
            const {id,firstName,role} = response.user;
            localStorage.setItem("userId",id);
            localStorage.setItem("firstName",firstName);
            if(role === "EMPLOYEE") navigate("/admin/dashboard");
            dispatch(loginSuccess());
        } catch (e) {
            dispatch(loginFail(e?.data?.error?.message || "Something went wrong"))
        }
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Fragment>
            <Form layout="vertical" hideRequiredMark
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  ref={formRef}>
                {
                  error &&
                  <Row style={{paddingTop:12, width:'100%'}}>
                      <Col span={24}>
                          <Alert variant="danger">{error}</Alert>
                      </Col>
                  </Row>
                }
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
                            <Input.Password placeholder="Please enter email address"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Button type="primary" htmlType="submit"  disabled={isLoading} loading={isLoading}>
                        {isLoading? 'Please wait ... ': 'Submit'}
                    </Button>
                </Row>
            </Form>
        </Fragment>
    );
};

export default LoginForm;
