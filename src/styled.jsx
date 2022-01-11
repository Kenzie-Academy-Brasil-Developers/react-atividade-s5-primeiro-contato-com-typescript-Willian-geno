import styled from "styled-components"

export const Conteiner = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const Form = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  button{
    width: 150px;
    height: 35px;
    background-color: #818181;
    color: white;
    border: solid 2px black;
    border-radius: 10px;
    :active{
      background-color: white;
      color:black;
    }
    :hover{
      background-color: #e0dbdb;
    }
  }

`