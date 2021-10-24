import * as React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  flex: 1;  
  position:relative;
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
  word-break: keep-all;
  line-height: 1.3;
  font-size:18px;
  white-space: pre-wrap;
   
  & h1 {
    font-size:1.8em;
    font-weight:normal;
    position:absolute;
    left:5.5%;
    width:44%;
    top:50%;
    max-width:540px;
    margin-top: -1em;
  }

  & div {
    line-height: 1.5;
    position:absolute;
    right:4%;
    width:40%;
    max-width:400px;
    bottom:7%;
  }

  & .t1 {
    font-size:0.92em;
  }

  & .t2 {
    font-weight:bold;
  }

  & .t3 {
    margin-top: 3em; 
  }

  & .t4 {
    margin-top: 1.3em; 
  }

  & .desc {
    font-size: 0.84em;
    margin-top: 4em; 
  }

  & .anim {
    opacity:0;
    transform: translate(0, 3em);
    transition: all 0.8s ease-out;
  }

  & h1.anim {
    opacity:0;
    transform: translate(-2em, 0px);
    transition: all 0.6s ease-out;
  }

  & .anim.visible  {
    opacity:1;
    transform: translate(0, 0);
  }
`;

const Card = ({
  active=false,
  data,
}) => {
  return (
    <Container>
      <Bg style={{backgroundImage:`url(${data.bg})`}}/>
      {data && (
        <Text>
          <h1 className={active ? "anim visible" : "anim"}>{data.main}</h1>
          <div className={active ? "anim visible" : "anim"}>
            <p className="t1">{data.t1}</p>
            <p className="t2">{data.t2}</p>
            <p className="t3">{data.t3}</p>
            <p className="t4">{data.t4}</p>
            <p className="desc">{data.desc}</p>
          </div>
        </Text>
      )}
    </Container>
  );
}

export default Card;