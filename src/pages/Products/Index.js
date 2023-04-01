import React, { useState } from "react";
import {
  Back,
  Container,
  Page,
  Row,
  Title,
  Paragraph,
  Brand,
  Button,
} from "../../components/common";
import Section from "./Section";
import { BottomSection, Footer, NavBar } from "../../components/Landing";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ImMenu } from "react-icons/im";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleAboutUsClick = () => {
    navigate("/about");
  };

  const handleHowItWorksClick = () => {
    navigate("/how-it-works");
  };

  const handleProductsClick = () => {
    navigate("/products");
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Page>
      <NavBar>
        <Row link alignItems="center">
          <Logo />
          <Brand>S & S Vault</Brand>
        </Row>
        <Row margin="" className="none">
          <Paragraph
            cursor={"pointer"}
            color="#022714"
            fontSize="18px"
            margin="auto 20px"
            onClick={handleHomeClick}
          >
            Home
          </Paragraph>
          <Paragraph
            onClick={handleAboutUsClick}
            cursor={"pointer"}
            color="#02271480"
            fontSize="18px"
            margin="auto 20px"
          >
            About us
          </Paragraph>
          <Paragraph
            onClick={handleProductsClick}
            cursor={"pointer"}
            color="#02271480"
            fontSize="18px"
            margin="auto 20px"
          >
            Products
          </Paragraph>
          <Paragraph
            onClick={handleHowItWorksClick}
            cursor={"pointer"}
            color="#02271480"
            fontSize="18px"
            margin="auto 20px"
          >
            How it works
          </Paragraph>
          <a
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            href="https://app.sandsvault.io/login"
          >
            <Paragraph color="#022714" fontSize="18px" margin="auto 20px">
              Login
            </Paragraph>
          </a>
          <a
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            href="https://app.sandsvault.io/signup"
          >
            <Button color="#00A652" borderRadius="8px">
              Sign Up
            </Button>
          </a>
        </Row>
        <Row className="block width-0">
          <ImMenu onClick={handleShow} />
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <Row link alignItems="center">
                  <Logo />
                  <Brand>S & S Vault</Brand>
                </Row>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Row
                margin=""
                flexDirection="column"
                alignItems="start"
                gap="10px"
              >
                <Paragraph
                  cursor={"pointer"}
                  color="#022714"
                  fontSize="18px"
                  margin="auto 20px"
                >
                  Home
                </Paragraph>
                <Paragraph
                  onClick={handleAboutUsClick}
                  cursor={"pointer"}
                  color="#02271480"
                  fontSize="18px"
                  margin="auto 20px"
                >
                  About us
                </Paragraph>
                <Paragraph
                  onClick={handleProductsClick}
                  cursor={"pointer"}
                  color="#02271480"
                  fontSize="18px"
                  margin="auto 20px"
                >
                  Products
                </Paragraph>
                <Paragraph
                  onClick={handleHowItWorksClick}
                  cursor={"pointer"}
                  color="#02271480"
                  fontSize="18px"
                  margin="auto 20px"
                >
                  How it works
                </Paragraph>
                <a
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  href="https://app.sandsvault.io/login"
                >
                  <Paragraph color="#022714" fontSize="18px" margin="auto 20px">
                    Login
                  </Paragraph>
                </a>
                <a
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  href="https://app.sandsvault.io/signup"
                >
                  <Button color="#00A652" borderRadius="8px">
                    Sign Up
                  </Button>
                </a>
              </Row>
            </Offcanvas.Body>
          </Offcanvas>
        </Row>
      </NavBar>

      <Container
        width="-webkit-fill-available"
        margin="69px"
        justifyContent="flex-start"
      >
        <Title fontWeight="700" margin="46px auto 0">
          Products (Plans and Support Services)
        </Title>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "-webkit-fill-available",
          }}
          className="flex_column"
        >
          <Section
            textAlign="start"
            color="#000"
            width="-webkit-fill-available"
            display="block"
          >
            <ul>
              <Paragraph textAlign="start" color="#000" fontSize="30px">
                Plan A
              </Paragraph>
              <li className="mt-15">5Gb Space</li>
              <li>4 Buddies</li>
              <li> $6.99/month</li>
              OR
              <br />
              <li>$71.00/annually (15% discount for annual subscription)</li>
            </ul>
          </Section>
          <Section
            textAlign="start"
            color="#000"
            width="-webkit-fill-available"
            display="block"
          >
            <ul>
              <Paragraph textAlign="start" color="#000" fontSize="30px">
                Plan B
              </Paragraph>
              <li className="mt-15"> 10Gb Space</li>
              <li> 7 Buddies</li>
              <li> $9.99/month</li>
              OR
              <br />
              <li> $99.00/annually (17% discount for annual subscription)</li>
            </ul>
          </Section>
          <Section
            textAlign="start"
            color="#000"
            width="-webkit-fill-available"
            display="block"
          >
            <ul>
              <Paragraph color="#000" fontSize="30px">
                Plan C
              </Paragraph>
              <li className="mt-15"> 15Gb Space</li>
              <li> $14.99/month</li>
              <li> 10 Buddies</li>
              OR
              <br />
              <li>$135/annually (25% discount for annual subscription)</li>
            </ul>
          </Section>
        </div>
        <Back />
      </Container>

      <BottomSection />
      <Footer>©2022 All Rights Reserved by S & S Vault</Footer>
    </Page>
  );
};

export default Index;
