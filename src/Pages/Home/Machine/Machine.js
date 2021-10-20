import React from 'react';
import { Carousel } from 'react-bootstrap';

const Machine = () => {
    return (
        <div className="machine mt-5">
            <h1 className="m-5 text-danger fw-bold">We have a  lot of Equipments :</h1>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100 "
                    src="https://www.news-medical.net/image.axd?picture=2017%2F7%2F2.jpg"
                    height="600px"
                    alt="First slide"
                    />
            
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    height="600px"
                    src="https://www.getinge.com/siteassets/solutions-c2.0/operating-room/anesthesia/flow-c-r_750x500_rigth2.jpg/constrain-555x360--1162931558.jpg"
                    alt="Second slide"
                    />
          
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="600px"
                    src="https://5.imimg.com/data5/KD/BP/MY-36399318/desk-type-autoclave-sterilizer-500x500.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="600px"
                    src="https://www.kinghawkmed.com/uploads/201816430/instruments-clinical-chemistry-analyzer21214830796.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="600px"
                    src="https://www.researchgate.net/publication/334135336/figure/fig1/AS:780247922405376@1563037009275/Composition-of-the-mobile-C-arm-system-The-mobile-C-arm-consists-of-a-curved-arm-with-an.png"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="600px"
                    src="https://www.atlasprosales.com/v/vspfiles/photos/T-CC-180-2T.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="600px"
                    src="https://media.istockphoto.com/photos/close-up-of-a-chemist-using-centrifuge-picture-id538089055?k=20&m=538089055&s=612x612&w=0&h=ogwIJGBLdn5WOLNzYNuio_0sS9dKqDMooZCdaHqzr3k="
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
               
    );
};

export default Machine;