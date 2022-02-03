import React, { useEffect } from 'react';
import Modal from "antd/es/modal/Modal";
import {IoPeopleCircleOutline} from "react-icons/io5";
import {GiAutoRepair, GiGymBag} from "react-icons/gi";
import {DatePicker, Form, Input, notification} from "antd";
import {postApi} from "../../api/clientApi";
const { RangePicker } = DatePicker;


const CarModal = ({isModalVisible,handleCancel, title,img, description,carId  }) => {
    const [form] = Form.useForm();

    const customerId = localStorage.getItem("userId");

    useEffect(()=>{
        console.log(carId);
        form.setFieldsValue({
            "carId":carId,
        })
        form.setFieldsValue({
            "customerId":customerId,
        
        })
    },[])

    const successNotification = () => {
        notification["success"]({
            message:"your reservation was successful",
            description:"The vehicle will be available for pickup"
        });
    }

    const onFinish = async (values: any) => {
        const pickupDate = values.reserve_date[0];
        const returnDate = values.reserve_date[1];
        const data = {
            "pickupDate": pickupDate,
            "returnDate": returnDate,
            "customerId":values.customerId,
            "carId":values.carId
        }
        try {
            postApi("/reservations",data).then(response => {
                successNotification();
            }).catch( error => console.log(error()))

        } catch (e) {
            console.log(e);
        }

    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
            <Modal
                className="car-modal" title={title}
                visible={isModalVisible}
                okText="Reserve"
                onOk={form.submit}
                onCancel={handleCancel}
            >

                <div className="carDetails">
                    <div className="car">
                        <img src={img} alt="car" style={{ width:"100%" }}/>
                    </div>
                    <div className="content">
                        <ul className="specification">
                            <li> <IoPeopleCircleOutline/> 4 people </li>
                            <li> <GiGymBag/> 3 bag </li>
                            <li> <GiAutoRepair/> automatic </li>
                        </ul>
                        <p className="description">{description}</p>
                    </div>
                </div>
                <div className="request_date" style={{ padding:"1rem",display:"flex" , flexDirection:"column", justifyContent:"center", backgroundColor:"rgba(123,179,234,0.22)"}}>
                    <h6>Please select pickup and return dates for this vehicle</h6>
                    <Form layout="vertical"
                          hideRequiredMark
                          onFinish={onFinish}
                          onFinishFailed={onFinishFailed}
                          form={form}
                    >
                        <Form.Item name="customerId" hidden={true}>
                            <Input value="1"/>
                        </Form.Item>
                        <Form.Item name="carId" hidden={true}>
                            <Input value="1"/>
                        </Form.Item>
                        <Form.Item name="reserve_date">
                            <RangePicker style={{ width: "100%" }}  placeholder={["Pickup date","Return date"]} format="YYYY-MM-DD"/>
                        </Form.Item>

                    </Form>

                </div>
            </Modal>

    );
};



export default CarModal;