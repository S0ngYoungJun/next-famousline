'use client'
import Swiperslide from './components/Slide';
import style from '@/styles/main.module.scss'
import NavLinks from './components/genre-links';
import { useEffect, useState } from 'react';
interface Movie {
  id: string;
  text: string;
  path: string;
  imageUrl: string;
}

const slideData = [
  {
    id: 1,
    text: (
      <div style={{display: 'flex' , justifyContent:'center' , textAlign:'center'}}>
        왕이라는 자리가 <br />
        남을 쳐내고 얻어야만 하는 자리라면 <br />
        난 왕이 되지 않겠소.
      </div>
    ),
    path: '/path1',
    imageUrl: '/image/광해.jpg',
  },,
  {
    id: 2,
    text: (
      <div style={{display: 'flex' , justifyContent:'center' , textAlign:'center'}}>
        모든 것을 잃어야, <br />
        어떤 것이라도 자유롭게 할 수 있어 
      </div>
    ),
    path: '/path2',
    imageUrl: '/image/파이트클럽.jpg',
    
  },
  {
    id: 3,
    text: (
      <div style={{display: 'flex' , justifyContent:'center' , textAlign:'center'}}>
        괴로운 일이 있어도 일일이 신경써서는 안돼.<br />
        자신의 부족한 부분도 사랑하며 앞으로 나아가는 거야.
      </div>
    ),
    path: '/path3',
    imageUrl: '/image/목소리의형태.jpg',
  },
  {
    id: 4,
    text: (
      <div style={{display: 'flex' , justifyContent:'center' , textAlign:'center'}}>
        Live life as<br />
        if there were no second chance
      </div>
    ),
    path: '/path4',
    imageUrl: '/image/어바웃타임.jpg',
  },
  {
    id: 5,
    text: (
      <div style={{display: 'flex' , justifyContent:'center' , textAlign:'center'}}>
        성공은 공짜로 주어지는게 아니야.<br />
        목표를 위해 뭐라고 할 수 있어야 하지.
      </div>
    ),
    path: '/path5',
    imageUrl: '/image/코코.jpg',
  },
  {
    id: 6,
    text: (
      <div style={{display: 'flex' , justifyContent:'center' , textAlign:'center'}}>
        We will find a way.<br />
        we always have.
      </div>
    ),
    path: '/path6',
    imageUrl: '/image/인터스텔라.jpg',
  },
  {
    id: 7,
    text: (<div style={{display: 'flex' , justifyContent:'center' , textAlign:'center'}}>
      You know, no matter how many<br />
      reasons to die in the world, there`s<br />
      always more to live for.
    </div>
    ),
    path: '/path7',
    imageUrl: '/image/루머의루머의루머.jpg',
  },
  {
    id: 8,
    text: (<div style={{display: 'flex' , justifyContent:'center' , textAlign:'center'}}>
      Genius has no race.<br />
      Strength has no gender<br />
      Courage has no limit
    </div>
    ),
    path: '/path8',
    imageUrl: '/image/히든피겨스.jpg',
  },
];
export default function Home() {
  const [data, setDatas] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('/api/movie');
      if (response.ok) {
        const fetchedData = await response.json();
        const transformedData = fetchedData.map(item => ({
          ...item,
          text: item.text.replace(/\n/g, "<br/>") // 줄바꿈 문자를 HTML 태그로 변환
        }));
        setDatas(transformedData);
      } else {
        console.error('Failed to fetch posts');
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className={style.root}>
      <div className={style.nav}>
        <div className={style.link}>
          <NavLinks/>
        </div>
        <div></div>
      </div>
      <div className={style.slide}> 
      <Swiperslide slideData={slideData} />
      </div>
      <div className={style.slide}>
      <Swiperslide slideData={data} />
      </div>
    </div>
  );
}
