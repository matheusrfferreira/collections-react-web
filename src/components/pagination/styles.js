import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const Button = styled.button`
  width: 150px;
  height: 50px;
  cursor: pointer;
  text-decoration: none;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
  font-weight: 900;
  border: solid black 3px;
  font-size: 25px;
  margin: 30px 30px 30px 30px;
  outline: none;
  &:hover {
    color: brown;
  }

`