import React, { useEffect } from "react";
import { Back, Container, Page } from "../../components/common";

const TermsConditions = ({ handleTermsConditionsBack }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.termly.io/embed-policy.min.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <Page>
      <Container
        width="1227px"
        margin="69px"
        justifyContent="flex-start"
        // padding="0 !important"
      >
        <div
          style={{
            width: "-webkit-fill-available",
            marginTop: "30px",
            marginBottom: "60px",
            // padding: "0",
          }}
          name="termly-embed"
          data-id="d1b51bf7-d569-4b85-ae7d-b13841a34e43"
          data-type="iframe"
        ></div>
        <Back onClick={handleTermsConditionsBack} />
      </Container>
    </Page>
  );
};

export default TermsConditions;
