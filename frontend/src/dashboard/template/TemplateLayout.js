import React, {Fragment} from 'react';
import {Avatar, Badge, Breadcrumb, Button, Empty, Menu, notification, Popconfirm, Radio, Spin, Table, Tag} from "antd";
import Layout , {Content, Footer, Header} from "antd/es/layout/layout";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
const TemplateLayout = ({children}) => {

    const navigate = useNavigate();

    return (
        <Fragment>
            <Layout className="layout" style={{ minHeight: '100vh' }}>
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">
                            <div className="logo" >
                                Smart Car Rental
                            </div>
                        </Menu.Item>
                        <Menu.Item key="2"  >
                            <Link to="/admin/dashboard/cars">
                                Cars
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3" >
                            <Link to="/admin/dashboard/reservations">
                                Reservations
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    {children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Smart Car Rental, &coy; 2022</Footer>
            </Layout>
            
        </Fragment>
    );
};

export default TemplateLayout;