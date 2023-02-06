import React from "react"
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5"
import { useNavigate, useLocation } from "react-router-dom"
import {
  accountingImg,
  phonesImg,
  shareImg,
  signingImg
} from "../../../../assets/images"
import {
  Back,
  Column,
  Container,
  IconButton,
  Image,
  Page,
  Paragraph,
  Row,
  Title
} from "../../../../components/common"
import { logout } from "../../../../store/actions/auth"
import people from "../../../../assets/images/people.png"
import SignOut from "../../../../assets/images/SignOut.png"
import Group86 from "../../../../assets/images/Group 86.png"
import NotePencil from "../../../../assets/images/NotePencil.png"
import OptionMenuSettings from "../../../../components/common/OptionMenuSettings"
import { useDispatch } from "react-redux"
import BackTransactions from "../../../TransactionsPaymentHistory/BackTransactions"

export default function About() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  return (
    location.pathname !== '/about'
      ? <>
        <Row
          width="100%"
          height="73px"
          padding="24px 0"
          alignItems="center"
          justifyContent="space-between"
        >
          <BackTransactions />
          <Title margin='0px 0px 0px 80px'>About Us</Title>

          <Row>
            <OptionMenuSettings
              options={[
                { Icon: people, text: "My Buddies", onClick: () => { navigate('/home/my-buddies') } },
                { Icon: Group86, text: "My transactions", onClick: () => { navigate('/home/transactions') } },
                { Icon: NotePencil, text: "Send Feedback", onClick: () => { navigate('/home/send/feedback') } },
                {
                  Icon: SignOut, text: "Logout", onClick: () => {
                    dispatch(logout())
                    navigate("/")
                  }
                }
              ]}
            />

            <IconButton onClick={() => { navigate('/home/notifications') }}>
              <IoNotificationsOutline />
            </IconButton>
          </Row>
        </Row>
        <AboutContainer />
      </>
      : <Page>
        <AboutContainer />
      </Page>
  )
}


const AboutContainer = () => {
  const location = useLocation()
  return (
    <Container margin={location.pathname == '/about' ? "69px auto" : "24px 0"} padding={location.pathname !== '/about' ? '20px' : '0'} width={location.pathname == '/about' && "1227px"} color={location.pathname !== '/about' ? "#000" : ''}>
      {location.pathname == '/about' && <Title fontWeight="700" margin="46px auto 0">About us</Title>}
      <Paragraph textAlign={location.pathname === '/about' ? 'left' : 'left'} width={location.pathname !== '/about' ? "100%" : '900px'} color="#000" margin="10px 0">
        Store and Share Vault is an Amazon Web Services S3 encrypted application created as a safe
        space for individuals to store online account logins, documents, files, photos and videos of any
        size and share them with family member and loved ones should anything happen to them.</Paragraph>
      <Paragraph textAlign={location.pathname === '/about' ? 'left' : 'left'} width={location.pathname !== '/about' ? "100%" : '900px'} color="#000" margin="10px 0">
        Store and Share Vault helps to protect your family and loved ones from additional challenges by
        providing them access to your accounts, information and documents you choose to upload
        utilizing the S&S Vault. The automated forms we provide within the App will assist you in
        documenting, saving, and managing login information for bank account, merchant accounts,
        loans, credit cards, and more.</Paragraph>
      <Paragraph textAlign={location.pathname === '/about' ? 'left' : 'left'} width={location.pathname !== '/about' ? "100%" : '900px'} color="#000" margin="10px 0">
        S&S Vault users will also have access to important personal and family services such as
        Financial Literacy, Entrepreneurship, Estate Planning, Mental Health Services, Substance
        Abuse and other services needed to foster personal and family growth.</Paragraph>
      <Row margin="10px 0 0 0" width={location.pathname !== '/about' ? "100%" : '900px'}>
        <Column padding="0 10px" width="50%" style={{ gap: 20, overflow: 'hidden' }}>
          <Row width="100%" justifyContent="space-between">
            <Image src={phonesImg} borderRadius="10px" margin="0" width="100%" height="100%" style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </Row>
          <Row width="100%" justifyContent="space-between">
            <Column padding="0 10px 0 0" width="40%">
              <Image src={signingImg} borderRadius="10px" margin="0" width="100%" height="100%" style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </Column>
            <Column padding="0 0 0 10px" width="60%">
              <Image src={accountingImg} borderRadius="10px" margin="0" width="100%" height="100%" style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </Column>
          </Row>
        </Column>
        <Column padding="0 10px" width="50%" style={{ overflow: 'hidden' }}>
          <Image src={shareImg} borderRadius="10px" margin="0" width="100%" height="100%" style={{ objectFit: 'cover', objectPosition: 'center' }} />
        </Column>
      </Row>
      <Paragraph textAlign={location.pathname === '/about' ? 'left' : 'left'} width={location.pathname !== '/about' ? "100%" : '900px'} color="#000" margin="10px 0">
        Store and Share Vault is a highly secured location created for personal use to provide a secure central location for storing and sharing confidential account login information and documents in case there is ever a need for access due to unavailability of the Prime Account holder.
      </Paragraph>
      <Paragraph textAlign={location.pathname === '/about' ? 'left' : 'left'} width={location.pathname !== '/about' ? "100%" : '900px'} color="#000" margin="10px 0">
        Store and Share Vault users will also have access to important personal and family services such as Financial Literacy, Entrepreneurship, Estate Planning, Mental Health Services, Substance Abuse and other services needed to foster personal and family growth.  Users will have access to all of these services at no additional cost to them.
      </Paragraph>
      {location.pathname == '/about' && <Back />}
    </Container>
  )
}