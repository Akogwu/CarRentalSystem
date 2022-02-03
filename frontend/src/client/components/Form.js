import React, {useEffect, useState} from 'react';
import styled from "styled-components";
// import SearchDrawer from "./SearchDrawer";
import {getApi} from "../../api/clientApi";

const Form = ({onSearchCars}) => {
    // const [open, setOpen] = useState(false);
    const [brands, setBrands] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedModel, setSelectedModel] = useState('');

    useEffect( () => {
        loadBrandsAndModel();
    },[])

    const loadBrandsAndModel = () => {
        getApi("/brands").then( response => {
            setBrands(response.data)
        }).catch( error => {
            console.log(error);
        });
    }

    const searchCars = () => {
        onSearchCars(selectedModel, selectedBrand);
    }

    // const setOpenDrawer = () => {
    //     setOpen(true);
    // }

    // const setCloseDrawer = () => {
    //     setOpen(false);
    // }

    return (
        <FormContainer>
            <div className="search">
                <form action="" className="search-form">
                    <div className="form-fields">
                        <div className="brand-models">
                            <div className="group">
                                <label htmlFor="brands" className="visually-hidden">Brand</label>
                                <select name="brand" id="brands" onChange={(e) => {
                                    setSelectedBrand(e.target.value);
                                }}>
                                    <option value="">Select Brand</option>
                                    { brands.map( brand => <option key={brand.id} value={brand.name}>{brand.name}</option> ) }
                                </select>
                            </div>
                            <div className="group">
                                <label htmlFor="models" className="visually-hidden">Model</label>

                                <select name='model' onChange={(e) => {
                                    setSelectedModel(e.target.value);
                                }}>
                                    <option value="">Select Model</option>
                                    <option value="SUV">SUV</option>
                                    <option value="TRUCK">TRUCK</option>
                                    <option value="SEDAN">SEDAN</option>
                                </select>

                            </div>
                        </div>
                        <div className="search-input">
                            <div className="group">
                                <label htmlFor="keyword" className="visually-hidden">Keyword</label>
                                <input type="search" name="keyword" className="search-keyword" placeholder="What car do you want?"/>
                            </div>
                        </div>
                    </div>
                    <div className="submit-button">
                        <button type="button" onClick={ () => searchCars() }>Search cars</button>
                    </div>
                </form>
            </div>
            {/*<SearchDrawer NavbarRef={null} closeDrawer={setCloseDrawer} openDrawer={setOpenDrawer} open={open}/>*/}
        </FormContainer>
    );
};


const FormContainer = styled.div`
    
      position: absolute;
      bottom: 0.54rem;
      width: 50%;
  
    .search{
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius:0.5rem;
      gap: 1rem;
      
      .search-form{
        display: flex;
        gap: 0.7rem;
        justify-content: space-between;
        .form-fields{
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          
          input{
            border: 0.5px solid #ddd;
            background-color: #fff;
            padding: 0.5rem;
            width: 100%;
            
            &:focus{
              outline: none;
            }
          }
          
          .brand-models{
            display: flex;
            gap: 0.5rem;
          }
        }
      }
      
      .submit-button{
        button{
          padding: 2rem;
          border: 0;
          outline: none;
          background-color: #444444;
          color: #fff;
          font-size: 1.5rem;
          font-weight: 400;
        }
        
      }
    }
`;

export default Form;
