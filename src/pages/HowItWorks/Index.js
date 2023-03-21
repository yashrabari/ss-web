import React from "react";
import {
  Back,
  Container,
  Page,
  Row,
  Title,
  Paragraph,
} from "../../components/common";

const Index = () => {
  return (
    <Page>
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
              An individual will create a Store and Share Vault account, this individual will be known as the
              Prime Account Holder
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
              The Prime Account Holder will upload account information, documents and files they want to
              securely store in the Store and Share Vault and select an account verification period (1 week to
              1 month in 1 week increments).

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
              The Primary Account Holder will create account login and password storage files utilizing the
              Store and Share Vault Swift Forms.

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
              The Primary Account Holder will now create custom folders to store specific file and document
              types for easy management.


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
              The Primary Account Holder will send out Buddy Invitations to up to (4), (7) or (10) Buddies.
              Once Buddies accept invitation, the Prime Account Holder can then choose specific files,
              documents and information to be shared with a specific buddy, all buddies or no one.


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
              All that’s left to do is manage your files, documents, information and buddies and keep an eye
              on your account verification period.

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
    </Page>
  );
};

export default Index;
