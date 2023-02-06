import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Brand, Column, Image, Paragraph, Row, Title } from "../../common"
import Section from "./Section"
import { ReactComponent as Logo } from "../../../assets/images/Logo.svg"
import { appStoreImg, googlePlayImg } from "../../../assets/images"

const Rectangle1 = styled.div`
  position: absolute;
  width: 100%;
  height: 360px;
  left: 100vw;
  top: 0px;

  background: rgba(0, 166, 82, 0.05);
  opacity: 0.3;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`

const Rectangle2 = styled.div`
  position: absolute;
  width: 100%;
  height: 360px;
  left: 0px;
  top: 0px;

  background: rgba(0, 166, 82, 0.1);
  opacity: 0.3;
`

export default function BottomSection() {
  const navigate = useNavigate()

  return (
    <Section>
      {/* <Rectangle1 />
      <Rectangle2 /> */}
      <Column>
        <Row link alignItems="center" margin="0 0 14px 0">
          <Logo />
          <Brand>S & S Vault</Brand>
        </Row>
        <Paragraph
          color="#000"
          fontSize="14px"
          width="262px"
          textAlign="start"
          margin="0 0 12px 0"
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </Paragraph>
        <Paragraph
          link
          color="#000"
          fontSize="24px"
          bold
          textAlign="start"
          margin="0 0 17px 0"
        >
          Get the app!
        </Paragraph>
        <Row>
          <Image
            src={appStoreImg}
            alt="App Store"
            width="138px"
            margin="0 8px 0 0"
          />
          <Image
            src={googlePlayImg}
            alt="Google Play"
            width="155px"
            margin="0"
          />
        </Row>
      </Column>
      <Column>
        <Title fontSize="22px" textAlign="start" margin="18px 0 12px 0">
          Want to know more?
        </Title>
        <Paragraph
          link
          textAlign="start"
          margin="8px 0"
          fontSize="18px"
          color="#494E4C"
          onClick={() => navigate('/faq')}
        >
          FAQs
        </Paragraph>
        <Paragraph
          link
          textAlign="start"
          margin="8px 0"
          fontSize="18px"
          color="#494E4C"
          onClick={() => navigate('/contact-us')}
        >
          Contact Us
        </Paragraph>
        <Paragraph
          link
          textAlign="start"
          margin="8px 0"
          fontSize="18px"
          color="#494E4C"
          onClick={() => navigate('/about')}
        >
          About Us
        </Paragraph>
        <Paragraph
          link
          textAlign="start"
          margin="8px 0"
          fontSize="18px"
          color="#494E4C"
        >
          Careers
        </Paragraph>
      </Column>
      <Column>
        <Title fontSize="22px" textAlign="start" margin="18px 0 12px 0">
          More About us
        </Title>
        <Paragraph
          link
          textAlign="start"
          margin="8px 0"
          fontSize="18px"
          color="#494E4C"
        >
          Terms of Sale
        </Paragraph>
        <Paragraph
          link
          textAlign="start"
          margin="8px 0"
          fontSize="18px"
          color="#494E4C"
        >
          Terms of Service
        </Paragraph>
        <Paragraph
          link
          textAlign="start"
          margin="8px 0"
          fontSize="18px"
          color="#494E4C"
          onClick={() => navigate('/privacy-policy')}
        >
          Privacy Policy
        </Paragraph>
        <Paragraph
          link
          textAlign="start"
          margin="8px 0"
          fontSize="18px"
          color="#494E4C"
          onClick={() => navigate('/terms-&-conditions')}
        >
          Terms and Conditions
        </Paragraph>
      </Column>
      <Column>
        <Title fontSize="22px" textAlign="start" margin="18px 0 12px 0">
          Social Links
        </Title>
        <Paragraph
          link
          textAlign="start"
          margin="8px 0"
          fontSize="18px"
          color="#494E4C"
        >
          Blog
        </Paragraph>
        <Paragraph
          link
          textAlign="start"
          margin="8px 0"
          fontSize="18px"
          color="#494E4C"
        >
          <a href='https://www.facebook.com/Store-and-Share-Vault-S-and-S-Vault-107816765260015' style={{ color: '#494E4C', textDecoration: "none" }} target='_blank'> Facebook</a>
        </Paragraph>
        <Paragraph
          link
          textAlign="start"
          margin="8px 0"
          fontSize="18px"
          color="#494E4C"
        >
          <a href='https://www.instagram.com/storeandsharevault/' style={{ color: '#494E4C', textDecoration: "none" }} target='_blank'>  Instagram</a>


        </Paragraph>
        <Paragraph
          link
          textAlign="start"
          margin="8px 0"
          fontSize="18px"
          color="#494E4C"
        >
          LinkedIn
        </Paragraph>
        <Paragraph
          link
          textAlign="start"
          margin="8px 0"
          fontSize="18px"
          color="#494E4C"
        >
          Twitter
        </Paragraph>
        <Paragraph
          link
          textAlign="start"
          margin="8px 0"
          fontSize="18px"
          color="#494E4C"
        >
          <a href='https://www.youtube.com/@storeandsharevault' style={{ color: '#494E4C', textDecoration: "none" }} target='_blank'>
            YouTube</a>

        </Paragraph>
      </Column>
    </Section>
  )
}
