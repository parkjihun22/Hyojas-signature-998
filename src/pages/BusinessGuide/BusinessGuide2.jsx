import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


import page1 from "../../assets/BusinessGuide/BusinessGuide2/page1.jpg";

const BusinessGuide2 = () => {
    const menuContents = [
      { title: "사업안내", url: "/BusinessGuide/intro" },
      { title: "분양일정", url: "/BusinessGuide/plan" },
      // { title: "계약서류안내", url: "/BusinessGuide/documents" },
    ];

    const [isScroll, setIsScroll] = useState(false);
    const [isImageVisible, setIsImageVisible] = useState(false); // ✅ 기존 이미지 가시성 상태 유지
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }

            // ✅ 기존 이미지 로딩 로직도 유지 (하지만 Ready가 표시됨)
            if (window.scrollY > 200) {
                setIsImageVisible(true);
            } else {
                setIsImageVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
  <title>효자 시그니처 998 - 분양일정</title>
  <meta
    name="description"
    content="효자 시그니처 998 공급 일정을 확인하세요. 사업 진행 단계와 주요 일정 안내를 통해 단지 정보를 한눈에 확인할 수 있습니다."
  />
  <link rel="canonical" href="https://www.lotte-castl.co.kr/BusinessGuide/plan" />
  <meta name="robots" content="index,follow" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="분양일정" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>효자 시그니처 998 - 분양일정</h1>
<p className={styles.screenReaderOnly}>
  효자 시그니처 998의 사업 진행 일정과 주요 공급 일정을 확인할 수 있습니다.
  단지 공급과 관련된 주요 절차와 단계별 정보를 안내합니다.
</p>

<div className={styles.textBox}>
  <div>전주 효자동 중심에서 시작되는 새로운 주거 가치</div>
  <div>효자 시그니처 998, 공급 일정을 확인하세요.</div>
</div>

{/* 분양일정 이미지 또는 컴포넌트 영역 */}
<img
  className={`${styles.image4} ${isImageVisible ? styles.visible : ''}`}
  src={page1}
  alt="효자 시그니처 998 분양일정 안내"
/>

<div className={styles.readyContainer}>
  {/* 필요한 경우 Ready 또는 분양 카운트 컴포넌트 삽입 */}
</div>


            <Footer />
        </div>
    );
};

export default BusinessGuide2;
