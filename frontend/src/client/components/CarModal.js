import React from 'react';
import Modal from "antd/es/modal/Modal";
import {IoPeopleCircleOutline} from "react-icons/io5";
import {GiAutoRepair, GiGymBag} from "react-icons/gi";
import {DatePicker, Form, Input, notification} from "antd";
const { RangePicker } = DatePicker;


const CarModal = ({isModalVisible,handleCancel, title,img, description  }) => {
    const [form] = Form.useForm();
    const onFinish = async (values: any) => {

        const pickupDate = values.reserve_date[0].format();
        const returnDate = values.reserve_date[1].format();
        console.log(pickupDate,returnDate);

        const data = {
            "pickupDate": pickupDate,
            "returnDate": returnDate,
        }
        try {


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
                        <Form.Item name="reserve_date">
                            <RangePicker style={{ width: "100%" }}  placeholder={["Pickup date","Return date"]} format="YYYY-MM-DD"/>
                        </Form.Item>

                    </Form>

                </div>
            </Modal>

    );
};



export default CarModal;