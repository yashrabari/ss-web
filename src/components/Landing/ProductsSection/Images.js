import React from "react"
import styled from "styled-components"
import { addBuddyImg, myBuddiesImg, packagesImg } from "../../../assets/images"

const Container = styled.div`
  width: 1440px;
  height: 700px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
`

const Packages1 = styled.div`
  position: absolute;
  width: 593px;
  height: 421px;
  left: -243px;
  top: -183px;

  background: url(${packagesImg});
  background-position: center center;
  background-size: contain;
  border: 3px solid #292d32;
  border-radius: 10px;
`

const Packages2 = styled.div`
  position: absolute;
  width: 593px;
  height: 421px;
  left: 378px;
  top: -67px;

  background: url(${packagesImg});
  background-position: center center;
  background-size: contain;
  border: 3px solid #292d32;
  border-radius: 10px;
`

const Packages3 = styled.div`
  position: absolute;
  width: 593px;
  height: 421px;
  left: 999px;
  top: 426px;

  background: url(${packagesImg});
  background-position: center center;
  background-size: contain;
  border: 3px solid #292d32;
  border-radius: 10px;
`

const AddBuddy1 = styled.div`
  position: absolute;
  width: 593px;
  height: 421px;
  left: -243px;
  top: 261px;

  background: url(${addBuddyImg});
  background-position: center center;
  background-size: contain;
  border: 3px solid #292d32;
  border-radius: 10px;
`

const AddBuddy2 = styled.div`
  position: absolute;
  width: 593px;
  height: 421px;
  left: 378px;
  top: 376px;

  background: url(${addBuddyImg});
  background-position: center center;
  background-size: contain;
  border: 3px solid #292d32;
  border-radius: 10px;
`

const MyBuddies = styled.div`
  position: absolute;
  width: 593px;
  height: 421px;
  left: 999px;
  top: -17px;

  background: url(${myBuddiesImg});
  background-position: center center;
  background-size: contain;
  border: 3px solid #292d32;
  border-radius: 10px;
`

export default function Images() {
  return (
    <Container>
      <Packages1 />
      <Packages2 />
      <Packages3 />
      <MyBuddies />
      <AddBuddy1 />
      <AddBuddy2 />
    </Container>
  )
}
