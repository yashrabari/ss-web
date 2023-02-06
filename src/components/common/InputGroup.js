import React, { useState } from "react"
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5"
import styled from "styled-components"
import { Paragraph } from "."
import CheckBox from "./CheckBox"
import Image from "./Image"
import Label from "./Label"
import InputMask from 'react-input-mask';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 4px 0;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
`

const Container = styled.div`
  width: ${props => (props.width ? `${props.width}` : "512px")};
  height: 75px;
  background: #fff;

  font-family: "TT Commons";
  font-size: 16px;
  line-height: 26px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid;
  border-radius: 10px;

  padding: 0 10px;

  ${props => (props.errorText ? "border-color:red" : "border-color:#292D3233")};
  ${props =>
    props.isActive ? "border-color:#00A652;" : "border-color:#292D3233"}

  transition: 0.25s;
`

const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 0;
  align-items: center;
  min-width: 0;
`

const TextInput = styled.input`
  flex: 1 0;
  min-width: 50px;
  min-height: 25px;
  font-size: inherit;
  background-color: transparent;
  padding-left: 5px;
  border: 0;
  &:focus {
    outline: none;
  }
`

export default function InputGroup({
  errorText,
  value,
  onChange,
  label,
  type,
  placeholder,
  onHintClick,
  checkBoxText,
  imageSrc,
  hintText,
  disabled,
  width,
  inputMask,
}) {
  const [isActive, setIsActive] = useState(false)
  const [currentType, setCurrentType] = useState(type)

  return (
    <Column>
      <Row>
        <Label>{label}</Label>
        {errorText && (
          <Paragraph color="#FF5F5F" bold>
            {errorText}
          </Paragraph>
        )}
      </Row>
      <Container width={width} errorText={errorText} isActive={isActive}>
        <InputContainer>
          {imageSrc && <Image width="57px" src={imageSrc} />}
          {inputMask ? (
            <InputMask mask={inputMask} value={value} onChange={onChange} disabled={disabled} onFocus={() => setIsActive(true)} onBlur={() => setIsActive(false)}>
              {(inputProps) =>
                <TextInput
                  {...inputProps}
                  placeholder={placeholder}
                  type={'tel'}
                />
              }
            </InputMask>
          ) : (
            <TextInput
              disabled={disabled}
              onFocus={() => setIsActive(true)}
              onBlur={() => setIsActive(false)}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              type={currentType}
            />
          )}
        </InputContainer>
        {type === "password" &&
          (currentType === "password" ? (
            <IoEyeOutline
              size={24}
              onClick={() => setCurrentType("text")}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <IoEyeOffOutline
              size={24}
              onClick={() => setCurrentType("password")}
              style={{ cursor: "pointer" }}
            />
          ))}
      </Container>
      <Row>
        {checkBoxText ? (
          <CheckBox text={checkBoxText} checked={true} />
        ) : (
          <div />
        )}
        {hintText && (
          <Paragraph link color="#00A652" onClick={onHintClick}>
            {hintText}
          </Paragraph>
        )}
      </Row>
    </Column>
  )
}