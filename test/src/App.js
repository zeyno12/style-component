import React from 'react'
import styled from "styled-components"
const App = () => {
  return (
  <>
  <Zeynab>
    <Zahra src="https://i.pinimg.com/564x/2a/2f/b3/2a2fb34b81c583c62452e22bd995d93d.jpg">
    </Zahra>
    <Sevda>
      <Lali primary>Home</Lali>
      <Lali>About</Lali>
      <Lali>Service</Lali>
      <Lali>Contact</Lali>
    </Sevda>
  </Zeynab>
    <Canik>
      <Babies src="https://i.pinimg.com/474x/b7/0d/a1/b70da143bcb757924dcdea369163c4f4.jpg"></Babies>
      <Babies src="https://i.pinimg.com/474x/c4/94/2a/c4942afbbd73b0e9b8fa74c1d32f3a7a.jpg"></Babies>
      <Babies src="https://i.pinimg.com/474x/97/bd/74/97bd749df62b03576b8b51fe1329984e.jpg"></Babies>
    </Canik>
  </>
  )
}

export default App;
const Zeynab=styled.section`
 width: 100%;
 height: 150px;
 background-color: #e895c3c4;
 display: flex;
 justify-content: space-between;
 align-items: center;
 box-sizing: border-box;
`

const Zahra=styled.img`
width: 300px;
height: 150px;
object-fit: contain;
border-radius: 5px;
`
 
const Sevda=styled.ul`
display: flex;
justify-content: flex-end;
gap: 40px;
align-items: center;
width: 100%;
padding: 10px 20px;
margin: 0;
`

const Lali=styled.li`
list-style-type: none;
cursor: pointer;
font-size: 1.2rem;
color: ${props => props.primary ? "white" : "purple"};
font-weight: 300;
line-height: 12px;
font-family: Arial, Helvetica, sans-serif;
&:hover{
  color: gold;
  transition: all .3s;
}
`
const Canik=styled.div`
width: 100%;
display: flex;
align-items: center;
`

const Babies=styled.img`
width: 34%;
object-fit: cover;
height: 500px;
`