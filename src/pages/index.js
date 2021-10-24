import React, { useState, useEffect } from "react"
import { Mousewheel, Scrollbar, Keyboard, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "@emotion/styled"
import Menu from "../comps/Menu"
import Card from "../comps/Card"
import Desc from "../comps/Desc"

import "normalize.css"
import "swiper/css"
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';
import 'swiper/css/keyboard';
import "swiper/css/pagination"
import './styles.css';

import logo from "../images/logo.png"
import b1 from "../images/b1.jpg"
import b2 from "../images/b2.jpg"
import b3 from "../images/b3.jpg"
import b4 from "../images/b4.jpg"
import m1 from "../images/m1.jpg"
import m2 from "../images/m2.jpg"
import m3 from "../images/m3.jpg"
import m4 from "../images/m4.jpg"
import m11 from "../images/m1_1.jpg"
import m21 from "../images/m2_1.jpg"
import m31 from "../images/m3_1.jpg"
import m41 from "../images/m4_1.jpg"


const data = [
  {
    bg: b1,
    menuBg: [m1, m11],
    menuPos: 10,
    main: `“솜털 같은 빛은 낭만적이고,\n바삭바삭한 빛은 사랑스럽다”`,
    t1: "빛으로 공간을 어루만지는",
    t2: "Chock Gak",
    t3: "손끝에 닿으면 사라질 것 같은 빛의 질감으로\n낯선 감각을 밝히다.",
    t4: "Light up exotic sensation with\nthe texture of light that seems to disappear\nas you reach out your fingertips.",
    desc: "Chock Gak 001\nStainless steel, aluminum, polyvinyl chloride, led\n500*400*50mm"
  },
  {
    bg: b2,
    menuBg: [m2, m21],
    menuPos: 52,
    main: `“빛의 느슨한 경계는\n나의 감각을 무디게 한다.”`,
    t1: "존재만으로도 빛나는",
    t2: "See Gak",
    t3: "근원적으로 끓어오르는 두 개의 빛으로\n보이지 않던 감각이 깨어나다.",
    t4: "Enlightening unseen sensation\nwith two lights that rise above from the basis.",
    desc: "See Gak 001\nStainless steel, aluminum, brass, led\n1200*400*100mm"
  },
  {
    bg: b3,
    menuBg: [m3, m31],
    menuPos: 18,
    main: `“한 줌 빛 속에서 소리를 본다면,\n그 곳은 장소가 된다.”`,
    t1: "빛으로 말을거는",
    t2: "Cheong Gak",
    t3: "자연의 소리에 반응하는 빛으로\n새로운 감각이 불어오다.",
    t4: "Blowing a new sensation with light \nresponding to the sound of nature.",
    desc: "Cheng Gak 001\nStainless steel, steel coil, ring led, film speaker\n100*1200*100mm"
  },
  {
    bg: b4,
    menuBg: [m4, m41],
    menuPos: 33,
    main: `“빛은 사라지는 순간을 기록하고,\n그 순간이 쌓여 공간의 형상을 만든다.”`,
    t1: "빛의 향기를 내뿜는",
    t2: "Hoo Gak",
    t3: "안개처럼 피어오르는 빛의 향기로\n또 다른 감각이  스며들다.",
    t4: "Permeating another sensation\nwith the scent of light that blooms like fog.",
    desc: "Hoo Gak 001\nStainless steel, brass, aluminum, led\n120*2000*100mm"
  }
]


const desc = [
  `  우리는 현재에 집중하며
  지금 이 순간
  우리가 보고, 듣고, 느끼는 것들을
  공감하고 나누기 위해 
  오브제의 의미를 고민합니다.
  
  
  우리의 영감이
  오늘을 살아가는
  당신의 삶에 
  닿을 수 있도록
  
  
  존재하다. 바로. 이 순간을 위해.
  
  
  시간과 공간의 감각을 깨우는 
  오브제 브랜드
  BeHereNow
  
  .
  We focus on the present 
  this very moment
  exploring the meaning of objects
  in order to share
  the things we see, hear, and feel.
  
  
  So that our inspiration 
  can reach the lives of people 
  living today.
  
  
  We exist for this moment.
  
  
  Objet brand that awakens 
  sensations of space and time.
  BeHereNow`,
  `  SEASONNAL

  BeHereNow는
  시즌별로 감각을 깨우는
  새로운 테마를 선정하고
  테마에 따른 오브제 라인업을 
  런칭 합니다.
  
  .
  For each season, 
  BeHereNow selects 
  a different theme to 
  awaken the senses with 
  a new object lineup 
  launch.
  `,
  `  IN STAY

  BeHereNow는
  시즌별로 테마 공간으로
  공간 안에서 오브제를
  자유롭게 경험할 수 있도록
  합니다.
  
  .
  For each season, 
  BeHereNow shares a new 
  spatial theme offering a free 
  experience with objects 
  in different settings.`,
  `  ONLY RESERVATION 

  BeHereNow의
  오브제는 예약제로 판매됩니다.
  기다림의 시간을 거쳐
  완성되는 오브제는 시간의 가치를
  담고 있습니다.
  
  .
  BeHereNow objects 
  are available for purchase 
  by reservation. 
  Over the period they are 
  being produced, they capture 
  the value of time.
  `
]

const Main = styled.main`
  opacity:0;
  filter:blur(24px);
  transition:all 0.8s ease-out;
`

const Logo = styled.div`
  position:fixed;
  top:52px;
  top:3%;
  left:50%;
  width:226px;
  margin-left:-113px;
  z-index:99;
  cursor:pointer;
  padding:8px;
  transform: scale(1);


  transition:transform 0.4s ease-out;

  @media (max-width: 640px) {
    transform: scale(0.75) translateY(-3%);
  }
`

// markup
const IndexPage = () => {
  const [isReady, setIsReady] = useState(false)
  const [swiper, setSwiper] = useState(false)
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    setIsReady(true)
  }, [])

  const handleMenuClick = (index) => {
    if(swiper && swiper.slideTo) {
      swiper.slideTo(index, 600)
    }
  }

  return (
    <Main style={isReady ?
      { opacity: 1, filter: 'blur(0px)' } : { }
    }>
      <title>BeHereNow</title>
      <Logo onClick={() => handleMenuClick(0)}>
        <img src={logo} alt="BeHereNow"/>
      </Logo>
      <Swiper
        modules={[ Scrollbar, Mousewheel, Keyboard ]}
        spaceBetween={0}
        slidesPerView={1}
        direction="vertical"
        mousewheel={{invert:false}}
        keyboard={{enabled:true}}
        speed={600}
        scrollbar={{ draggable: false }}
        onSwiper={setSwiper}
        onSlideChangeTransitionEnd={(swiper) => {
          setSlideIndex(swiper.activeIndex)
        }}
        style={{ width: '100%', height: '100%' }} 
      >
        <SwiperSlide>
          <Menu handleMenuClick={handleMenuClick} data={data} />
        </SwiperSlide>
        <SwiperSlide>
          <Swiper 
            modules={[ Pagination, Keyboard ]}
            spaceBetween={0} 
            keyboard={{enabled:true}}
            slidesPerView={4}
            breakpoints={{
              100: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              960: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
            }}
            pagination={{
              "clickable": true
            }}>
              {desc.map((each, index) => (
                <SwiperSlide key={`desc${index}`}>
                  <Desc data={each}/>
                </SwiperSlide>
              ))}
          </Swiper>
        </SwiperSlide>
        {data.map((each, index) => (
          <SwiperSlide key={`card${index}`}>
            <Card data={each} active={slideIndex === index+2} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Main>
  )
}

export default IndexPage
