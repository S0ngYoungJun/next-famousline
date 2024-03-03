
import Swiperslide from './components/Slide';
import style from '@/styles/main.module.scss'
export default function Home() {
  return (
    <div className={style.root}>
      <div className={style.nav}></div>
      <div className={style.slide}> 
      <Swiperslide/>
      </div>
      <div className={style.slide}></div>
    </div>
  );
}
