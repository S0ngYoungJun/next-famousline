'use client'
import style from '@/styles/detail.module.scss'
import NavLinks from '@/app/components/genre-links';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import React from 'react';
interface Movie {
  id: string;
  text: string;
  path: string;
  imageUrl: string;
}


export default function Home() {
  const [data, setDatas] = useState<Movie[]>([]);
  const [filteredData, setFilteredData] = useState<Movie[]>([]);
  const params = useParams()
  console.log(params)

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('/api/movie');
      if (response.ok) {
        const data = await response.json();
        setDatas(data);
      } else {
        console.error('Failed to fetch posts');
      }
    }
    console.log(data)
    fetchPosts();
  }, []);

  
  useEffect(() => {
    // params가 변경될 때마다 필터링된 데이터를 설정
    if (params && data.length > 0) {
      const filtered = data.filter(item => item.path === `/${params.id}`);
      setFilteredData(filtered);
    }
    console.log(params.id)
  }, [params, data]);

  return (
    <div className={style.root}>
      <div className={style.nav}>
        <div className={style.link}>
          <NavLinks/>
        </div>
        <div></div>
      </div>
      <div className={style.main}> 
      {filteredData.map(item => (
        <div key={item.id} className={style.text}>
          {/* 줄바꿈을 적용할 부분에 <br> 태그나 \n 문자열을 추가합니다. */}
          {item.text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  ))}
</div>
    </div>
  );
}
