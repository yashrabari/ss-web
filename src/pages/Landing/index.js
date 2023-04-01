import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Brand,
  Button,
  CustomLink,
  Page,
  Container,
  Paragraph,
  Row,
  Title,
} from "../../components/common";
import { BottomSection, Footer, Hero, NavBar } from "../../components/Landing";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import { useNavigate } from "react-router-dom";
import SupportAndService from "../../components/common/SupportAndService/Index";
import { ImMenu } from "react-icons/im";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import icon1 from "../../assets/images/Newfolder/icon1.jpg";
import icon2 from "../../assets/images/Newfolder/icon2.jpg";
import icon3 from "../../assets/images/Newfolder/icon3.jpg";
import icon4 from "../../assets/images/Newfolder/icon4.jpg";
import icon5 from "../../assets/images/Newfolder/icon5.jpg";

const Section = styled.section`
  margin-top: 30px;
  display: grid;
  gap: 20px;
  justify-content: space-around;
  align-items: start;
  grid-template-columns: repeat(3, auto);

  & > div {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, auto);
  }

  @media (max-width: 600px) {
    display: block;
  }
`;

export default function Landing() {
  const navigate = useNavigate();

  const aboutUsRef = useRef(null);

  const loggedIn = useSelector((state) => state.reducer.auth.loggedIn);

  useEffect(() => {
    if (loggedIn) {
      navigate("/home");
    }
  }, [loggedIn, navigate]);

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
    <Page height="">
      {/* <Ellipse1 /> */}
      {/* <Ellipse2 /> */}
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
        background="transparent"
        margin="50px 100px"
        className="marginx-20"
      >
        <Title fontWeight="700" fontSize="65px">
          Protecting Your Peace of Mind
        </Title>
        <Paragraph
          width=""
          color="#02271480"
          fontSize="20px"
          margin="0 0 21px 0"
        >
          Do you have important documents, files, photos and video you would
          like to store and share in a closed network with only those you
          invite?
        </Paragraph>

        <Paragraph
          width=""
          color="#02271480"
          fontSize="20px"
          margin="0 0 21px 0"
        >
          Store and Share Vault allows you to store all this vital information
          and share it immediately or on a timed released schedule with members
          in your closed network.
        </Paragraph>
        <Button
          border
          color="transparent"
          textColor="#000"
          borderRadius="10px"
          // margin="0 0 54px 0"
          onClick={() => navigate("/welcome")}
        >
          Explore Now
        </Button>
      </Container>
      <Hero />

      <Container
        background="transparent"
        margin="50px 100px"
        className="marginx-20"
      >
        <Title fontWeight="700" fontSize="45px">
          You will never have to frantically search for information again
        </Title>
        <Section>
          <div style={{ display: "grid", justifyItems: "center" }}>
            <img
              src={icon2}
              alt=""
              width={50}
              style={{ marginBottom: "10px" }}
            />
            <Title fontWeight="700" fontSize="35px">
              STORE
            </Title>
            <Paragraph
              width=""
              color="#02271480"
              fontSize="20px"
              margin="0 0 21px 0"
              textAlign="center"
            >
              Upload important documents, files, photos, video, passwords and
              other sensitive information.
            </Paragraph>
          </div>
          <div style={{ display: "grid", justifyItems: "center" }}>
            <img
              src={icon1}
              alt=""
              width={50}
              style={{ marginBottom: "10px" }}
            />

            <Title fontWeight="700" fontSize="35px">
              PROTECT
            </Title>
            <Paragraph
              width=""
              color="#02271480"
              fontSize="20px"
              margin="0 0 21px 0"
              textAlign="center"
            >
              Our software is hosted by Amazon Web Services (AWS) and provides
              256-bit encryption to protect all user information at the highest
              level.
            </Paragraph>
          </div>
          <div style={{ display: "grid", justifyItems: "center" }}>
            <img
              src={icon3}
              alt=""
              width={50}
              style={{ marginBottom: "10px" }}
            />

            <Title fontWeight="700" fontSize="35px">
              MANAGE
            </Title>
            <Paragraph
              width=""
              color="#02271480"
              fontSize="20px"
              margin="0 0 21px 0"
              textAlign="center"
            >
              Update, delete and edit information anywhere at any time.
            </Paragraph>
          </div>
          <div style={{ display: "grid", justifyItems: "center" }}>
            <img
              src={icon4}
              alt=""
              width={50}
              style={{ marginBottom: "10px" }}
            />

            <Title fontWeight="700" fontSize="35px">
              SHARE
            </Title>
            <Paragraph
              width=""
              color="#02271480"
              fontSize="20px"
              margin="0 0 21px 0"
              textAlign="center"
            >
              Add up to (4) loved ones (buddies) to share your uploaded
              information.
            </Paragraph>
          </div>
          <div style={{ display: "grid", justifyItems: "center" }}>
            <img
              src={icon5}
              alt=""
              width={50}
              style={{ marginBottom: "10px" }}
            />
            <Title fontWeight="700" fontSize="35px">
              RELEASE
            </Title>
            <Paragraph
              width=""
              color="#02271480"
              fontSize="20px"
              margin="0 0 21px 0"
              textAlign="center"
            >
              Choose to release your uploaded information immediately or on a
              timed-release schedule.
            </Paragraph>
          </div>
        </Section>
      </Container>

      {/* <AboutSection ref={aboutUsRef} /> */}

      <SupportAndService />
      {/* <ProductsSection /> */}
      <BottomSection />

      <Footer>©2022 All Rights Reserved by S & S Vault</Footer>
    </Page>
  );
}
