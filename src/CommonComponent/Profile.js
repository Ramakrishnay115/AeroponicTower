import React ,{useState,} from 'react';
import "./profile.css";
import { Input, Card,Row, Col , Upload,Form,Select, Button,} from 'antd';
import {IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import ImgCrop from 'antd-img-crop';

// import 'antd/dist/antd.min.css'; // Make sure to import Ant Design CSS



export default function Profile() {
   const [fileList, setFileList] = useState([
   
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  
  return (
    <div >
         <Row gutter={[10, 40]}>
        <Col span={8} style={{paddingTop:"40px",paddingLeft:"40px"}} >
           <Card style={{  border:"2px solid #F5F5DC",borderRadius:"15px",boxShadow:"5px 5px 15px  #F5F5DC",}}> 
              
              <Col>
                  <Link to={{pathname:"/Home"}}><IoMdArrowRoundBack style={{fontSize:"35px",fontWeight:"700"}} /></Link>
                   <p>Back</p>
              </Col>
             <Row justify={"center"}>
                   <Col span={8}>
                   <ImgCrop rotationSlider >
             <Upload style={{width:"155px",height:"155px",justifyContent: "center",alignItems:"center",position:"relative"}} 
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" // mock API
                 listType="picture-card"
                  fileList={fileList}
                 onChange={onChange}
          // onPreview={onPreview: false}
                showUploadList={{ showPreviewIcon: false }}
        >
          {fileList.length < 1 && '+ Upload'}
        </Upload>
      </ImgCrop>
          </Col>
                   </Row>
      <Card style={{marginTop:"70px"}}>
        <h1 style={{textAlign:"center",color:"#0077C8",fontWeight:"900",fontSize:"30px"}}>Profile</h1>
         <Form>
          <span >First Name</span>
             <Form.Item  name="First_Name">
             <Input />
             </Form.Item>
             <span >Last Name</span>
              <Form.Item name="Last_Name">
             <Input />
             </Form.Item>
              <span >Email</span>
             <Form.Item  name="Email">
             <Input />
             </Form.Item>
             <span >Phone Number</span>
             <Form.Item name="Phone_Number">
             <Input />
             </Form.Item>
              <span >Gender</span>
              <Form.Item name="Gender">
          <Select>
            <Select.Option value="Male">Male</Select.Option>
            <Select.Option value="Female">Female</Select.Option>
            <Select.Option value="Other">Other</Select.Option>
          </Select>
        </Form.Item>
         <Row justify="center">
          <Col >
        <Button name="submit" style={{backgroundColor:"#0077C8",width:"100px",color:"white"}}>submit</Button>
          </Col>
         </Row>
        </Form>
      </Card>
          </Card>
          </Col>


          <Col span={16} style={{paddingTop:"40px",paddingRight:"40px"}}>
            <Row gutter={[10,10]}>
              <Col span={12}>
              <Card   style={{ height:"370px" , border:"2px solid #F5F5DC",borderRadius:"15px",boxShadow:"5px 5px 15px  #F5F5DC",color:"#000"}}>
                <h2 style={{color:"#000"}}>Orders</h2>
              </Card>
              </Col><Col span={12}>
              <Card   style={{ height:"370px", border:"2px solid #F5F5DC",borderRadius:"15px",boxShadow:"5px 5px 15px  #F5F5DC",}}>
                <h2 style={{color:"#000"}}>About Us</h2>
              </Card>
              </Col>
            </Row>
            <Row gutter={[10,10]} style={{marginTop:"10px"}}>
              <Col span={12}>
              <Card   style={{ height:"370px", border:"2px solid #F5F5DC",borderRadius:"15px",boxShadow:"5px 5px 15px  #F5F5DC",}}>
                <h2 style={{color:"#000"}}>Contact us</h2>
              </Card>
              </Col><Col span={12}>
              <Card   style={{ height:"370px", border:"2px solid #F5F5DC",borderRadius:"15px",boxShadow:"5px 5px 15px  #F5F5DC",}}>
                <h2 style={{color:"#000"}}>Social Media</h2>
              </Card>
              </Col>
            </Row>
          
          </Col>
         </Row>
        
    </div>
  )
}
