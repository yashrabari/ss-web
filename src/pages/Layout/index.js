import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Column, Page, Sidebar } from "../../components/common";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import { TbMenu } from "react-icons/tb";
export default function Index() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Page row>
      <div className="mobile_sidebar">
        <Offcanvas show={show} onHide={handleClose} className="width-185">
          <Sidebar />
        </Offcanvas>
      </div>
      <div className="window_sidebar">
        <Sidebar />
      </div>
      <Column width="1170px" margin="0 auto" hideScrollBar>
        <div className="mobile_sidebar_btn">
          <TbMenu onClick={handleShow} />
          {/* <Button variant="primary">Launch</Button> */}
        </div>
        <Outlet />
      </Column>
    </Page>
  );
}
