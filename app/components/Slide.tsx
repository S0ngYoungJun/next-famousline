"use client"
import React, { useRef , useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Mousewheel} from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import styles from "@/styles/slide.module.scss"
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Swiperslide({slideData}) {
  SwiperCore.use([Navigation, Scrollbar, Mousewheel]);
  const swiperRef = useRef<SwiperCore>();
  const router = useRouter();
  const [clickedSlide, setClickedSlide] = useState(null);

  // 슬라이드 클릭 이벤트 핸들러
  const handleSlideClick = (id :any) => {
    setClickedSlide(id === clickedSlide ? null : id); // 동일한 슬라이드를 다시 클릭하면 해제
  };

  return (
    <div className={styles.container}>
      <h1>   </h1>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Scrollbar]}
        spaceBetween={40} // 슬라이드 사이 간격 조정
        slidesPerView={2} // 한 번에 보여줄 슬라이드 개수
        direction="vertical"
        // height={400}
        mousewheel={true}
      >
       {slideData.map((slide) => (
        <SwiperSlide key={slide.id} onClick={() => handleSlideClick(slide.id)} >
          <div className={styles.cardcontainer} onClick={() => handleSlideClick(slide.id)}> 
              <div className={`${styles.card} ${clickedSlide === slide.id ? styles.mosaic : ''}`}>
                <Image fill={true} src={slide.imageUrl} alt={slide.text} className={styles.card} />
              </div>
              {clickedSlide === slide.id && (
              <div className={styles.textContainer}>
                <div className={styles.overlayText} dangerouslySetInnerHTML={{ __html: slide.text }}></div>
                <Link href={`/slide/${slide.path}`} legacyBehavior>
                    <a className={styles.detailLink}>상세 보기</a>
                </Link>
              </div>
              )}
          </div>
        </SwiperSlide>
        ))}
        {/* 필요한 만큼 SwiperSlide를 추가하세요. */}
      </Swiper>
    </div>
  );
}