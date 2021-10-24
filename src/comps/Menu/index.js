import * as React from "react"
import styled from "@emotion/styled"
import Box from "./box"

const Container = styled.div`
  display:flex;
  flex-direction:row;
  height:100%;
  width:100%;
`

const Menu = ({
  handleMenuClick,
  data
}) => {
  return (
    <Container>
      {data.map((each, index) => (
        <Box onClick={() => handleMenuClick(index+2)} data={each} />
      ))}
    </Container>
  );
}

export default Menu;