import styled from "styled-components";

export const Button = styled.button`
width:40px;
height:20px;
background-color: #fff;
margin: 10px;
color: ${(props) => props.backgroundColor}
`

export const PrimaryButton = styled.button`
border: none;
color: #fff;
margin: 10px;
padding: 10px;
background-color: ${(props) => props.backgroundColor}
`

export const SecondaryButton = styled.button`
padding: 10px;

background-color: #fff;
margin: 10px;
color: ${(props) => props.backgroundColor}
`