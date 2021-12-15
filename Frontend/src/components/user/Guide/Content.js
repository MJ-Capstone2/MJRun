import React from 'react';
import {
  makeStyles, 
  Typography
} from '@material-ui/core';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/core/';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import su1 from '../../../constants/signup/회원가입1.png';
import su2 from '../../../constants/signup/회원가입2.png';
import su3 from '../../../constants/signup/회원가입3.png';
import su4 from '../../../constants/signup/회원가입4.png';
import su5 from '../../../constants/signup/회원가입5.png';

import sr1 from '../../../constants/seatreservation/좌석예매1.png';
import sr2 from '../../../constants/seatreservation/좌석예매2.png';
import sr3 from '../../../constants/seatreservation/좌석예매3.png';
import sr4 from '../../../constants/seatreservation/좌석예매4.png';
import sr5 from '../../../constants/seatreservation/좌석예매5.png';
import sr6 from '../../../constants/seatreservation/좌석예매6.png';

import tp1 from '../../../constants/ticketpurchase/tp1.png';
import tp2 from '../../../constants/ticketpurchase/tp2.png';
import tp3 from '../../../constants/ticketpurchase/tp3.png';
import tp4 from '../../../constants/ticketpurchase/tp4.png';
import tp5 from '../../../constants/ticketpurchase/tp5.png';
import tp6 from '../../../constants/ticketpurchase/tp6.png';
import tp7 from '../../../constants/ticketpurchase/tp7.png';

SwiperCore.use([Navigation, Pagination]);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10
  },
  tabs : {
    marginTop: 30,
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
    wordBreak: 'break-all'
  }
}));

const suimgs = [su1, su2, su3, su4, su5];
const sucmts = [["https://m.kra.co.kr/comp/view/appDown/mycardApp3.do 위 사이트에서 앱을 다운받는다."], ["회원가입 버튼을 누른다."], ["정보를 입력하고 회원가입을 마친다."], ["메인화면으로 돌아와 로그인 버튼을 누른다."], ["회원번호, 비밀번호를 입력한다", "로그인 버튼을 누른다."]]

const srimgs = [sr1, sr2, sr3, sr4, sr5, sr6];
const srcmts = [["좌석구매(예매) 버튼을 누른다."], ["사업장과 날짜를 선택한다.", "다음단계 버튼을 누른다."], ["결제유형 및 결제방법, 층, 영역, 시간, 좌석선택 방법을 선택한다.", "다음단계 버튼을 누른다."], ["흰색 자리 중 하나를 선택한다."], ["선택완료 버튼을 누른다."], ["개인정보 수집 및 이용동의에 체크한다.", "결제하기 버튼을 누른다"]]

const tpimgs = [tp1, tp2, tp3, tp4, tp5, tp6, tp7];
const tpcmts = [["내 정보관리 버튼을 누른다"], ["창을 누른다.", "은행을 선택한다.", "등록 버튼을 누른다."], ["은행계좌정보 등록/변경 버튼을 누른다."], ["은행선택창을 누른다.", "등록 버튼을 누른다."], ["마권구매 버튼을 누른다."], ["요일, 파크, 경주번호를 선택한다.", "다음 버튼을 누른다."], ["승식을 선택한다.", "마번을 선택한다.", "배팅금액을 입력한다."]]

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
                <Typography variant="h6">STEP {idx+1}</Typography>

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
          tabindex === 1 ? srimgs.map((srimg, idx) => 
            <SwiperSlide>
              <div className={classes.tabs}>
                <Typography variant="h6">STEP {idx+1}</Typography>

                <img src={srimg} alt="srimg" className={classes.img}/>
                {
                  srcmts[idx].map((srcmt, index) =>
                    <Typography className={classes.typo}>{index+1}. {srcmt}</Typography>
                  )
                }
              </div>
            </SwiperSlide>
          )
          :
          tabindex === 2 ? tpimgs.map((tpimg, idx) => 
            <SwiperSlide>
              <div className={classes.tabs}>
                <Typography variant="h6">STEP {idx+1}</Typography>

                <img src={tpimg} alt="tpimg" className={classes.img}/>
                {
                  tpcmts[idx].map((tpcmt, index) =>
                    <Typography className={classes.typo}>{index+1}. {tpcmt}</Typography>
                  )
                }
              </div>
            </SwiperSlide>
          )
          :
          suimgs.map((suimg, idx) => 
            <SwiperSlide>
              <div className={classes.tabs}>
                <Typography variant="h6">STEP {idx+1}</Typography>

                <img src={suimg} alt="suimg" className={classes.img}/>
                {
                  sucmts[idx].map((sucmt, index) =>
                    <Typography className={classes.typo}>{index+1}. {sucmt}</Typography>
                  )
                }
              </div>
            </SwiperSlide>
          )
        }
      </Swiper>
    </div>
  );
};

export default Content;