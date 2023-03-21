import React from "react";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import {
  accountingImg,
  phonesImg,
  shareImg,
  signingImg,
} from "../../../../assets/images";
import {
  Back,
  // Column,
  Container,
  IconButton,
  // Image,
  Page,
  Paragraph,
  // Row,
  Title,
} from "../../../../components/common";
import { logout } from "../../../../store/actions/auth";
import people from "../../../../assets/images/people.png";
import SignOut from "../../../../assets/images/SignOut.png";
import Group86 from "../../../../assets/images/Group 86.png";
import NotePencil from "../../../../assets/images/NotePencil.png";
import OptionMenuSettings from "../../../../components/common/OptionMenuSettings";
import { useDispatch } from "react-redux";
import BackTransactions from "../../../TransactionsPaymentHistory/BackTransactions";
import styled from "styled-components";

const Image = styled.img`
  width: ${(props) => props.width ?? "-webkit-fill-available"};
  height: ${(props) => props.height};
  object-fit: ${(props) => props.objectFit ?? "contain"};
  margin: ${(props) => props.margin ?? "5px"};
  border-radius: ${(props) => props.borderRadius};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  ${(props) => props.link && "cursor:pointer;"}
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  height: ${(props) => props.height ?? "100%"};
  overflow: ${(props) => props.overflow ?? "auto"};
  flex-basis: ${(props) => props.width};
  flex-grow: 0;
  flex-shrink: 0;
  padding: ${(props) => props.padding ?? "0"};
  margin: ${(props) => props.margin ?? "0"};
  box-sizing: border-box;
  ${(props) =>
    props.hideScrollBar ? "::-webkit-scrollbar {display: none;}" : ""};

  @media (max-width: 400px) {
  }
`;

export default function About() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  return location.pathname !== "/about" ? (
    <>
      {/* <Row
        width="100%"
        height="73px"
        padding="24px 0"
        alignItems="center"
        justifyContent="space-between"
        className="pb-0"
      >
        <BackTransactions />
        <Title margin="8px 0px 0px 60px"></Title>

        <Row>
          <OptionMenuSettings
            options={[
              {
                Icon: people,
                text: "My Buddies",
                onClick: () => {
                  navigate("/home/my-buddies");
                },
              },
              {
                Icon: Group86,
                text: "My transactions",
                onClick: () => {
                  navigate("/home/transactions");
                },
              },
              {
                Icon: NotePencil,
                text: "Send Feedback",
                onClick: () => {
                  navigate("/home/send/feedback");
                },
              },
              {
                Icon: SignOut,
                text: "Logout",
                onClick: () => {
                  dispatch(logout());
                  navigate("/");
                },
              },
            ]}
          />

          <IconButton
            onClick={() => {
              navigate("/home/notifications");
            }}
          >
            <IoNotificationsOutline />
          </IconButton>
        </Row>
      </Row> */}
      <Row
        padding="15px 24px"
        alignItems="center"
        justifyContent="space-between"
        className="flex_column"
      >
        <Row alignItems="center">
          <BackTransactions />

          <Title fontWeight="650" margin="8px 0px 0px 60px">
            About Us
          </Title>
        </Row>
        <Row>
          <OptionMenuSettings
            options={[
              {
                Icon: people,
                text: "My Buddies",
                onClick: () => {
                  navigate("/home/my-buddies");
                },
              },
              {
                Icon: Group86,
                text: "My transactions",
                onClick: () => {
                  navigate("/home/transactions");
                },
              },
              {
                Icon: NotePencil,
                text: "Send Feedback",
                onClick: () => {
                  navigate("/home/send/feedback");
                },
              },
              {
                Icon: SignOut,
                text: "Logout",
                onClick: () => {
                  dispatch(logout());
                  navigate("/");
                },
              },
            ]}
          />

          <IconButton
            onClick={() => {
              navigate("/home/notifications");
            }}
          >
            <IoNotificationsOutline size={20} />
          </IconButton>
        </Row>
      </Row>
      <AboutContainer />
    </>
  ) : (
    <Page>
      <AboutContainer />
    </Page>
  );
}

const AboutContainer = () => {
  const location = useLocation();
  return (
    <Container
      margin={location.pathname == "/about" ? "69px " : "24px 0"}
      padding={location.pathname !== "/about" ? "20px" : "70px"}
      width={location.pathname == "/about" && "-webkit-fill-available"}
      color={location.pathname !== "/about" ? "#000" : ""}
    >
      {location.pathname == "/about" && (
        <Title fontWeight="700" margin="46px auto 0">
          About us
        </Title>
      )}
      <Paragraph
        textAlign={location.pathname === "/about" ? "left" : "left"}
        width={
          location.pathname !== "/about" ? "100%" : "-webkit-fill-available"
        }
        color="#000"
        margin="10px 0"
      >
      Store and Share Vault is an Amazon AWS encrypted application created as a safe space for
individuals to store online account logins, documents, files, photos and videos of any size and
share them with family member and loved ones should anything happen to them.

      </Paragraph>
      <Paragraph
        textAlign={location.pathname === "/about" ? "left" : "left"}
        width={
          location.pathname !== "/about" ? "100%" : "-webkit-fill-available"
        }
        color="#000"
        margin="10px 0"
      >
        Store and Share Vault helps to protect your family and loved ones from additional challenges by
providing them access to all your personal confidential accounts, information and documents
you choose to upload utilizing the Store and Share Vault. The Swift Forms we provide within the
App will assist you in documenting, saving, and managing login information for bank account,
merchant accounts, loans, credit cards, and more.

      </Paragraph>
      <Paragraph
        textAlign={location.pathname === "/about" ? "left" : "left"}
        width={
          location.pathname !== "/about" ? "100%" : "-webkit-fill-available"
        }
        color="#000"
        margin="10px 0"
      >
       Store and Share Vault users will also have access to important personal and family services
such as Financial Literacy, Entrepreneurship, Estate Planning, Mental Health Services,
Substance Abuse and other services needed to further personal and family growth. Users will
be connect to all of these services through Store and Share Vault
      </Paragraph>
      <Row
        margin="10px 0 0 0"
        width={
          location.pathname !== "/about" ? "100%" : "-webkit-fill-available"
        }
        className="flex_column"
      >
        <Column
          padding="10px"
          width="50%"
          style={{ gap: 20, overflow: "hidden" }}
        >
          <Row width="100%" justifyContent="space-between">
            <Image
              src={phonesImg}
              borderRadius="10px"
              margin="0"
              width="100%"
              height="100%"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </Row>
          <Row width="100%" justifyContent="space-between">
            <Column padding="0 10px 0 0" width="40%" className="p-0">
              <Image
                src={signingImg}
                borderRadius="10px"
                margin="0"
                width="100%"
                height="100%"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </Column>
            <Column padding="0 0 0 10px" width="60%">
              <Image
                src={accountingImg}
                borderRadius="10px"
                margin="0"
                width="100%"
                height="100%"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </Column>
          </Row>
        </Column>
        <Column padding="10px" width="50%" style={{ overflow: "hidden" }}>
          <Image
            src={shareImg}
            borderRadius="10px"
            margin="0"
            width="100%"
            height="100%"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </Column>
      </Row>
    
      {location.pathname == "/about" && <Back />}
    </Container>
  );
};
