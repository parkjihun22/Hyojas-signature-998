import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

// import page1 from "../../assets/BusinessGuide/documents/contract.jpg";

import Ready from "../../components/Ready/Ready";

const BusinessGuide2 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
    	{ title: "분양일정", url: "/BusinessGuide/plan" },
    	// { title: "계약서류안내", url: "/BusinessGuide/documents" },
	];
	const [isScroll, setIsScroll] = useState(false);
	const [selectedOption, setSelectedOption] = useState(1); // 선택된 옵션 (1~6)
	const [isImageVisible, setIsImageVisible] = useState(false); // isImageVisible 상태 추가
	const { pathname } = useLocation(); // 현재 경로를 가져옴

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

	// 이미지 표시 여부를 변경하는 로직 추가 (예시)
	useEffect(() => {
		const handleImageVisibility = () => {
			if (window.scrollY > 200) { // 예시: 스크롤이 200px 이상 내려갔을 때
				setIsImageVisible(true);
			} else {
				setIsImageVisible(false);
			}
		};

		window.addEventListener('scroll', handleImageVisibility);

		return () => {
			window.removeEventListener('scroll', handleImageVisibility);
		};
	}, []);

	return (
		<div className={styles.container}>
			<Helmet>
			{/* 필수 메타 */}
			<title>효자 시그니처 998 - 계약서류안내</title>
			<meta
				name="description"
				content="효자 시그니처 998 계약 진행을 위한 서류 안내. 신분증, 주민등록등본, 인감증명서 등 필수 제출서류와 준비 절차, 유의사항을 확인하세요."
			/>
			<meta name="robots" content="index,follow" />
			<link
				rel="canonical"
				href="https://delidilly.co.kr/BusinessGuide/documents"
			/>

			{/* Open Graph */}
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content="효자 시그니처 998" />
			<meta property="og:title" content="효자 시그니처 998 - 계약서류안내" />
			<meta
				property="og:description"
				content="효자 시그니처 998 계약서류 안내: 신분증·주민등록등본·인감증명서 등 필수 서류와 준비 절차, 유의사항을 확인하세요."
			/>
			<meta property="og:url" content="https://delidilly.co.kr/BusinessGuide/documents" />
			<meta property="og:image" content="https://delidilly.co.kr/Main1.png" />
			</Helmet>

			<Header isChanged={isScroll} />
			<FixIcon />
			<Bener title="계약서류안내" />
			<MenuBar contents={menuContents} />

			<h1 className={styles.screenReaderOnly}>효자 시그니처 998 - 계약서류안내</h1>
			<p className={styles.screenReaderOnly}>
			효자 시그니처 998 계약 진행을 위해 필요한 제출 서류와 준비 절차를 안내합니다.
			필수 서류 목록과 준비 방법, 제출 시 유의사항을 확인해 원활한 계약 절차를 진행하시기 바랍니다.
			</p>

			<div className={styles.textBox}>
			<div>전주 효자동 중심의 새로운 주거 가치</div>
			<div>효자 시그니처 998, 계약서류를 미리 준비하세요.</div>
			</div>

			{/* 이미지에 isImageVisible 상태 적용 */}
			{/* <img className={`${styles.image4} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="효자 시그니처 998계약서류안내-image1" /> */}



			<Ready/>


			<Footer /> 
		</div>
	);
};

export default BusinessGuide2;
