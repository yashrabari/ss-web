import React, { useState } from "react";
import styled from "styled-components";

import { IoNotificationsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";

import { logout } from "../../store/actions/auth";
import people from "../../assets/images/people.png";
import SignOut from "../../assets/images/SignOut.png";
import Group86 from "../../assets/images/Group 86.png";
import NotePencil from "../../assets/images/NotePencil.png";
import Avatar from "../../assets/images/avatar.png";

import OptionMenuSettings from "../../components/common/OptionMenuSettings";
import BackTransactions from "../TransactionsPaymentHistory/BackTransactions";
import folder from "../../assets/images/folder.png";
import {
  Button,
  IconButton,
  OptionsMenu,
  // Row,
  Title,
} from "../../components/common";
import { Table, TableHeadRow, TableBodyRow } from "../../components/MyBuddies";
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
const Text = styled.span`
  font-family: "TT Commons";
  font-style: "normal";
  font-size: 16px;
  font-weight: ${(props) => props.fontWeight || 500};
  color: black;
  line-height: 30px;
  margin-bottom: 0;
`;
const Heading = styled.span`
  font-family: "TT Commons";
  font-style: "normal";
  font-size: 20px;
  color: black;
  margin: auto 0;
  font-weight: 600;
  line-height: 30px;
`;

export default function Shared() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showShared, setShowShared] = useState(false);
  const [border, setBorder] = useState();
  const array = [
    {
      name: "adlkfj",
      share: "askflhakls",
      size: "10mb",
      email: "abs@gamil.com",
    },
    {
      name: "adlkfj",
      share: "askflhakls",
      size: "10mb",
      email: "abs@gamil.com",
    },
    {
      name: "adlkfj",
      share: "askflhakls",
      size: "10mb",
      email: "abs@gamil.com",
    },
    {
      name: "adlkfj",
      share: "askflhakls",
      size: "10mb",
      email: "abs@gamil.com",
    },
    {
      name: "adlkfj",
      share: "askflhakls",
      size: "10mb",
      email: "abs@gamil.com",
    },
  ];
  return (
    <>
      {/* <Row
        width="100%"
        height="73px"
        padding="24px 0"
        alignItems="center"
        justifyContent="space-between"
      >
        <BackTransactions />
        <Title margin="0px 0px 0px 80px"></Title>

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
            Shared From Buddies
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
      <div
        className="flex_column"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Row className="w-100" style={{ width: "76%", height: "fit-content" }}>
          <div className="table_responsive">
            <Table style={{ width: "100%" }}>
              <thead>
                <TableHeadRow hideBottomBorder>
                  <th>Name</th>
                  <th>Shared by</th>
                  <th>Size</th>
                  <th>Shared date</th>
                </TableHeadRow>
              </thead>
              <tbody>
                {array.map((items, index) => {
                  return (
                    <TableBodyRow
                      share={index === border}
                      shared="shared"
                      onClick={() => {
                        setBorder(index);
                        setShowShared(true);
                      }}
                    >
                      <td
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <img width="20px" height="20px" src={folder} />
                        <p>{items.name}</p>
                      </td>
                      <td>{items.share}</td>
                      <td> {items.size}</td>
                      <td>{items.email}</td>
                      {/* <td>
                        <OptionsMenu
                          options={[
                            { text: "Promote SubPrime", onClick: () => { } },
                            { text: "Delete", onClick: () => { } }
                          ]}
                        />
                      </td> */}
                    </TableBodyRow>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Row>

        {Boolean(showShared) && (
          <Row className="w-100 mt-5" style={{ width: "22%" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Box
                width="100%"
                height="70vh"
                sx={{
                  boxShadow: "0.5px 0.5px 0.5px #f5f5f5",
                  borderRadius: "15px",
                  paddingX: "20px",
                  paddingY: "10px",
                  border: "1px solid #f5f5f5",
                  backgroundColor: "white",
                  overflowY: "auto",
                }}
              >
                <Heading>Details</Heading>
                <hr
                  style={{
                    border: "none",
                    borderTop: "1px solid rgba(0, 0, 0, 0.05)",
                  }}
                />
                <Text fontWeight="600">Uploaded on: 12/03/2022</Text>
                <Box sx={{ marginTop: "10px" }}>
                  <Text fontWeight="600">Shared with</Text>
                </Box>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "10px",
                  }}
                  className="country-option"
                >
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      src={Avatar}
                      alt="Profile picture"
                    />
                  </div>
                  <Text>ksdflsjd</Text>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "10px",
                  }}
                  className="country-option"
                >
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      src={Avatar}
                      alt="Profile picture"
                    />
                  </div>
                  <Text>ksdflsjd</Text>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "10px",
                  }}
                  className="country-option"
                >
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      src={Avatar}
                      alt="Profile picture"
                    />
                  </div>
                  <Text>ksdflsjd</Text>
                </div>

                <Button color="#00A652" margin="20px 0 0 0">
                  Download
                </Button>
              </Box>
            </div>
          </Row>
        )}
      </div>
    </>
  );
}
