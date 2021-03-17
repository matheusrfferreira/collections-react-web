import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
    
`

export const Message = styled.div`
  width: 100vw;
  font-size: 100px;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1024px) {
    font-size: 50px;
  }
  @media only screen and (max-width: 540px) {
    font-size: 30px;
  }
`