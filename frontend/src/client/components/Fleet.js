import React from 'react';
import styled from "styled-components";
import {IoPeopleCircleOutline} from "react-icons/io5";
import {GiAutoRepair, GiGymBag} from "react-icons/gi";

const Fleet = ({ img, brand, model, description }) => {
    return (
        <FleetCard>
            <div className="card">
                <div className="car">
                    <img src={img} alt={ brand+" "+model }/>
                </div>
                <div className="content">
                    <h3 className="title">{brand+" "+model}</h3>
                    <p className="description">{description}</p>
                    <ul className="specification">
                        <li> <IoPeopleCircleOutline/> 4 people </li>
                        <li> <GiGymBag/> 3 bag </li>
                        <li> <GiAutoRepair/> authomatic </li>
                    </ul>
                    <button className="select-button">
                        Select car
                    </button>
                </div>
            </div>
        </FleetCard>
    );
};

const FleetCard = styled.div`
    position: relative;
    flex: 1;
  
  
  .card{
    background-color: #F2F2F2;
    padding: 1px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .car{
      img{
        position: absolute;
        width: 100%;
        top: -8rem;
      }
      
    }
    
    .content{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem;
      
      .title{
        color: #444444;
        font-size: 2rem;
        font-weight: 500;
        text-align: center;
        
      }
      
      .select-button{
        border: 0;
        outline: none;
        padding: 0.4rem;
        background-color: #747474;
      }
      
      .specification{
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        
      }
      
    }
  }
`;
export default Fleet;