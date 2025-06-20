import React, { useState } from 'react';
import { Collapse, Input, Card, Row, Col } from 'antd';
import "./Home.css";
import image from "../images/image1.png";
import logo from "../images/Aeroponiclogoimage.png";
import o9 from "../images/outline1.png";
import clock from "../images/clock-.png";
import drop from "../images/water_drop.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaUserCircle, FaShoppingCart, FaBell } from "react-icons/fa";
import { AuraUIProvider, Center } from "@guruhotel/aura-ui";
import { FramerBox, FramerGrid, FramerText } from "./styles.js";
import { AnimatePresence } from "framer-motion";

const { Search } = Input;

const List = ({ selectedId, setSelectedId }) => (
  <FramerGrid columns="2" css={{ gap: "$4" }}>
    {Array.from(Array(4).keys()).map((element, index) => (
      <FramerBox
        key={index}
        onClick={() => setSelectedId(selectedId === index ? undefined : index)}
        layoutId={`card-container-${index}`}
        css={{
          p: "$4",
          bg: "$darkie4",
          _hover: {
            cursor: "pointer"
          }
        }}
      >
        <FramerText layoutId={`card-text-container-${index}`}>
          Box {element}
        </FramerText>
      </FramerBox>
    ))}
  </FramerGrid>
);

const Item = ({ id, setSelectedId }) => (
  <FramerBox
    onClick={() => setSelectedId(undefined)}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.6 } }}
    transition={{ duration: 0.6 }}
    layoutId={`card-container-${id}`}
    css={{
      p: "$4",
      px: "$4",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      bg: "$darkie4",
      _hover: {
        cursor: "pointer"
      }
    }}
  >
    <FramerGrid columns="3" css={{ gap: "$10" }}>
      <FramerBox css={{ textAlign: "start" }}>
        <FramerText layoutId={`card-text-container-${id}`}>
          Box {id}
        </FramerText>
        <FramerText noOfLines="4" css={{ border: "1px solid green", p: "$2" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </FramerText>
      </FramerBox>
      <Center css={{ size: 150, bgColor: "$red9" }}>
        <FramerText>Box {id}</FramerText>
      </Center>
    </FramerGrid>
  </FramerBox>
);

const text1 = `Aeroponic towers deliver nutrients directly to plant roots, accelerating growth and increasing yields by up to 30% over traditional methods.`;
const text2 = `Aeroponic towers boost plant development by misting roots with oxygen and nutrients, helping crops grow up to three times faster than in soil.`;
const text3 = `Aeroponic towers use a fine mist to supply water and nutrients efficiently, reducing water usage by up to 98% while promoting strong, healthy growth.`;

const Home = () => {
  const [selectedId, setSelectedId] = useState(undefined);

  return (
    <div className="body">
      <Card
        style={{
          boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
          borderRadius: "0px",
          position: "fixed",
          width: "100%",
          zIndex: 100,
          marginTop: "0px"
        }}
        hoverable
      >
        <Row>
          <Col span={8}>
            <img className="Logo" src={logo} alt="Logo" />
          </Col>
          <Col span={12}>
            <Search className="Search" placeholder=" Search " allowClear />
          </Col>
          <Col span={4}>
            <Row justify="center">
              <Col span={4}><FaBell className="Icon" /></Col>
              <Col span={4}><FaShoppingCart className="Icon" /></Col>
              <Col span={4}><FaUserCircle className="Icon" /></Col>
            </Row>
          </Col>
        </Row>
      </Card>

      <Card>
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

      <h1 style={{ padding: "10px 10px", textAlign: "center", color: "#0077C8", fontWeight: "800" }}>
        Clean, Green, and Vertical: Benefits of Aeroponic Towers
      </h1>
      <p style={{ textAlign: "center", paddingBottom: "30px" }}>
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
                    <p className="my_text" style={{ marginBottom: "0px" }}>{text1}</p>
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
                {typeof selectedId !== "undefined" && (
                  <Item id={selectedId} setSelectedId={setSelectedId} key="item" />
                )}
              </AnimatePresence>
            </FramerBox>
          </FramerBox>
        </AuraUIProvider>
      
    </div>
  );
};

export default Home;
