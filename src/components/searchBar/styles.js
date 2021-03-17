import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
`

export const Input = styled.input`
  width: 200px;
  height: 25px;
  border: solid black 5px;
  outline: none;
  text-align: center;
  &::placeholder {
    text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
  }
  @media only screen and (max-width: 1024px) {
    width: 100px;
    height: 20px;
    font-size: 10px;
  }
`