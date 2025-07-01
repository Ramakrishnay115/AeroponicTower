import React, { useState } from 'react';
import { Collapse, Input, Card, Row, Col,Button, } from 'antd';
import "./Home.css";
import image from "../images/image1.png";
import logo from "../images/Aeroponiclogoimage.png";
import o9 from "../images/outline1.png";
import clock from "../images/clock-.png";
import drop from "../images/water_drop.png";
import harvest from "../images/harvest.webp";
import pump from "../images/pump.webp";
import rockwool from "../images/seeds.webp";
import tub from "../images/res.webp";
import tower1 from "../images/tower1.webp";
import tower2 from "../images/tower2.webp";
import tower3 from "../images/tower3.webp";
import tower4 from "../images/tower4.webp";
import tower11 from "../images/tower1.1.webp";
import tower22 from "../images/tower2.2.webp";
import tower33 from "../images/tower3.3.webp";
import tower44 from "../images/tower4.4.webp";

import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaUserCircle, FaShoppingCart, FaBell } from "react-icons/fa";
import { AuraUIProvider, Center } from "@guruhotel/aura-ui";
import { FramerBox, FramerGrid, FramerText } from "./styles.js";
import { AnimatePresence, } from "framer-motion";
import { Link } from 'react-router-dom';


const { Search } = Input;
const data = [
  {
    id: "a",
    description: "Aeroponic Towers Garden plants begin their life in a soft, soilless growing medium called rockwool, which provides roots with ample oxygen and moisture to support fast and healthy development. The Tower Garden kit includes a selection of starter seeds along with clear planting instructions to help you get started. After the seeds germinate and grow into small seedlings, they can be transferred into the Tower Garden system, where you can enjoy watching them flourish.",
    image:  rockwool
  },
  {
    id: "b",
    description: "Reservoir and Nutrient Solution The reservoir that acts as the base of your Tower Garden holds a mixture of Tower Garden Mineral Blend and water. The Mineral Blend is our proprietary plant food and provides Tower Garden plants with healthy nutrients and minerals for the best possible uptake and growth",
    image: harvest
  },
  {
    id: "c",
    description: "Pump, Timer, and Away We Grow! How does it all work? Simply put, it rains inside! A pump in the reservoir pushes the nutrient solution to the top of your Tower Garden. From there, the solution rains down over the plant roots inside the Tower Garden. The automated timer restarts the process regularly, so your plants always get the ideal amount of oxygen, water, and nutrients, with minimal attention required.",
    image: tub
  },
  {
    id: "d",
    description: "Harvest Deliciousness Within a few weeks, your plants are harvest-ready. Other than minor upkeep like checking water levels and keeping the pump filter clean, all you need to do is wait. And while your plants are growing, you can think about how you’ll use them or what you’ll plant next.",
    image: pump
  }
];


const List = ({ selectedId, setSelectedId }) => (
  <FramerGrid columns="4" css={{ gap: "$5" }}>
    {data.map((item) => (
      <FramerBox
        key={item.id}
        onClick={() =>
          setSelectedId(selectedId === item.id ? undefined : item.id)
        }
        layoutId={`card-container-${item.id}`}
        css={{
          // height: "250px",
          p: "$3",
          _hover: { cursor: "pointer" }
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{ width: "100%", height: "300px",  }}
        />
        <FramerText layoutId={`card-text-container-${item.id}`}>
          {item.title}
        </FramerText>
      </FramerBox>
    ))}
  </FramerGrid>
);

const Item = ({ id, setSelectedId }) => {
  const item = data.find((d) => d.id === id);
  if (!item) return null;

  return (
    <FramerBox
      onClick={() => setSelectedId(undefined)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
      transition={{ duration: 0.6 }}
      layoutId={`card-container-${id}`}
      css={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "320px",
        backgroundColor: "#d1f5d3",
        p: "$5",
        _hover: { cursor: "pointer" }
      }}
    >
      <FramerGrid columns="2" css={{ gap: "$10" }}>
        <FramerBox css={{ textAlign: "start" }}>
          <FramerText
            layoutId={`card-text-container-${id}`}
            css={{ fontWeight: "bold", fontSize: "40px"  }}
          >
            {item.title}
          </FramerText>
          <FramerText
            css={{
              whiteSpace: "pre-wrap",
              lineHeight: "35px", // approx. 2px between lines if font size is ~20px
              mt: "$2",
              fontWeight:"500"
            }}
          >
            {item.description}
          </FramerText>
        </FramerBox>
        <Center>
          <img
            src={item.image}
            alt={item.title}
            style={{ width: 350, height: 250, objectFit: "contain" }}
          />
        </Center>
      </FramerGrid>
    </FramerBox>
  );
};


const text1 = `Aeroponic towers deliver nutrients directly to plant roots, accelerating growth and increasing yields by up to 30% over traditional methods.`;
const text2 = `Aeroponic towers boost plant development by misting roots with oxygen and nutrients, helping crops grow up to three times faster than in soil.`;
const text3 = `Aeroponic towers use a fine mist to supply water and nutrients efficiently, reducing water usage by up to 98% while promoting strong, healthy growth.`;

const Home = () => {
  const [selectedId, setSelectedId] = useState(undefined);
  const [imgIsActive1, setImgIsActive1] = useState(false);
  const [imgIsActive2, setImgIsActive2] = useState(false);
  const [imgIsActive3, setImgIsActive3] = useState(false);
  const [imgIsActive4, setImgIsActive4] = useState(false);
  return (
    <div className="body">
      <div
        style={{
          backgroundColor: "#ffff",
          boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
          borderRadius: "0px",
          position: "fixed",
          width: "100%",
          zIndex: 100,
          marginTop: "0px",
          padding:"0px 0px"
        }}
        hoverable
      >
        <Row>
          <Col span={8}>
            <Link to={{pathname:"/Home"}}><img className="Logo" src={logo} alt="Logo" /></Link>
          </Col>
          <Col span={12}>
               <Search  className="Search" placeholder="input search text" enterButton={<Button type="primary" className="custom-button">Search</Button>} size="large" loading />

          </Col>
          <Col span={4}>
            <Row justify="center">
              <Col span={4}><FaBell className="Icon" /></Col>
              <Col span={4}><Link to={{pathname:"/cart"}}><FaShoppingCart className="Icon" /></Link></Col>
              <Col span={4}><Link to={{pathname:"/profile"}}><FaUserCircle className="Icon" /></Link></Col>
            </Row>
          </Col>
        </Row>
      </div>

      <Card >
        <div className="scrolling-wrapper">
          <div className="scrolling-text">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {Array.from({ length: 9 }).map((_, index) => (
                  <span className="deal" key={`${i}-${index}`}>
                    Deals of the day &copy;&nbsp;
                  </span>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Card>

      <Card style={{ paddingTop: "0px", border: "0px" }}>
        <img style={{ width: "100%", height: "auto" }} src={image} alt="Main" />
      </Card>

      <h1 style={{ padding: "10px 10px", textAlign: "center", color: "#0077C8", fontWeight: "800" ,fontSize:"45px"}}>
        Clean, Green, and Vertical: Benefits of Aeroponic Towers
      </h1>
      <p style={{ textAlign: "center", paddingBottom: "30px" ,fontWeight:"600",fontSize:"22px"}}>
        Aeroponic towers are soil-free, vertical farming systems that use nutrient-rich mist to grow plants faster with<br />
        up to 95% less water. Ideal for urban spaces, they produce higher yields with minimal land, no pesticides,<br />
        and low maintenance offering a clean, sustainable way to grow fresh food anywhere.
      </p>

      <Card style={{ padding: "0px 20px", border: "none" }}>
        <Row>
          <Col span={8} style={{ padding: "10px" }}>
            <Collapse
              size="large"
              className="collapse1"
              items={[{
                key: '1',
                label: 'Achieve 30% Higher Yield',
                children: (
                  <div>
                    <img src={o9} alt="30% Higher Yield" className="imgstyle" />
                    <p className="my_text" style={{ marginBottom: "0px",height:"100px" }}>{text1}</p>
                  </div>
                )
              }]}
            />
          </Col>
          <Col span={8} style={{ padding: "10px" }}>
            <Collapse
              size="large"
              className="collapse2"
              items={[{
                key: '1',
                label: '3x Growth Rate',
                children: (
                  <p className="my_text">
                    <img src={clock} className="imgstyle" alt="3x Growth" />
                    {text2}
                  </p>
                )
              }]}
            />
          </Col>
          <Col span={8} style={{ padding: "10px" }}>
            <Collapse
              size="large"
              className="collapse3"
              items={[{
                key: '1',
                label: '98% Water Savings',
                children: (
                  <p className="my_text">
                    <img src={drop} className="imgstyle" alt="Water Saving" />
                    {text3}
                  </p>
                )
              }]}
            />
          </Col>
        </Row>
      </Card>

      <AuraUIProvider>
  <FramerBox css={{ textAlign: "center" }}>
    <FramerBox css={{ position: "relative", mx: "$4" }}>
      <List selectedId={selectedId} setSelectedId={setSelectedId} />
      <AnimatePresence>
        {selectedId && (
          <Item id={selectedId} setSelectedId={setSelectedId} key="item" />
        )}
      </AnimatePresence>
    </FramerBox>
  </FramerBox>
</AuraUIProvider>
    <h1 style={{textAlign:"center",fontWeight:"800",color:"#0077C8",marginTop:"50px"}}>Take a look at our Towers!</h1>
      <Card style={{border: "0px"}}>
        <Row>
          <Col span={6} style={{cursor:"pointer"}}>
          {imgIsActive1===false?<img src={tower1} onMouseOver={()=>setImgIsActive1(true)} alt=''/>:<Link to={{pathname:"/Tower1"}} ><img src={tower11}onMouseLeave={()=>setImgIsActive1(false)} alt='' /></Link>}
          <h4 className="tower_title ">  Aeroponic Tower</h4>
          <p className="tower_price">$XXX</p>
          </Col>
          <Col span={6} style={{cursor:"pointer"}}>
          {imgIsActive2===false?<img src={tower2} onMouseOver={()=>setImgIsActive2(true)} alt=''/>:<img src={tower22}onMouseLeave={()=>setImgIsActive2(false)} alt=''/>}
          <h4 className="tower_title "> Portable Aeroponic Tower</h4>
          <p className="tower_price">$XXX</p></Col>
          <Col span={6} style={{cursor:"pointer"}}>
          {imgIsActive3===false?<img src={tower3} onMouseOver={()=>setImgIsActive3(true)} alt=''/>:<img src={tower33}onMouseLeave={()=>setImgIsActive3(false)} alt=''/>}
          <h4 className="tower_title "> Family Aeroponic Tower</h4>
          <p className="tower_price">$XXX</p></Col>
          <Col span={6} style={{cursor:"pointer"}}>
          {imgIsActive4===false?<img src={tower4} onMouseOver={()=>setImgIsActive4(true)} alt=''/>:<img src={tower44}onMouseLeave={()=>setImgIsActive4(false)} alt='' />}
          <h4 className="tower_title "> Cage Aeroponic Tower</h4>
          <p className="tower_price">$XXX</p></Col>
        </Row>
      </Card>
      <Card style={{padding:"20px",marginTop:"5px", backgroundColor:"#F5F5DC",borderRadius:"0px"}} >
                 <Row justify="space-around" align="middle" >
                  <Col span={2}> <p className="footer"> Connect </p></Col>
                 <Col span={3}> <p  className="footer"> Help & Support </p></Col>
                  <Col span={4}><p  className="footer"> Terms & conditions</p></Col>
                 <Col span={3}><p  className="footer"> support </p></Col>
                 </Row>
      </Card>
      
    </div>
  );
};

export default Home;
