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
    font-size:1.7em;
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
    margin-top: 2.4em; 
  }

  & .t4 {
    margin-top: 1.2em; 
    margin-bottom: 2.4em; 
  }

  & .desc {
    font-size: 0.84em;
  }
  & .desc.title {
    font-weight:bold;
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
  

  @media (max-width: 1040px) { 
    font-size:15px;

    & h1 {
      font-size:1.25em;
      left:10%;
      width:80%;
      top:25%;
      max-width:540px;
    }
  
    & div {
      line-height: 1.5;
      position:absolute;
      left:10%;
      width:80%;
      right:10%;
      bottom:10%;
    }
  }
`;

const Card = ({
  active=false,
  data,
}) => {
  return (
    <Container>
      <Bg className="dd" style={{backgroundImage:`url(${data.bg})`}}/>
      <Bg className="mm" style={{backgroundImage:`url(${data.menuBg[2]})`}}/>
      {data && (
        <Text>
          <h1 className={active ? "anim visible" : "anim"}>{data.main}</h1>
          <div className={active ? "anim visible" : "anim"}>
            <p className="t1">{data.t1}</p>
            <p className="t2">{data.t2}</p>
            <p className="t3">{data.t3}</p>
            <p className="t4">{data.t4}</p>
            <p className="desc title">{data.descTitle}</p>
            <p className="desc">{data.desc}</p>
          </div>
        </Text>
      )}
    </Container>
  );
}

export default Card;