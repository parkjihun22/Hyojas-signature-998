import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText: "전주 효자동 중심 입지<br />도심 프리미엄 라이프",
    contentText:
      "전주 완산구 효자동 중심 생활권<br />교육·생활·상업시설이 가까운 주거 환경",
  },
  {
    img: section2Image2,
    titleText: "편리한 생활 인프라<br />완성된 도심 생활권",
    contentText:
      "주변 상권·생활편의시설·의료시설 접근 용이<br />일상에 필요한 다양한 생활 인프라 인접",
  },
  {
    img: section2Image3,
    titleText: "전주 도심 연결 교통망<br />편리한 이동 환경",
    contentText:
      "전주 주요 도심과 연결되는 교통 환경<br />도심 생활권을 빠르게 연결하는 이동 편의성",
  },
  {
    img: section2Image4,
    titleText: "교육·생활 인프라 중심<br />안정적인 주거 환경",
    contentText:
      "학교·생활시설·상업시설이 가까운 입지<br />실거주 만족도를 높이는 도심 주거환경",
  },
  {
    img: section2Image5,
    titleText: "총 426세대 규모<br />효자 시그니처 998",
    contentText:
      "전용 59㎡ · 78㎡ · 84㎡A · 84㎡B 구성<br />도심 속 새로운 주거 단지",
  },
  {
    img: section2Image6,
    titleText: "도심 속 여유로운 생활<br />쾌적한 주거 환경",
    contentText:
      "주거와 생활이 조화를 이루는 도심 입지<br />편리함과 여유를 함께 누리는 주거 공간",
  },
];





const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Helmet>
  {/* 페이지별 메타 */}
  <title>효자 시그니처 998 - 입지환경</title>
  <meta
    name="description"
    content="전주 효자동 중심 입지, 효자 시그니처 998의 입지환경을 확인하세요. 생활·교육·상업시설이 가까운 도심 생활권과 편리한 주거 환경을 제공합니다."
  />
  <meta name="robots" content="index,follow" />
  <link rel="canonical" href="https://delidilly.co.kr/LocationEnvironment/intro" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="효자 시그니처 998" />
  <meta property="og:title" content="효자 시그니처 998 - 입지환경" />
  <meta
    property="og:description"
    content="전주 효자동 중심 생활권에 위치한 효자 시그니처 998. 생활·교육·상업시설이 가까운 편리한 입지환경을 확인하세요."
  />
  <meta property="og:url" content="https://delidilly.co.kr/LocationEnvironment/intro" />
  <meta property="og:image" content="https://delidilly.co.kr/img/og/location.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="효자 시그니처 998 - 입지환경" />
  <meta
    name="twitter:description"
    content="전주 효자동 중심 입지와 생활 인프라를 갖춘 효자 시그니처 998의 입지환경을 확인하세요."
  />
  <meta name="twitter:image" content="https://delidilly.co.kr/img/og/location.jpg" />
  <meta name="twitter:url" content="https://delidilly.co.kr/LocationEnvironment/intro" />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "효자 시그니처 998 - 입지환경",
      "url": "https://delidilly.co.kr/LocationEnvironment/intro",
      "description":
        "전주 효자동 중심 입지에 위치한 효자 시그니처 998의 생활 환경과 주변 인프라 정보를 제공합니다.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "contentUrl": "https://delidilly.co.kr/img/og/location.jpg",
        "width": 1200,
        "height": 630
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://delidilly.co.kr/" },
          { "@type": "ListItem", "position": 2, "name": "입지환경", "item": "https://delidilly.co.kr/LocationEnvironment/intro" }
        ]
      }
    })}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="입지환경" />

<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  효자 시그니처 998 - 입지안내
</h1>
<p className={styles.screenReaderOnly}>
  효자 시그니처 998의 입지 정보를 확인하세요. 전주 효자동 중심 생활권에 위치해
  생활·교육·상업시설을 가까이에서 이용할 수 있는 편리한 도심 주거 환경을 제공합니다.
</p>

<div className={styles.textBox}>
  <div>전주 효자동 중심에서</div>
  <div>삶의 가치가 높아지는 곳</div>
  <div>효자 시그니처 998가 새로운 주거 기준을 만듭니다.</div>
</div>



      <img
        src={page1}
        className={styles.image2}
        alt="효자 시그니처 998입지환경-image1"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 효자 시그니처 998사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
