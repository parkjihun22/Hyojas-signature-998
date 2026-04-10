import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
    const menuContents = [{ title: "브랜드 소개", url: "/brand/intro" }, { title: "홍보 영상", url: "/brand/video" }];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
  <title>효자 시그니처 998 - 브랜드 소개</title>
  <meta
    name="description"
    content="전주 효자동 중심에 들어서는 효자 시그니처 998의 브랜드 가치와 주거 철학을 소개합니다. 도심 입지와 합리적인 가격 경쟁력을 갖춘 새로운 주거 프리미엄을 만나보세요."
  />
  <link rel="canonical" href="https://www.lotte-castl.co.kr/Brand/intro" />
  <meta name="robots" content="index,follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="효자 시그니처 998" />
  <meta property="og:title" content="효자 시그니처 998 - 브랜드 소개" />
  <meta
    property="og:description"
    content="전주 효자동 중심에 들어서는 효자 시그니처 998. 도심 생활 인프라와 미래 가치를 갖춘 새로운 주거 프리미엄을 소개합니다."
  />
  <meta property="og:url" content="https://www.lotte-castl.co.kr/Brand/intro" />
  <meta property="og:image" content="https://www.lotte-castl.co.kr/images/og/main.jpg" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="브랜드 소개" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>효자 시그니처 998 - 브랜드 소개</h1>
<p className={styles.screenReaderOnly}>
  효자 시그니처 998은 전주 효자동 중심에 들어서는 새로운 주거 단지입니다.
  생활·교육·교통 인프라를 가까이 누리는 도심 입지와 합리적인 가격 경쟁력을 갖춘
  프리미엄 주거 공간으로 새로운 주거 가치를 제시합니다.
</p>

<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
  <div>전주 효자동 중심에서 시작되는 새로운 주거 가치</div>
  <div>효자 시그니처 998, 도심 프리미엄을 완성하다</div>
</div>


            <img className={`${styles.image} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="효자 시그니처 998brand-Image1" />

            <Footer />
        </div>
    );
}

export default Brand1;
