import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Articlecardscoach from './Articlecards/Articlecardscoach'; 

function ArticleCardsSwiper({ visibleCards, navigate }) {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={'auto'}
      loop={true}       // 啟用雙向無限滑動
      freeMode={false}  // 關閉自由模式，確保有 snap 效果
      style={{ padding: '0 1rem' }}
    >
      {visibleCards.map((card, index) => (
        <SwiperSlide
          key={card.id || index}
          style={{ width: '40%' }}
          className={`Articlecardscoach card${index + 1}`}
          onClick={() => navigate(`/article/${card.id}`)}
        >
          <Articlecardscoach
            date={card.date}
            img={card.img}
            title={card.title}
            content={card.content}
            tags={card.tags}
            category={card.category}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ArticleCardsSwiper;



