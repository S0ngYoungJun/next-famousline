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
const slideData = [
  {
    id: 1,
    text: '테스트 테스트1',
    path: '/path1',
    imageUrl: '/image/광해.jpg', // 이미지 URL 추가
  },
  {
    id: 2,
    text: '테스트 테스트2',
    path: '/path2',
    imageUrl: '/image/파이트클럽.jpg',
  },
  {
    id: 3,
    text: '테스트 테스트3',
    path: '/path3',
    imageUrl: '/image/목소리의형태.jpg',
  },
  {
    id: 4,
    text: '테스트 테스트4',
    path: '/path4',
    imageUrl: '/image/코코.jpg',
  },
  {
    id: 5,
    text: '테스트 테스트5',
    path: '/path5',
    imageUrl: '/image/어바웃타임.jpg',
  },
  {
    id: 6,
    text: '테스트 테스트5',
    path: '/path5',
    imageUrl: '/image/인터스텔라.jpg',
  },
  {
    id: 7,
    text: '테스트 테스트5',
    path: '/path5',
    imageUrl: '/image/너의이름은.jpg',
  },
];


export default function Swiperslide() {
  SwiperCore.use([Navigation, Scrollbar, Mousewheel]);
  const swiperRef = useRef<SwiperCore>();

  const [clickedSlide, setClickedSlide] = useState(null);

  // 슬라이드 클릭 이벤트 핸들러
  const handleSlideClick = (id) => {
    setClickedSlide(id === clickedSlide ? null : id); // 동일한 슬라이드를 다시 클릭하면 해제
  };



  return (
    <div className={styles.container}>
      <h1>   </h1>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Scrollbar]}
        spaceBetween={250} // 슬라이드 사이 간격 조정
        slidesPerView={2} // 한 번에 보여줄 슬라이드 개수
        direction="vertical"
        height={400}
        mousewheel={true}
      >
       {slideData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className={styles.cardcontainer}> 
            <Link href={slide.path}> {/* Link 컴포넌트로 감싼다 */}
              <div className={styles.card}>
                <Image fill={true} src={slide.imageUrl} alt={slide.text} className={styles.card} /> 
              </div>
              </Link>
          </div>
        </SwiperSlide>
        ))}
        {/* 필요한 만큼 SwiperSlide를 추가하세요. */}
      </Swiper>
    </div>
  );
}