import React from 'react';
import { Typography } from "@material-ui/core";
import {
  makeStyles
} from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/core/'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const useStyles = makeStyles((theme) => ({
  root : {
    width: '100%',
    height: '42em'
  }
}));

SwiperCore.use([Navigation, Pagination]);

const Guide = () => {

  const classes = useStyles();

  return(
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
      navigation
      pagination={{ clickable: 'true' }}
    >
      <SwiperSlide>
        <div className={classes.root}>
          Slide 1
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={classes.root}>
          Slide 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={classes.root}>
          Slide 3
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={classes.root}>
          Slide 4
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Guide;