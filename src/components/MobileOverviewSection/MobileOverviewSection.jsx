// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>효자 시그니처 998</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>전라북도 전주시 완산구 효자동1가 636번지 일원</span>
        </li>
        <li>
          <strong>사업방식</strong>
          <span>지역주택조합 아파트</span>
        </li>
        <li>
          <strong>세대수</strong>
          <span>총 426세대</span>
        </li>
        <li>
          <strong>주택형</strong>
          <span>전용 59㎡ · 78㎡ · 84㎡A · 84㎡B</span>
        </li>
        <li>
          <strong>시공예정</strong>
          <span>코오롱글로벌</span>
        </li>
      </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="입지환경 지도 1"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="입지환경 지도 2"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            전주 생활중심과 학세권을 누리는<br />
            효자 시그니처 998프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "전주 효자동 중심 입지 프리미엄",
      desc:
        "전주 완산구 효자동 중심 생활권 입지<br/>교육·생활·교통 인프라를 가까이 누리는 주거환경<br/>도심과 연결되는 편리한 생활 동선 확보",
    },
    {
      img: slide2,
      title: "노후 주거지 교체 수요 집중",
      desc:
        "사업지 인근 노후 아파트 밀집 지역으로 신축 수요 기대<br/>기존 구축 아파트 대비 주거 쾌적성·상품성 우위<br/>새 아파트에 대한 지역 내 관심도 높은 입지",
    },
    {
      img: slide3,
      title: "전주 공급 부족에 따른 희소성",
      desc:
        "전주 신규 아파트 공급 감소 구간에서 기대되는 희소가치<br/>수요 대비 입주 물량 부족으로 신축 선호도 확대<br/>향후 공급 공백기 속 신규 분양단지 경쟁력 기대",
    },
    {
      img: slide4,
      title: "교육·생활 인프라를 누리는 도심 생활권",
      desc:
        "효자동 생활권 기반의 편리한 생활 인프라 이용 가능<br/>주변 상권·생활편의시설·교육환경 접근 우수<br/>실거주 만족도를 높이는 도심형 주거 입지",
    },
    {
      img: slide5,
      title: "총 426세대 대단지 프리미엄",
      desc:
        "총 426세대 규모의 브랜드 주거단지 계획<br/>59㎡, 78㎡, 84㎡A, 84㎡B 구성<br/>실수요자 선호도 높은 평면 중심 설계",
    },
    {
      img: slide6,
      title: "코오롱글로벌 시공예정 프리미엄",
      desc:
        "브랜드 신뢰도 기대<br/>합리적인 가격 경쟁력과 상품성을 함께 갖춘 사업<br/>지역주택조합 방식으로 누리는 프리미엄 주거 가치",
    },
  ];
  

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>HILLSTATE BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
