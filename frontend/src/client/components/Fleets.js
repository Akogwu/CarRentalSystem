import React, { useRef } from 'react';
import styled from "styled-components";
import Fleet from "./Fleet";

const Fleets = ({cars, fetching}) => {


    return (
        <FleetSection id='fleetSection'>
            <div className="content container">
                <h2 className="text-uppercase text-center">Meet the fleet</h2>
                <h5 className="text-center text-muted">From SUVs to pickup trucks, wherever you go, we’ve got your ride.</h5>
                <div className="fleets">
                    {
                       cars.length > 0 && cars.map((car,index) =>
                            <Fleet key={index} carId={car.carId} reserveStatus={car.isReserved} img={car.imageCover} brand={car.name} model={car.model} description={car.description} />
                        )
                    }
                </div>
            </div>
        </FleetSection>
    );
};

const FleetSection = styled.div`
    padding: 6rem 0;
    .fleets{
      display: flex;
      gap: 1rem;
      padding: 10rem 0 5rem;
      flex-wrap: wrap
    }
`;

export default Fleets;
