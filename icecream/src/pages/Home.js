import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Map from "../components/Map";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from "react-bootstrap";





function Home() {
    return (
        <div>

            <Header />
            <Row>
                <Col style={{height:"580px"}}>
                    <Map />
                </Col>
                <Col>
                </Col>
            </Row>
            <Footer />

        </div>

    );

}


export default Home;