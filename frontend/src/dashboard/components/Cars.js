import React, {Fragment, useEffect, useState} from 'react';
import {Content} from "antd/es/layout/layout";
import {Breadcrumb, Button, Empty, Popconfirm, Spin, Table, Tag,Badge} from "antd";
import {getApi} from "../../api/clientApi";
import {
    LoadingOutlined, PlusCircleOutlined, UsergroupAddOutlined, ProfileTwoTone,
} from '@ant-design/icons';
import Avatar from "antd/es/avatar/avatar";


const Cars = () => {
    const [cars,setCars] = useState();
    const [fetching,setFetching] = useState(true);
    const loader = <LoadingOutlined style={{fontSize:30}} spin/>;

    useEffect(  () => {
        loadCars();
    },[]);


    const loadCars = () =>{
        getApi("/brands")
            .then(response => {
                console.log(response.data)
                setCars(response.data.map ( (data, index) => {
                    data.key = index+1;
                    data.index = index+1;
                    return data;
                }));
            })
            .catch(error => console.log(error.message))
            .finally( () => setFetching(false));
    }


    const TheAvatar = ({name}) => {
        if (name.length === 0){
            return <Avatar/>
        }
        const slipt = name.split(" ");
        if (slipt.length === 1){
            return <Avatar>{name.charAt(0)}</Avatar>
        }
        return <Avatar>{`${name.charAt(0)} ${name.charAt(name.length - 1)}`}</Avatar>
    }

    function deleteCar(id) {
        return undefined;
    }

    const columns = [
        {
            title: '',
            dataIndex: 'avatar',
            key: 'avatar',
            render:(text,car) => <TheAvatar name={car.brand} />
        },
        {
            title: '#',
            dataIndex: 'index',
            key: 'index'

        },
        {
            title: 'Patient Number',
            dataIndex: 'patientNumber',
            key: 'patientNumber',
        },
        {
            title: 'Full name',
            dataIndex: 'fullNames',
            key: 'fullNames',
            sorter:true
        },
        {
            title: 'Email',
            dataIndex: 'emailAddress',
            key: 'emailAddress',
        },
        {
            title: 'Contact Phone No.',
            dataIndex: 'contactPhoneNumber',
            key: 'contactPhoneNumber',
        },
        {
            title: 'Date of birth.',
            dataIndex: 'dateOfBirth',
            key: 'dateOfBirth',
        }, {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (text,car) =>

                <Popconfirm title='Are you sure to delete'
                            placement='topRight'
                            onConfirm={ () => deleteCar(car.id) }
                            okText='Yes'
                            cancelText='No'>
                    <Button>Delete</Button>
                </Popconfirm>
        },
    ];


    const renderCars = () => {
        if (fetching){
            return <Spin indicator={loader}/>
        }

        if (cars.length <= 0){
            return <Empty>
                <Button type="primary">Add First Car</Button>
            </Empty>
        }

        return <Table
            dataSource={cars}
            columns={columns}
            bordered
            title = {() =>{
                return  <>
                    <Button type="primary" htmlType="button" >
                        <PlusCircleOutlined/> Add car record
                    </Button><br/><br/>
                    <Tag>Number of Patients</Tag>
                    <Badge count={cars.length} className="site-badge-count" />
                </>
            }}
            pagination={{ pageSize:50 }}
            rowKey={ (patient) => patient.id }
        />
    }

    return (
        <Fragment>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item>Cars</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    {/*{renderCars()}*/}
                </div>
            </Content>
        </Fragment>
    );
};

export default Cars;