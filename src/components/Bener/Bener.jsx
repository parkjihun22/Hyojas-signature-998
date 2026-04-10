import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="효자 시그니처 998-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  if (text === '효자 시그니처 998' || text === '홍보영상' || text === '체크포인트' || text === '당첨자서류안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          전주 효자동 중심에서 시작되는 새로운 주거 가치.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          도심 생활 인프라와 미래 가치를 모두 갖춘 프리미엄 주거단지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          코오롱글로벌과 함께하는 프리미엄 주거공간, 효자 시그니처 998.
        </div>
      </>
    );
  } else if (
    text === '사업개요' ||
    text === '세대안내' ||
    text === '인테리어' ||
    text === '청약안내' ||
    text === '모집공고안내' ||
    text === '인지세납부안내'
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          전주 완산구 효자동 중심에서 만나는 새로운 랜드마크 단지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          생활·교육·교통 인프라를 모두 갖춘 도심 프리미엄 입지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          합리적인 가격으로 만나는 지역주택조합 프리미엄 아파트.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          효자 시그니처 998
        </div>
      </>
    );
  } else if (text === '입지환경' || text === '프리미엄') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          전주 도심 핵심 생활권을 누리는 프리미엄 입지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          교육·생활·교통 인프라가 가까운 효자동 중심 주거환경.
        </div>
      </>
    );
  } else if (text === '단지안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          총 426세대 규모의 도심 속 대단지 프리미엄 아파트.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          채광과 개방감을 고려한 단지 설계와 쾌적한 주거환경.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          효자 시그니처 998, 전주의 새로운 주거 기준.
        </div>
      </>
    );
  }
};
