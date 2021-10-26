import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const BoxInput = styled.div`
  display: flex;
  align-items: center;
  label {
    margin: 0 5px 0 0;
  }
  input, select{
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 5px;
  }
`;

export const Button = styled.button`
  padding: 5px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: darkblue;
  color: white;
  transition: background-color 100ms ease-in-out;
  &:hover{
    background-color: darkgreen;
  }
`;