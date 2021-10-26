import * as React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  flex: 1;  
  position:relative;
`
const Text = styled.div`
  position:absolute;
  left:10%;
  top:13%;
  word-break: keep-all;
  line-height: 1.3;
  font-size:20px;
  white-space: pre-wrap;

  & a {
    color: #66BF96;
  }
  
  @media (max-width: 720px) { 
    font-size:1.9vh;
  }

`;

const mobileText = 
`우리는 현재에 집중하며
지금 이 순간
우리가 보고, 듣고, 느끼는 것들을
공감하고 나누기 위해 
오브제의 의미를 고민합니다.

우리의 영감이 오늘을 살아가는
당신의 삶에 닿을 수 있도록

존재하다. 바로. 이 순간을 위해.

시간과 공간의 감각을 깨우는 
오브제 브랜드
BeHereNow

.
We focus on the present this very moment
exploring the meaning of objects
in order to share the things 
we see, hear, and feel.

So that our inspiration can reach the lives
of people living today.

We exist for this moment.

Objet brand that awakens sensations of 
space and time.
BeHereNow
.`

const Desc = ({
  data,
  index
}) => {
  return (
    <Container>
      {index === 0 ? (
        <>
          <Text className="dd">
            {data}
            {index === 3 && (
              <div className="dd">
                <br/><br/><br/>
                <b>BeHereNow.co.kr</b><br/>
                @beherenow_seoul<br/><br/>
                <a href="mailto:info@beherenow.co.kr">info@beherenow.co.kr</a>
              </div>
            )}
          </Text>
          <Text className="mm">
            {mobileText}
            {index === 0 && (
              <div>
                <b>BeHereNow.co.kr</b> <br/>
                @beherenow_seoul <a href="mailto:info@beherenow.co.kr">info@beherenow.co.kr</a>
              </div>
            )}
          </Text>
        </>
      ) : (
        <Text>
          {data}
          {index === 3 && (
            <div className="dd">
              <br/><br/><br/>
              <b>BeHereNow.co.kr</b><br/>
              @beherenow_seoul<br/><br/>
              <a href="mailto:info@beherenow.co.kr">info@beherenow.co.kr</a>
            </div>
          )}
        </Text>
      )}
    </Container>
  );
}

export default Desc;