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
`

const Bg = styled.div`
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  background-position: center center;
  background-size: cover;
`

const Text = styled.div`
  position:absolute;
  left:15%;
  bottom:15%;
  word-break: keep-all;
  line-height: 1.3;
  font-size:22px;
  white-space: pre-wrap;
  margin-bottom:10px;

  & .t1 {
    font-size:0.92em;
  }

  & .t2 {
    font-weight:bold;
  }

  opacity:0;
  transform: translate(0, 2em);
  transition: all 0.8s ease-out;

`;

const Box = ({
  data,
  onClick
}) => {
  return (
    <Container onClick={onClick}>
      <Bg style={{backgroundImage:`url(${data.menuBg[0]})`}}/>
      <Bg style={{backgroundImage:`url(${data.menuBg[1]})`}}/>
      <Text style={{bottom:`${data.menuPos}%`}}>
        <p className="t1">{data.t1}</p>
        <p className="t2">{data.t2}</p>
      </Text>
    </Container>
  );
}

export default Box;