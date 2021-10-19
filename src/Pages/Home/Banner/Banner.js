import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
const fisrtImg = "https://i.ibb.co/WgRzpFq/young-handsome-physician-medical-robe-with-stethoscope-1.jpg"
const secondImg ="https://i.ibb.co/W2vMMVS/weight-loss-doctor-1.jpg"
const thirdImg = "https://i.ibb.co/V3Dzmwp/Preventive-medicine-1.jpg"

const Banner = () => {
    return (
        <div className="m-0">
            <Carousel fade>
                <Carousel.Item>
                    
                    <img
                    height="800px"
                    className="d-block w-100"
                    src={fisrtImg}
                    alt="First slide"
                    />
                    
                    <Carousel.Caption>
                    <p className="banner-title text-start">Welcome <br /> <span>To Care Hospital Ltd. </span></p>
                    <h2 className="text-dark p-3 caption"> " To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain  in life "</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    height="800px"
                    className="d-block w-100"
                    src={secondImg}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <p className="banner-title text-start">Welcome <br /> <span>To Care Hospital Ltd. </span></p>
                    <h2 className="text-dark p-3 caption">" Eat dark green vegetables at least three to four times a week. Good options include broccoli, peppers,ahad  brussel sprouts "</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    height="800px"
                    className="d-block w-100"
                    src={thirdImg}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <p className="banner-title text-start">Welcome <br /> <span>To Care Hospital Ltd. </span></p>
                    <h2 className="text-dark p-3 caption">" Flexibility is crucial to my fitness. Incorporating a good warm-up and  session decreases my chances of injury "</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;