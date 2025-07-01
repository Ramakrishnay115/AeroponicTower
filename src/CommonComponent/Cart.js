import React, {useState} from 'react'
import { Row, Col, Input, Button, Card, Flex, Rate } from "antd";
import {Link} from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";  
import t1 from "../images/tower1.webp";


export default function Cart() {
  const [count, setCount] = useState(0); // initial value is 0
  
      const handleIncrement = () => {
          setCount(count + 1);
      };
  
      const handleDecrement = () => {
          setCount(count - 1); // prevent count from going below 0
      };
  
  return (
    <div>
      <Card style={{ width: "100%", height: "50px",}}>
                      <Col>
                                       <Link to={{pathname:"/Tower1"}}><IoMdArrowRoundBack style={{fontSize:"35px",fontWeight:"700"}} /></Link>
                                       
                                   </Col>
                 </Card>
                 <Card style={{ width: "80%", left: "10%",border: "0px", marginTop: "50px" }}>
                         <Row  >
                             <Col span={4} ><img src={t1} alt="" style={{ width: "150px", height: "150px", }} /></Col>
                             <Col span={16} ><h1 style={{ color: "#000", fontSize: "30px", fontWeight: "700", marginTop: "10px" }}> Aeroponic Tower </h1>
                                 <p style={{ color: "red", marginTop: "10px", fontSize: "20px", fontWeight: "700" }}> price : $XXX</p>
                                 <Row >
                                     <Col><Button style={{ fontSize: "20px", border: "0px", borderRadius: "10px 0px 0px 10px" }} onClick={handleDecrement} disabled={count === 0 ? true : false}> - </Button></Col>
                                     <Col><Button style={{ fontSize: "20px", border: "0px" }} > {count}</Button></Col>
                                     <Col><Button style={{ fontSize: "20px", border: "0px", borderRadius: " 0px 10px 10px 0px" }} onClick={handleIncrement} disabled={count === 10 ? true : false}> + </Button></Col>
                                 </Row>
                             </Col>
                             <Col span={4} ><Button style={{ width: "auto", backgroundColor: "blue",color:"white", top:"50%",left:"0%"}}>proceed to pay</Button>
                              </Col>
                         </Row>
                     </Card>
    </div>
  )
}
