import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
import { Helmet } from "react-helmet-async";




const projectData = [
  { label: '사업명', value: '효자 시그니처 998' },
  { label: '사업위치', value: '전라북도 전주시 완산구 효자동1가 636번지 일원' },
  { label: '대지면적', value: '추후 공지' },
  { label: '건축면적', value: '추후 공지' },
  { label: '연면적', value: '추후 공지' },
  { label: '사업방식', value: '지역주택조합 아파트' },
  { label: '주택형', value: '전용 59㎡ · 78㎡ · 84㎡A · 84㎡B' },
  { label: '세대수', value: '총 426세대' },
];
  
  

const BusinessGuide1 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
		{ title: "분양일정", url: "/BusinessGuide/plan" },
		// { title: "공급안내", url: "/BusinessGuide/documents" }
	];
	const [isScroll, setIsScroll] = useState(false);
	const { pathname } = useLocation(); // 현재 경로를 가져옴
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' }); // 모바일 여부 확인

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScroll(true);
			} else {
				setIsScroll(false);
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
  <title>효자 시그니처 998 - 사업안내</title>
  <meta
    name="description"
    content="전라북도 전주시 완산구 효자동1가 일원에 들어서는 효자 시그니처 998의 사업 개요를 확인하세요. 총 426세대 규모, 전용 59㎡·78㎡·84㎡A·84㎡B 구성의 새로운 주거 단지입니다."
  />
  <meta name="robots" content="index,follow" />
  <link rel="canonical" href="https://delidilly.co.kr/BusinessGuide/intro" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="효자 시그니처 998" />
  <meta property="og:title" content="효자 시그니처 998 - 사업안내" />
  <meta
    property="og:description"
    content="전주 효자동 중심 입지에 들어서는 효자 시그니처 998. 총 426세대 규모와 다양한 평면 구성, 새로운 주거 가치를 확인하세요."
  />
  <meta property="og:url" content="https://delidilly.co.kr/BusinessGuide/intro" />
  <meta property="og:image" content="https://delidilly.co.kr/img/og/business.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="효자 시그니처 998 - 사업안내" />
  <meta
    name="twitter:description"
    content="효자 시그니처 998 사업 개요: 전주 효자동 중심 입지, 총 426세대 규모와 다양한 평면 구성을 확인하세요."
  />
  <meta name="twitter:image" content="https://delidilly.co.kr/img/og/business.jpg" />
  <meta name="twitter:url" content="https://delidilly.co.kr/BusinessGuide/intro" />

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "효자 시그니처 998 - 사업안내",
      "url": "https://delidilly.co.kr/BusinessGuide/intro",
      "description":
        "전라북도 전주시 완산구 효자동1가 일원에 들어서는 효자 시그니처 998의 사업 개요와 위치, 규모, 평면 구성 정보를 제공합니다.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "contentUrl": "https://delidilly.co.kr/img/og/business.jpg",
        "width": 1200,
        "height": 630
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://delidilly.co.kr/" },
          { "@type": "ListItem", "position": 2, "name": "사업안내", "item": "https://delidilly.co.kr/BusinessGuide/intro" }
        ]
      }
    })}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="사업개요" />

<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>효자 시그니처 998 - 사업안내</h1>
<p className={styles.screenReaderOnly}>
  효자 시그니처 998은 전주 효자동 중심 생활권에 조성되는 새로운 주거 단지입니다.
  이 페이지에서는 사업 위치와 규모, 전용 59㎡·78㎡·84㎡A·84㎡B 타입 구성과
  단지의 주요 특징을 안내합니다.
</p>

<div className={styles.textBox}>
  <div>전주 효자동 중심에서 시작되는 새로운 주거 가치</div>
  <div>효자 시그니처 998, 도심 프리미엄을 완성하다</div>
</div>



			<img className={styles.img3} src={page1} alt="효자 시그니처 998-image1"/>

			<div className={styles.tableContainer}>
				{!isMobile && <img className={styles.tableImg} src={tableImage} />}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
