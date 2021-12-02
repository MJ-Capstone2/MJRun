import React from 'react';
import {
  makeStyles, 
  Typography
} from '@material-ui/core';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/core/'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import su1 from '../../../constants/signup/회원가입1.png';
import su2 from '../../../constants/signup/회원가입2.png';
import su3 from '../../../constants/signup/회원가입3.png';
import su4 from '../../../constants/signup/회원가입4.png';
import su5 from '../../../constants/signup/회원가입5.png';

SwiperCore.use([Navigation, Pagination]);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10
  },
  tabs : {
    marginTop: 40,
    marginBottom: 30,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: '80%',
    height: '80%',
    maxWidth: 400,
    maxHeight: 600,
    marginBottom: 20,
    marginTop: 20
  },
  typo: {
    width: '80%',
    maxWidth: 400,
  }
}));

const suimgs = [su1, su2, su3, su4, su5]
const sucmts = [["https://m.kra.co.kr/comp/view/appDown/mycardApp3.do 위 사이트에서 앱을 다운받는다."], ["회원가입 버튼을 누른다."], ["정보를 입력하고 회원가입을 마친다."], ["메인화면으로 돌아와 로그인 버튼을 누른다."], ["회원번호, 비밀번호를 입력한다", "로그인 버튼을 누른다."]]

const Content = ({ tabindex }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
        navigation
        pagination={{ clickable: 'true' }}
      >
        {
          tabindex === 0 ? suimgs.map((suimg, idx) => 
            <SwiperSlide>
              <div className={classes.tabs}>
                <Typography variant="h6">STEP: {idx+1}</Typography>

                <img src={suimg} alt="suimg" className={classes.img}/>
                {
                  sucmts[idx].map((sucmt, index) =>
                    <Typography className={classes.typo}>{index+1}. {sucmt}</Typography>
                  )
                }
              </div>
            </SwiperSlide>
          )
          :
          tabindex === 1 ? suimgs.map((suimg, idx) => 
            <SwiperSlide>
              <div className={classes.tabs}>
                Slide 2
              </div>
            </SwiperSlide>
          )
          :
          tabindex === 2 ? suimgs.map((suimg, idx) => 
            <SwiperSlide>
              <div className={classes.tabs}>
                Slide 3
              </div>
            </SwiperSlide>
          )
          :
          suimgs.map((suimg, idx) => 
            <SwiperSlide>
              <div className={classes.tabs}>
                Slide 4
              </div>
            </SwiperSlide>
          )
        }
      </Swiper>
    </div>
  );
};

export default Content;