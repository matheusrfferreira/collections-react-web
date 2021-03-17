import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 400px;
  background-color: rgba(0,0,0,0.58);
  margin: 20px 20px 20px 20px;
  border: solid black 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
  font-weight: 900;
  box-shadow: inset 0 0 1em darkgray;
  @media only screen and (max-width: 1024px) {
    width: 200px;
    height: 300px;
    margin: 10px 10px 10px 10px;
  }
  @media only screen and (max-width: 540px) {
    width: 100px;
    height: 200px;
    margin: 5px 5px 5px 5px;
  }
  &:hover {
    transition: 0.25s ease;
    transform: translate(10px, -10px);
  }
`

export const Img = styled.img`
  background-color: mediumvioletred;
  width: 220px;
  border: solid black 2px;
  margin: 30px 30px 30px 30px;
  @media only screen and (max-width: 1024px) {
    width: 150px;
  }
  @media only screen and (max-width: 540px) {
    width: 70px;
    margin: 20px 20px 20px 20px;
  }
  
`

export const Name = styled.div`
 // width: 300px;
  //height: 50px;
  font-size: 25px;
  color: beige;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  text-align: center;
  @media only screen and (max-width: 1024px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 540px) {
    font-size: 10px;
  }
  
`

export const Button = styled.button`
  width: 100px;
  height: 30px;
  cursor: pointer;
  text-decoration: none;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
  font-weight: 900;
  border: solid black 3px;
  &:hover {
    color: brown;
  }
  outline: none;
  @media only screen and (max-width: 1024px) {
    width: 80px;
    height: 30px;
    margin-bottom: 20px;
    font-size: 13px;
  }
  @media only screen and (max-width: 540px) {
    width: 70px;
    height: 25px;
    margin-bottom: 15px;
    font-size: 10px;
  }
`