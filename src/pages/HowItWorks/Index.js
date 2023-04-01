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

      <Container margin="69px" justifyContent="flex-start">
        <Title fontWeight="700" margin="46px auto 0">
          How it Works
        </Title>
        <ol className="main_div">
          <li>
            <Paragraph
              textAlign="start"
              color="#000"
              width="100%"
              display="block"
              margin="0 0 16px 0"
            >
              An individual will create a Store and Share Vault account, this
              individual will be known as the Prime Account Holder
            </Paragraph>
          </li>
          <li>
            <Paragraph
              textAlign="start"
              color="#000"
              width="100%"
              display="block"
              margin="0 0 16px 0"
            >
              The Prime Account Holder will upload account information,
              documents and files they want to securely store in the Store and
              Share Vault and select an account verification period (1 week to 1
              month in 1 week increments).
            </Paragraph>
          </li>
          <li>
            <Paragraph
              textAlign="start"
              color="#000"
              width="100%"
              display="block"
              margin="0 0 16px 0"
            >
              The Primary Account Holder will create account login and password
              storage files utilizing the Store and Share Vault Swift Forms.
            </Paragraph>
          </li>
          <li>
            <Paragraph
              textAlign="start"
              color="#000"
              width="100%"
              display="block"
              margin="0 0 16px 0"
            >
              The Primary Account Holder will now create custom folders to store
              specific file and document types for easy management.
            </Paragraph>
          </li>
          <li>
            <Paragraph
              textAlign="start"
              color="#000"
              width="100%"
              display="block"
              margin="0 0 16px 0"
            >
              The Primary Account Holder will send out Buddy Invitations to up
              to (4), (7) or (10) Buddies. Once Buddies accept invitation, the
              Prime Account Holder can then choose specific files, documents and
              information to be shared with a specific buddy, all buddies or no
              one.
            </Paragraph>
          </li>
          <li>
            <Paragraph
              textAlign="start"
              color="#000"
              width="100%"
              display="block"
              margin="0 0 16px 0"
            >
              All that’s left to do is manage your files, documents, information
              and buddies and keep an eye on your account verification period.
            </Paragraph>
          </li>

          <Paragraph
            textAlign="start"
            color="#000"
            width="100%"
            display="block"
            margin="0 0 16px 0"
          >
            Enjoy Store and Share Vault.
          </Paragraph>
          {/* <li>
            <Paragraph textAlign='start' color="#000" width='100%' display="block" margin="0 0 16px 0">
              The Primary Account Holder will now create custom folders to store specific file and document types for easy management
            </Paragraph>
          </li>
          <li>

            <Paragraph textAlign='start' color="#000" width='100%' display="block" margin="0 0 16px 0">
              Once Buddies accept invitation, the Prime Account Holder can then choose specific files, documents and information to be shared with a specific buddy or all buddies.
            </Paragraph>
          </li>
          <li>


            <Paragraph textAlign='start' color="#000" width='100%' display="block" margin="0 0 16px 0">
              All that’s left to do is manage your files, documents, information and buddies and keep an eye on your time interval for account release.
            </Paragraph>
          </li>
          <li>
            <Paragraph textAlign='start' color="#000" width='100%' display="block" margin="0 0 16px 0">
              Enjoy Store and Share Vault.
            </Paragraph>
          </li> */}
        </ol>
        <Back />
      </Container>

      <BottomSection />
      <Footer>©2022 All Rights Reserved by S & S Vault</Footer>
    </Page>
  );
};

export default Index;
