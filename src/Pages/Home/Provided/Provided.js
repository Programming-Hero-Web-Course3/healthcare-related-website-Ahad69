import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Provided.css'

const Provided = () => {
    return (
        <div className="mt-5 mb-5">
            <h1 className="m-5 text-danger fw-bold">We Provided You :</h1>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    height="600px"
                    src="https://www.crouse.org/wp-content/uploads/2018/05/surgicalservices_feat.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption className="provide">
                    <h3>Surgical Services : </h3>
                    <p>Surgical services are the most spectacularly visible function of the hospital. In a general hospital, all branches</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    height="600px"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOlV_jODFXc0K2_D0VAMurMrZGCkDTMoJrKcqfi4gFXxPZI1wsJYtz6aAAC9MWYaQI6I&usqp=CAU"
                    alt="Second slide"
                    />
                    <Carousel.Caption className="provide">
                    <h3>Obstetrical Services</h3>
                    <p>Obstetrical services are also organised like other department with policies and procedures peculiar to its requirement</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="600px"
                    src="https://www.caremountmedical.com/wp-content/uploads/2018/11/CareerServices_Anesthesia-01.png"
                    alt="Third slide"
                    />
                    <Carousel.Caption className="provide">
                    <h3>Anesthesiology Services : </h3>
                    <p>Anesthesiology service is the least visible service in a hospital, but as important as others. Apart from the high professional knowledge</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="600px"
                    src="https://www.pharmaceutical-technology.com/wp-content/uploads/sites/10/2020/10/Laboratory-Services-900x600.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption className="provide">
                    <h3>Laboratory Services :</h3>
                    <p>Services appropriate to the need of the hospital should be available, conducted and supervised by competent technicians and pathologists respectively</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="600px"
                    src="https://cdn.openpr.com/T/1/T109857103_g.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption className="provide">
                    <h3>Radiology Services</h3>
                    <p>Facilities, including the number of radiographic machines must be adequate to meet the requirement of the diagnostic and therapeutic procedures</p>
                    </Carousel.Caption>
                </Carousel.Item>
    
            </Carousel> 

        </div>
    );
};

export default Provided;