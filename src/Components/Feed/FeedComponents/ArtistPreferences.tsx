"use client";

import styles from "@/styles/modules/Feed.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Mousewheel } from "swiper/modules";

const ArtistPreferences = () => {
  return (
    <>
      {/* <div className={styles.preferencesTags}>
        <p>Compositor</p>
        <p>Lead Compositor</p>
        <p>Matte Painter</p>
        <p>Motion Graphic Artist</p>
        <p>Paint Artist</p>
        <p>Roto Artist</p>
        <p>Texturing</p>
      </div> */}

      <Swiper
        direction={"horizontal"}
        slidesPerView={"auto"}
        spaceBetween={20}
        mousewheel={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Mousewheel]}
        className={styles.swiperContainer}
      >
        <SwiperSlide className={styles.swiperSlide}>All Posts</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Compositor</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Lead Compositor</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Matte Painter</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Motion Graphic Artist</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Paint Artist</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Roto Artist</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Texturing</SwiperSlide>
      </Swiper>
    </>
  );
};

export default ArtistPreferences;
