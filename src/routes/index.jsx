import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Navigate, Routes, Route, useLocation } from 'react-router-dom';

import URL from 'constants/url';
import CODE from 'constants/code';

//COMMON
import EgovHeader from 'components/EgovHeader';
import EgovFooter from 'components/EgovFooter';
import EgovInfoPopup from 'components/EgovInfoPopup';
import EgovError from 'components/EgovError';

import EgovMain from 'pages/main/EgovMain';
import EgovLogin from 'pages/login/EgovLogin';
//SNS
import SnsNaverCallback from 'components/sns/SnsNaverCallback';
import SnsKakaoCallback from 'components/sns/SnsKakaoCallback';
//ABOUT
import EgovAboutSite from 'pages/about/EgovAboutSite';
import EgovAboutHistory from 'pages/about/EgovAboutHistory';
import EgovAboutOrganization from 'pages/about/EgovAboutOrganization';
import EgovAboutLocation from 'pages/about/EgovAboutLocation';

//INTRO
import EgovIntroWork from 'pages/intro/EgovIntroWork';
import EgovIntroService from 'pages/intro/EgovIntroService';
import EgovIntroWameter from 'pages/intro/EgovIntroWameter';
import EgovIntroService1 from 'pages/intro/EgovIntroService1';
import EgovIntroService2 from 'pages/intro/EgovIntroService2';
import EgovIntroService3 from 'pages/intro/EgovIntroService3';
import EgovIntroService4 from 'pages/intro/EgovIntroService4';
import EgovIntroService5 from 'pages/intro/EgovIntroService5';

//SUPPORT
import EgovSupportDownloadList from 'pages/support/download/EgovDownloadList';
import EgovSupportDownloadDetail from 'pages/support/download/EgovDownloadDetail';
import EgovSupportDownloadCreate from 'pages/support/download/EgovDownloadCreate';
import EgovSupportQnaList from 'pages/support/qna/EgovQnaList';
import EgovSupportQnaDetail from 'pages/support/qna/EgovQnaDetail';
import EgovSupportApply from 'pages/support/apply/EgovSupportApply';
//jht
import EgovCatalogList from 'pages/support/catalog/EgovCatalogList';
import EgovCatalogDetail from 'pages/support/catalog/EgovCatalogDetail';
import EgovCatalogEdit from 'pages/support/catalog/EgovCatalogEdit';
import EgovMsaList from 'pages/support/msa/EgovMsaList';
import EgovMsaDetail from 'pages/support/msa/EgovMsaDetail';
import EgovMsaEdit from 'pages/support/msa/EgovMsaEdit';
import EgovCntcList from 'pages/support/cntc/EgovCntcList';
import EgovCntcDetail from 'pages/support/cntc/EgovCntcDetail';
import EgovCntcEdit from 'pages/support/cntc/EgovCntcEdit';
import EgovMenualList from 'pages/support/menual/EgovMenualList';
import EgovMenualDetail from 'pages/support/menual/EgovMenualDetail';
import EgovMenualEdit from 'pages/support/menual/EgovMenualEdit';
import EgovSamList from 'pages/support/sam/EgovSamList';
import EgovSamDetail from 'pages/support/sam/EgovSamDetail';
import EgovSamEdit from 'pages/support/sam/EgovSamEdit';
import EgovInstallList from 'pages/support/install/EgovInstallList';
import EgovInstallDetail from 'pages/support/install/EgovInstallDetail';
import EgovInstallEdit from 'pages/support/install/EgovInstallEdit';
import EgovCdList from 'pages/support/cd/EgovCdList';
import EgovCdDetail from 'pages/support/cd/EgovCdDetail';
import EgovCdEdit from 'pages/support/cd/EgovCdEdit';

//INFORM
import EgovDailyList from 'pages/inform/daily/EgovDailyList';
import EgovDailyDetail from 'pages/inform/daily/EgovDailyDetail';
import EgovWeeklyList from 'pages/inform/weekly/EgovWeeklyList';

import EgovNoticeList from 'pages/inform/notice/EgovNoticeList';
import EgovNoticeDetail from 'pages/inform/notice/EgovNoticeDetail';
import EgovNoticeEdit from 'pages/inform/notice/EgovNoticeEdit';

import EgovGalleryList from 'pages/inform/gallery/EgovGalleryList';
import EgovGalleryDetail from 'pages/inform/gallery/EgovGalleryDetail';
import EgovGalleryEdit from 'pages/inform/gallery/EgovGalleryEdit';

//ADMIN
import EgovAdminScheduleList from 'pages/admin/schedule/EgovAdminScheduleList';
import EgovAdminScheduleDetail from 'pages/admin/schedule/EgovAdminScheduleDetail';
import EgovAdminScheduleEdit from 'pages/admin/schedule/EgovAdminScheduleEdit';

import EgovAdminBoardList from 'pages/admin/board/EgovAdminBoardList';
import EgovAdminBoardEdit from 'pages/admin/board/EgovAdminBoardEdit';

import EgovAdminUsageList from 'pages/admin/usage/EgovAdminUsageList';
import EgovAdminUsageEdit from 'pages/admin/usage/EgovAdminUsageEdit';

import EgovAdminNoticeList from 'pages/admin/notice/EgovAdminNoticeList';
import EgovAdminNoticeDetail from 'pages/admin/notice/EgovAdminNoticeDetail';
import EgovAdminNoticeEdit from 'pages/admin/notice/EgovAdminNoticeEdit';

import EgovAdminGalleryList from 'pages/admin/gallery/EgovAdminGalleryList';
import EgovAdminGalleryDetail from 'pages/admin/gallery/EgovAdminGalleryDetail';
import EgovAdminGalleryEdit from 'pages/admin/gallery/EgovAdminGalleryEdit';
//사이트관리자 암호 바꾸기 기능 추가 2023.04.15(토) 김일국 추가
import EgovAdminPasswordUpdate from 'pages/admin/manager/EgovAdminPasswordUpdate';
//회원관리 기능 추가
import EgovAdminMemberList from 'pages/admin/members/EgovAdminMemberList';
import EgovAdminMemberEdit from 'pages/admin/members/EgovAdminMemberEdit';
//마이페이지 기능 추가
import EgovMypageEdit from 'pages/mypage/EgovMypageEdit';
import * as EgovNet from 'api/egovFetch'; // jwt토큰 위조 검사 때문에 추가
import initPage from 'js/ui';

const RootRoutes = () => {
  //useLocation객체를 이용하여 정규표현식을 사용한 /admin/~ 으로 시작하는 경로와 비교에 사용(아래 1줄) */}
  const location = useLocation();

  //리액트에서 사이트관리자에 접근하는 토큰값 위변조 방지용으로 서버에서 비교하는 함수 추가
  const jwtAuthentication = useCallback(() => {
    console.group("jwtAuthentication");
    console.log("[Start] jwtAuthentication ------------------------------");

    const jwtAuthURL = "/jwtAuthAPI";
    let requestOptions = {
      method: "POST",
    };

    EgovNet.requestFetch(jwtAuthURL, requestOptions, (resp) => {
      if (resp === false) {
        setMounted(false);
      } else {
        setMounted(true); // 이 값으로 true 일 때만 페이지를 렌더링이 되는 변수 사용.
      }
    });

    console.log("------------------------------jwtAuthentication [End]");
    console.groupEnd("jwtAuthentication");
  }, []);

  //시스템관리 메뉴인 /admin/으로 시작하는 URL은 모두 로그인이 필요하도록 코드추가(아래)
  const isMounted = useRef(false); // 아래 로그인 이동 부분이 2번 실행되지 않도록 즉, 마운트 될 때만 실행되도록 변수 생성
  const [mounted, setMounted] = useState(false);// 컴포넌트 최초 마운트 후 리렌더링 전 로그인 페이지로 이동하는 조건으로 사용

  useEffect(() => {
	if (!isMounted.current) { // 컴포넌트 최초 마운트 시 페이지 진입 전(렌더링 전) 실행
		isMounted.current = true; // 이 값으로 true 일 때만 페이지를 렌더링이 되는 변수 사용.
		setMounted(true); // 이 값으로 true 일 때만 페이지를 렌더링이 되는 변수 사용.
		const regex = /^(\/admin\/)+(.)*$/; //정규표현식 사용: /admin/~ 으로 시작하는 경로 모두 포함
		if(regex.test(location.pathname)) {
			setMounted(false); // 이 값으로 true 일 때만 페이지를 렌더링이 되는 변수 사용. 기본은 숨기기
			jwtAuthentication(); // 이 함수에서 관리자단 인증여부 확인 후 렌더링 처리
		}
	}
  },[jwtAuthentication, location, mounted]); // location 경로와 페이지 마운트상태가 변경 될 때 업데이트 후 리렌더링

  if(mounted) { // 인증 없이 시스템관리 URL로 접근할 때 렌더링 되는 것을 방지하는 조건추가. 
	  return (
	      <Routes>
	        <Route path={URL.ERROR} element={<EgovError />} />
	        <Route path="*" element={<SecondRoutes/>} />
	      </Routes>
	  )
  }
}

const SecondRoutes = () => {
  // eslint-disable-next-line no-unused-vars
  const [loginVO, setLoginVO] = useState({});

  //useRef객체를 사용하여 페이지 마운트 된 후 ui.js를 로딩 하도록 변경 코드 추가(아래)
  const isMounted = useRef(false); // 아래 로그인 이동 부분이 2번 실행되지 않도록 즉, 마운트 될 때만 실행되도록 변수 생성
  useEffect(() => {
    if (!isMounted.current) { // 컴포넌트 최초 마운트 시 페이지 진입 전(렌더링 전) 실행
		isMounted.current = true; // 이 값으로 true 일 때만 페이지를 렌더링이 되는 변수 사용.
	}else{
		initPage();
	}
  },[]);
  
  return (
    <>
      <EgovHeader />
      <Routes>
        {/* MAIN */}
        <Route path={URL.MAIN} element={<EgovMain />} />

        {/* LOGIN */}
        <Route path={URL.LOGIN} element={<EgovLogin
                onChangeLogin={(user) => setLoginVO(user)}
              />}/>
		{/* Sns Naver Callback */}
        <Route path={URL.SNS_NAVER_CB} element={<SnsNaverCallback
                onChangeLogin={(user) => setLoginVO(user)}
        	  />}/>
        {/* Sns Kakao Callback */}
        <Route path={URL.SNS_KAKAO_CB} element={<SnsKakaoCallback
                onChangeLogin={(user) => setLoginVO(user)}
        	  />}/>
        {/* ERROR */}
        <Route path={URL.ERROR} element={<EgovError />} />

        {/* ABOUT */}
        <Route path={URL.ABOUT} element={<Navigate to={URL.ABOUT_SITE} />} />
        <Route path={URL.ABOUT_SITE} element={<EgovAboutSite />} />
        <Route path={URL.ABOUT_HISTORY} element={<EgovAboutHistory />} />
        <Route path={URL.ABOUT_LOCATION} element={<EgovAboutLocation />} />
        <Route path={URL.ABOUT_ORGANIZATION} element={<EgovAboutOrganization />} />

        {/* INTRO */}
        <Route path={URL.INTRO} element={<Navigate to={URL.INTRO_WORKS} />} />
        <Route path={URL.INTRO_WORKS} element={<EgovIntroWork />} />
        <Route path={URL.INTRO_SERVICE} element={<EgovIntroService />} />
        <Route path={URL.INTRO_SERVICE1} element={<EgovIntroService1 />} />
        <Route path={URL.INTRO_SERVICE2} element={<EgovIntroService2 />} />
        <Route path={URL.INTRO_SERVICE3} element={<EgovIntroService3 />} />
        <Route path={URL.INTRO_SERVICE4} element={<EgovIntroService4 />} />
        <Route path={URL.INTRO_SERVICE5} element={<EgovIntroService5 />} />

        {/* SUPPORT */}
        <Route path={URL.SUPPORT} element={<Navigate to={URL.SUPPORT_DOWNLOAD} />} />

        <Route path={URL.SUPPORT_DOWNLOAD} element={<EgovSupportDownloadList />} />
        <Route path={URL.SUPPORT_DOWNLOAD_DETAIL} element={<EgovSupportDownloadDetail />} />
        <Route path={URL.SUPPORT_DOWNLOAD_CREATE} element={<EgovSupportDownloadCreate />} />

        <Route path={URL.SUPPORT_QNA} element={<EgovSupportQnaList />} />
        <Route path={URL.SUPPORT_QNA_DETAIL} element={<EgovSupportQnaDetail />} />

        <Route path={URL.SUPPORT_APPLY} element={<EgovSupportApply />} />

        <Route path={URL.SUPPORT_CATALOG} element={<EgovCatalogList />} />
        <Route path={URL.SUPPORT_CATALOG_DETAIL} element={<EgovCatalogDetail />} />
        <Route path={URL.SUPPORT_CATALOG_CREATE} element={<EgovCatalogEdit mode={CODE.MODE_CREATE} />} />
        <Route path={URL.SUPPORT_CATALOG_MODIFY} element={<EgovCatalogEdit mode={CODE.MODE_MODIFY} />} />
        <Route path={URL.SUPPORT_MSA} element={<EgovMsaList />} />
        <Route path={URL.SUPPORT_MSA_DETAIL} element={<EgovMsaDetail />} />
        <Route path={URL.SUPPORT_MSA_CREATE} element={<EgovMsaEdit mode={CODE.MODE_CREATE} />} />
        <Route path={URL.SUPPORT_MSA_MODIFY} element={<EgovMsaEdit mode={CODE.MODE_MODIFY} />} />
        <Route path={URL.SUPPORT_CNTC} element={<EgovCntcList />} />
        <Route path={URL.SUPPORT_CNTC_DETAIL} element={<EgovCntcDetail />} />
        <Route path={URL.SUPPORT_CNTC_CREATE} element={<EgovCntcEdit mode={CODE.MODE_CREATE} />} />
        <Route path={URL.SUPPORT_CNTC_MODIFY} element={<EgovCntcEdit mode={CODE.MODE_MODIFY} />} />
        <Route path={URL.SUPPORT_MENUAL} element={<EgovMenualList />} />
        <Route path={URL.SUPPORT_MENUAL_DETAIL} element={<EgovMenualDetail />} />
        <Route path={URL.SUPPORT_MENUAL_CREATE} element={<EgovMenualEdit mode={CODE.MODE_CREATE} />} />
        <Route path={URL.SUPPORT_MENUAL_MODIFY} element={<EgovMenualEdit mode={CODE.MODE_MODIFY} />} />
        <Route path={URL.SUPPORT_SAM} element={<EgovSamList />} />
        <Route path={URL.SUPPORT_SAM_DETAIL} element={<EgovSamDetail />} />
        <Route path={URL.SUPPORT_SAM_CREATE} element={<EgovSamEdit mode={CODE.MODE_CREATE} />} />
        <Route path={URL.SUPPORT_SAM_MODIFY} element={<EgovSamEdit mode={CODE.MODE_MODIFY} />} />
        <Route path={URL.SUPPORT_INSTALL} element={<EgovInstallList />} />
        <Route path={URL.SUPPORT_INSTALL_DETAIL} element={<EgovInstallDetail />} />
        <Route path={URL.SUPPORT_INSTALL_CREATE} element={<EgovInstallEdit mode={CODE.MODE_CREATE} />} />
        <Route path={URL.SUPPORT_INSTALL_MODIFY} element={<EgovInstallEdit mode={CODE.MODE_MODIFY} />} />
        <Route path={URL.SUPPORT_CD} element={<EgovCdList />} />
        <Route path={URL.SUPPORT_CD_DETAIL} element={<EgovCdDetail />} />
        <Route path={URL.SUPPORT_CD_CREATE} element={<EgovCdEdit mode={CODE.MODE_CREATE} />} />
        <Route path={URL.SUPPORT_CD_MODIFY} element={<EgovCdEdit mode={CODE.MODE_MODIFY} />} />
                
        {/* INFORM */}
        <Route path={URL.INFORM} element={<Navigate to={URL.INFORM_DAILY} />} />

        <Route path={URL.INFORM_DAILY} element={<EgovDailyList />} />
        <Route path={URL.INFORM_DAILY_DETAIL} element={<EgovDailyDetail />} />
        <Route path={URL.INFORM_WEEKLY} element={<EgovWeeklyList />} />
        <Route path={URL.INFORM_WEEKLY_DETAIL} element={<EgovDailyDetail />} />

        <Route path={URL.INFORM_NOTICE} element={<EgovNoticeList />} />
        <Route path={URL.INFORM_NOTICE_DETAIL} element={<EgovNoticeDetail />} />
        <Route path={URL.INFORM_NOTICE_CREATE} element={<EgovNoticeEdit mode={CODE.MODE_CREATE} />} />
        <Route path={URL.INFORM_NOTICE_MODIFY} element={<EgovNoticeEdit mode={CODE.MODE_MODIFY} />} />
        <Route path={URL.INFORM_NOTICE_REPLY} element={<EgovNoticeEdit mode={CODE.MODE_REPLY} />} />

        <Route path={URL.INFORM_GALLERY} element={<EgovGalleryList />} />
        <Route path={URL.INFORM_GALLERY_DETAIL} element={<EgovGalleryDetail />} />
        <Route path={URL.INFORM_GALLERY_CREATE} element={<EgovGalleryEdit mode={CODE.MODE_CREATE} />} />
        <Route path={URL.INFORM_GALLERY_MODIFY} element={<EgovGalleryEdit mode={CODE.MODE_MODIFY} />} />
        <Route path={URL.INFORM_GALLERY_REPLY} element={<EgovGalleryEdit mode={CODE.MODE_REPLY} />} />

        {/* ADMIN */}
        <Route path={URL.ADMIN} element={<Navigate to={URL.ADMIN_SCHEDULE} />} />
        <Route path={URL.ADMIN_SCHEDULE} element={<EgovAdminScheduleList />} />
        <Route path={URL.ADMIN_SCHEDULE_DETAIL} element={<EgovAdminScheduleDetail />} />
        <Route path={URL.ADMIN_SCHEDULE_CREATE} element={<EgovAdminScheduleEdit mode={CODE.MODE_CREATE} />} />
        <Route path={URL.ADMIN_SCHEDULE_MODIFY} element={<EgovAdminScheduleEdit mode={CODE.MODE_MODIFY} />} />

        <Route path={URL.ADMIN_BOARD} element={<EgovAdminBoardList />} />
        <Route path={URL.ADMIN_BOARD_CREATE} element={<EgovAdminBoardEdit mode={CODE.MODE_CREATE} />} />
        <Route path={URL.ADMIN_BOARD_MODIFY} element={<EgovAdminBoardEdit mode={CODE.MODE_MODIFY} />} />

        <Route path={URL.ADMIN_USAGE} element={<EgovAdminUsageList />} />
        <Route path={URL.ADMIN_USAGE_CREATE} element={<EgovAdminUsageEdit mode={CODE.MODE_CREATE} />} />
        <Route path={URL.ADMIN_USAGE_MODIFY} element={<EgovAdminUsageEdit mode={CODE.MODE_MODIFY} />} />

        <Route path={URL.ADMIN_NOTICE} element={<EgovAdminNoticeList />} />
        <Route path={URL.ADMIN_NOTICE_DETAIL} element={<EgovAdminNoticeDetail />} />
        <Route path={URL.ADMIN_NOTICE_CREATE} element={<EgovAdminNoticeEdit mode={CODE.MODE_CREATE} />} />
        <Route path={URL.ADMIN_NOTICE_MODIFY} element={<EgovAdminNoticeEdit mode={CODE.MODE_MODIFY} />} />
        <Route path={URL.ADMIN_NOTICE_REPLY} element={<EgovAdminNoticeEdit mode={CODE.MODE_REPLY} />} />

        <Route path={URL.ADMIN_GALLERY} element={<EgovAdminGalleryList />} />
        <Route path={URL.ADMIN_GALLERY_DETAIL} element={<EgovAdminGalleryDetail />} />
        <Route path={URL.ADMIN_GALLERY_CREATE} element={<EgovAdminGalleryEdit mode={CODE.MODE_CREATE} />} />
        <Route path={URL.ADMIN_GALLERY_MODIFY} element={<EgovAdminGalleryEdit mode={CODE.MODE_MODIFY} />} />
        <Route path={URL.ADMIN_GALLERY_REPLY} element={<EgovAdminGalleryEdit mode={CODE.MODE_REPLY} />} />
        {/* 사이트관리자 암호 바꾸기 기능 */}
		<Route path={URL.ADMIN_MANAGER} element={<EgovAdminPasswordUpdate />} />
		{/* 회원관리 기능 */}
		<Route path={URL.ADMIN_MEMBERS} element={<EgovAdminMemberList />} />
		<Route path={URL.ADMIN_MEMBERS_CREATE} element={<EgovAdminMemberEdit mode={CODE.MODE_CREATE} />} />
		<Route path={URL.ADMIN_MEMBERS_MODIFY} element={<EgovAdminMemberEdit mode={CODE.MODE_MODIFY} />} />
		{/* MYPAGE */}
        <Route path={URL.MYPAGE_CREATE} element={<EgovMypageEdit mode={CODE.MODE_CREATE} />} />
		<Route path={URL.MYPAGE_MODIFY} element={<EgovMypageEdit mode={CODE.MODE_MODIFY} />} />
      </Routes>
      <EgovFooter />
      <EgovInfoPopup />
      
    </>
  )
  
}


export default RootRoutes;