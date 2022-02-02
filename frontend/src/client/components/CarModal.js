import React from 'react';
import Modal from "antd/es/modal/Modal";
import {IoPeopleCircleOutline} from "react-icons/io5";
import {GiAutoRepair, GiGymBag} from "react-icons/gi";
import styled from "styled-components";

const CarModal = ({isModalVisible, handleOk,handleCancel, title,img, description  }) => {
    return (
        <ModalContainer>
            <Modal className="car-modal" title={title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
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
            </Modal>
        </ModalContainer>

    );
};

const ModalContainer = styled.section`
    .ant-modal-body{
      display: none !important;
      .carDetails{
        background-color: red;
      }
    }
`;


export default CarModal;