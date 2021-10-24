import * as React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  flex: 1;  
  position:relative;
  cursor:pointer;
`


const Text = styled.div`
  position:absolute;
  left:10%;
  top:15%;
  word-break: keep-all;
  line-height: 1.3;
  font-size:1.5vh;
  white-space: pre-wrap;
  margin-bottom:10px;
`;

const Desc = ({
  data
}) => {
  return (
    <Container>
      <Text>{data}</Text>
    </Container>
  );
}

export default Desc;