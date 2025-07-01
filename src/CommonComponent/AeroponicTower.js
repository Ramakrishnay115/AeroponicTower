import React, { useState } from 'react';
import "./Home.css";
import logo from "../images/Aeroponiclogoimage.png";
import { Row, Col, Input, Button, Card, Flex, Rate } from "antd";
import { FaUserCircle, FaShoppingCart, FaBell } from "react-icons/fa";
import { Link, } from 'react-router-dom';
import { Carousel } from 'antd';
import t1 from "../images/tower1.webp";
import t2 from "../images/tower1.1.webp";
import t3 from "../images/tower1.3.webp";
import t4 from "../images/tower1.4.webp";
import t5 from "../images/tower1.5.webp";
import t6 from "../images/tower1.7.webp";
import { Center } from '@guruhotel/aura-ui';
import {IoMdArrowRoundBack } from "react-icons/io";

const { Search } = Input;

const contentStyle = {
    height: '450px',
    color: "#000",
    margin: 0,
    //   width: "250px",
    // lineHeight: '160px',
    textAlign: 'center',
    // background: '#364d79',
    borderRadius: "10px",
    // border: "3px solid grey"
};
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
export default function AeroponicTower() {
    const [value, setValue] = useState(3);
    const [cart, setCart] = useState(false);
    const [count, setCount] = useState(0); // initial value is 0

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1); // prevent count from going below 0
    };

    return (
        <div>
  
                    <div
                        style={{
                            backgroundColor: "#ffff",
                            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
                            borderRadius: "0px",
                            position: "sticky",
                            width: "100%",
                            zIndex: 100,
                            marginTop: "0px",
                            padding: "0px 0px",
                        }}
                        hoverable
                    >
                        <Row>
                            <Col span={8}>
                                <Link to={{pathname:"/Home"}}><img className="Logo" src={logo} alt="Logo" /></Link>
                            </Col>
                            <Col span={12}>
                                <Search className="Search" placeholder="Search" enterButton={<Button type="primary" className="custom-button">Search</Button>} size="large" loading />

                            </Col>
                            <Col span={4}>
                                <Row justify="center">
                                    <Col span={4}><FaBell className="Icon" /></Col>
                                    <Col span={4}><Link to={{ pathname: "/cart" }}><FaShoppingCart className="Icon" /></Link></Col>
                                    <Col span={4}><Link to={{ pathname: "/profile" }}><FaUserCircle className="Icon" /></Link></Col>
                                </Row>
                            </Col>
                        </Row>

                    </div>
                    <Row>
                        <Col span={8} >
                            <Card style={{ marginLeft: "100px", marginTop: "50px", width: "450px", padding: "0px 0px", }}>
                                <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={2000}>
                                    <div>
                                        <img src={t1} alt="" style={contentStyle} />
                                    </div>
                                    <div>
                                        <img src={t2} alt="" style={contentStyle} />
                                    </div>
                                    <div>
                                        <img src={t3} alt="" style={contentStyle} />
                                    </div>
                                    <div>
                                        <img src={t4} alt="" style={contentStyle} />
                                    </div>
                                    <div>
                                        <img src={t5} alt="" style={contentStyle} />
                                    </div>
                                    <div>
                                        <img src={t6} alt="" style={contentStyle} />
                                    </div>
                                </Carousel>

                            </Card>
                        </Col>
                        <Col span={16}>
                            <Card style={{ marginLeft: "100px", marginTop: "50px", padding: "0px 0px", border: "0px" }}>

                                <h1 style={{ color: "#000", fontSize: "35px", fontWeight: "700" }}> Aeroponic Tower </h1>
                                <p style={{ color: "red", marginTop: "10px", fontSize: "25px", fontWeight: "700" }}> price : $XXX</p>
                                <Flex style={{ marginTop: "15px" }} gap="middle" vertical>
                                    <Rate tooltips={desc} onChange={setValue} value={value} />
                                    {value ? <span>{desc[value - 1]}</span> : null}
                                </Flex>
                                <Row >
                                    <Col><Button style={{ fontSize: "20px", border: "0px", borderRadius: "10px 0px 0px 10px" }} onClick={handleDecrement} disabled={count === 0 ? true : false}> - </Button></Col>
                                    <Col><Button style={{ fontSize: "20px", border: "0px" }} > {count}</Button></Col>
                                    <Col><Button style={{ fontSize: "20px", border: "0px", borderRadius: " 0px 10px 10px 0px" }} onClick={handleIncrement} disabled={count === 10 ? true : false}> + </Button></Col>
                                    <Col><Link to={{pathname:"/Cart"}}><Button style={{ backgroundColor: "black", color: "white", marginLeft: "30px", borderRadius: " 20px " }} onClick={() => setCart(true)} disabled={count === 0 ? true : false} >ADD TO CART</Button></Link></Col>
                                </Row>

                                {count === 10 ? <span style={{ color: "red" }}> Limit Qyt: 10</span> : ""}
                                <Col ><h1 style={{ marginTop: "20px", fontSize: "40px" }}> Product Summary</h1></Col  >
                                <span style={{ fontSize: "20px", fontWeight: "500" }}>The Aeroponic Tower system allows you to grow more in less space. In just a few weeks, you can harvest up to 20 of your favorite vegetables, herbs, and flowers—from seed to plate—without using soil. Thanks to its patented aeroponic technology, this system uses significantly less water and electricity. Designed for both indoor and outdoor use, the Aeroponic Tower is self-watering and highly versatile. By adding optional LED grow lights, you can enjoy fresh, healthy produce year-round. Plus, with available extension kits, the system easily expands to meet the needs of larger households.</span>
                            </Card>
                        </Col>
                    </Row>
                 
        </div>
    )
}
