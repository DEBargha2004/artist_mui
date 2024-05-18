"use client";

import JobCards from "@/Components/Jobs/JobComponents/JobCards";
import styles from "@/styles/modules/Feed.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Mousewheel } from "swiper/modules";
import FeedJobCard from "./FeedJobCard";

const ArtistRecommendation = () => {
  return (
    <Swiper
      direction={"horizontal"}
      slidesPerView={"auto"}
      spaceBetween={30}
      mousewheel={true}
      // pagination={{
      //   clickable: true,
      // }}
      modules={[Mousewheel]}
      className={styles.swiperRecommendationsContainer}
    >
      <SwiperSlide className={styles.swiperSlide}>
        <FeedJobCard />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <FeedJobCard />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <FeedJobCard />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <FeedJobCard />
      </SwiperSlide>
      {/* <SwiperSlide className={styles.swiperSlide}>
        <JobCards />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <JobCards />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <JobCards />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <JobCards />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <JobCards />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <JobCards />
      </SwiperSlide> */}
    </Swiper>
  );
};

export default ArtistRecommendation;
