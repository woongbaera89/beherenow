import * as React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  flex: 1;  
  position:relative;
  cursor:pointer;

  & div:nth-of-type(2) {
    opacity:0;
    transition: opacity 0.6s;
  }
  
  &:hover {
    div {
      transform: translate(0, 0);
      opacity:1;
    }
  }
  
  @media (max-width: 1040px) { 
    &:hover div:nth-of-type(2) {
      opacity:0;
    }
  }
`

const Bg = styled.div`
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  background-position: center bottom;
  background-size: cover;
`

const Text = styled.div`
  position:absolute;
  left:10%;
  bottom:15%;
  word-break: keep-all;
  line-height: 1.3;
  font-size:22px;
  white-space: pre-wrap;
  margin-bottom:10px;

  & .t1 {
    font-size:0.9em;
  }

  & .t2 {
    margin-top:0.4em;
    font-weight:bold;
  }

  opacity:0;
  transform: translate(0, 2em);
  transition: all 0.8s ease-out;

  
  @media (max-width: 1040px) { 
    transform: translate(0, 0);
    font-size:20px;
    opacity:1;
  }
`;

const Box = ({
  data,
  index,
  onClick
}) => {
  return (
    <Container onClick={onClick}>
      <Bg style={{backgroundImage:`url(${data.menuBg[0]})`, backgroundPosition: (index === 1 || index === 2) ? 'center center' : 'center bottom'}}/>
      <Bg style={{backgroundImage:`url(${data.menuBg[1]})`}}/>
      <Text className="dd" style={{bottom:`${data.menuPos}%`}}>
        <p className="t1">{data.t1}</p>
        <p className="t2">{data.t2}</p>
      </Text>
      <Text className="mm" style={{bottom:`${data.menuPosM}%`}}>
        <p className="t1">{data.t1}</p>
        <p className="t2">{data.t2}</p>
      </Text>
    </Container>
  );
}

export default Box;