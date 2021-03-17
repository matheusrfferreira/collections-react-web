import styled from 'styled-components';

export const Container = styled.div`
  height: 15vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  
`

export const Pokemon = styled.div`
  height: 15vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
`

export const RickAndMorty = styled.div`
  height: 15vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
`

export const Title1 = styled.div`
  height: 10vh;
  width: auto;
  font-size: 50px;
  color: yellow;
  text-shadow: 0 1px 0 #0145fe, 0 2px 0 #0145fe, 0 3px 0 #0145fe, 0 4px 0 #0145fe, 0 5px 0 #0145fe, 0 6px 1px rgba(0, 0, 0, .1),
  0 0 5px rgba(0, 0, 0, .1), 0 1px 3px rgba(0, 0, 0, .3), 0 3px 5px rgba(0, 0, 0, .2), 0 5px 10px rgba(0, 0, 0, .25),
  0 10px 10px rgba(0, 0, 0, .2), 0 20px 20px rgba(0, 0, 0, .15);
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: 900;
  box-shadow: inset 0 0 1em gold;
  text-align: center;
  @media only screen and (max-width: 1024px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 25px;
  }
  
  
  
`

export const Title2 = styled.div`
  height: 10vh;
  width: auto;
  font-size: 50px;
  color: rgb(40, 176, 201);
  text-shadow: 0 1px 0 #C9DD5E, 0 2px 0 #C9DD5E, 0 3px 0 #C9DD5E, 0 4px 0 #C9DD5E, 0 5px 0 #C9DD5E, 0 6px 1px rgba(0, 0, 0, .1),
  0 0 5px rgba(0, 0, 0, .1), 0 1px 3px rgba(0, 0, 0, .3), 0 3px 5px rgba(0, 0, 0, .2), 0 5px 10px rgba(0, 0, 0, .25),
  0 10px 10px rgba(0, 0, 0, .2), 0 20px 20px rgba(0, 0, 0, .15);
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: 900;
  box-shadow: inset 0 0 1em cyan;
  text-align: center;
  @media only screen and (max-width: 1024px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 25px;
  }
`

export const PageLinks = styled.div`
  width: 50vw;
  height: 5vh;
  display: flex;
  flex-direction: row;
`

export const PageLink = styled.div`
  width: 25vw;
  height: 5vh;
  font-size: 28px;
  background-color: rgba(0,0,0,0.58);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: inset 0 0 1em darkgray;
  color: #e0dfdc;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
  @media only screen and (max-width: 1024px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 1024px) {
    
    font-size: 13px;
  }
  &:hover {
    background-color: white;
    box-shadow: inset 0px 19px 41px -4px rgba(0,0,0,0.58);
  }
`

