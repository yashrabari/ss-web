import React from "react";
import { IoChevronForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Image, Paragraph } from "../../common";
import Container from "./Container";

export default function Profile({ user }) {
  const navigate = useNavigate();
  const profilePic = user && (user.imageUrl || user.profile_picture);
  return (
    <Container
      onClick={() => {
        navigate("/home/edit-profile");
      }}
    >
      {user && (user.imageUrl || user.profile_picture) ? (
        <Image
          width="45px"
          height="44px"
          borderRadius="5px"
          margin="0 10px 0 0"
          objectFit="cover"
          src={user.imageUrl || user.profile_picture}
          alt="Profile"
        />
      ) : (
        ""
      )}
      <Paragraph bold width="" fontSize="20px" color="#000" margin="0 20px 0 0">
        {user ? user?.name : "Antor P."}
      </Paragraph>

      <IoChevronForward />
    </Container>
  );
}
