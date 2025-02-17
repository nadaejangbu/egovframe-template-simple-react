
const URL = {
    //COMMON
    MAIN                        : "/", //메인페이지   
    
    LOGIN                       : "/login", //로그인
    SNS_NAVER_CB                : "/login/naver/callback", //Sns Naver Callback
    SNS_KAKAO_CB                : "/login/kakao/callback", //Sns Kakao Callback
    ERROR                       : "/error", //로그인
    
    //ABOUT
    ABOUT                       : "/about", //회사소개   
    ABOUT_SITE                  : "/about/site", // 회사소개/소개
    ABOUT_LOCATION              : "/about/location", // 회사소개/찾아오시는길
    ABOUT_ORGANIZATION          : "/about/organization", // 회사소개/인증,특허
    ABOUT_HISTORY               : "/about/history", // 회사소개/연혁
    
    //INTRO
    INTRO                       : "/intro", //정보마당
    INTRO_WORKS                 : "/intro/works", // 정보마당/주요사업소개
    INTRO_SERVICE               : "/intro/service", // 정보마당/주요서비스소개
    INTRO_WAMETER               : "/intro/wameter", // 정보마당/수도미터
    INTRO_SERVICE1               : "/intro/service1", // 정보마당/주요서비스소개1 추가
    INTRO_SERVICE1_LIST          : "/intro/service1/list", // 정보마당/주요서비스소개1
    INTRO_SERVICE1_DETAIL        : "/intro/service1/detail", // 정보마당/주요서비스소개1상세
    INTRO_SERVICE1_CREATE        : "/intro/service1/create", // 정보마당/주요서비스소개1등록
    INTRO_SERVICE1_MODIFY        : "/intro/service1/modify", // 정보마당/주요서비스소개1수정
    INTRO_SERVICE2               : "/intro/service2", // 정보마당/주요서비스소개2 추가
    INTRO_SERVICE3               : "/intro/service3", // 정보마당/주요서비스소개3 추가
    INTRO_SERVICE4               : "/intro/service4", // 정보마당/주요서비스소개4 추가
    INTRO_SERVICE5               : "/intro/service5", // 정보마당/주요서비스소개5 추가
    INTRO_SERVICE6               : "/intro/service6", // 정보마당/주요서비스소개6 추가
    
    //SUPPORT
    SUPPORT                     : "/support", // 고객지원(Egov)
    SUPPORT_DOWNLOAD            : "/support/download", // 고객지원/자료실(Egov)
    SUPPORT_DOWNLOAD_DETAIL     : "/support/download/detail", // 고객지원/자료실/상세(Egov)
    SUPPORT_DOWNLOAD_CREATE     : "/support/download/create", // 고객지원/자료실/등록(Egov)
    SUPPORT_QNA                 : "/support/qna", // 고객지원/묻고답하기(Egov)
    SUPPORT_QNA_DETAIL          : "/support/qna/detail", // 고객지원/묻고답하기/상세(Egov)
    SUPPORT_APPLY               : "/support/apply", // 고객지원/서비스신청(Egov)
    SUPPORT_CENTER1             : "/support/center1", // 고객센터/견적문의
    SUPPORT_CENTER1_LIST        : "/support/center1/list", // 고객센터/고객센터 관리
    SUPPORT_CENTER1_DETAIL      : "/support/center1/detail", // 고객센터/고객센터 관리상세
    SUPPORT_CENTER1_CREATE      : "/support/center1/create", // 고객센터/고객센터 관리등록
    SUPPORT_CENTER1_MODIFY      : "/support/center1/modify", // 고객센터/고객센터 관리수정
    SUPPORT_CENTER2             : "/support/cneter2", // 고객센터/AS안내
    SUPPORT_CENTER3             : "/support/cneter3", // 고객센터/FAQ
    SUPPORT_CENTER4             : "/support/cneter4", // 고객센터/제품사용시 주의사항 예시
    
    //INFORM
    INFORM                      : "/inform", // 알림마당 
    INFORM_DAILY                : "/inform/daily", // 알림마당/오늘의행사
    INFORM_DAILY_DETAIL         : "/inform/daily/detail", // 알림마당/오늘의행사상세
    INFORM_WEEKLY               : "/inform/weekly", // 알림마당/금주의행사
    INFORM_WEEKLY_DETAIL        : "/inform/weekly/detail", // 알림마당/금주의행사상세
    INFORM_NOTICE               : "/inform/notice", // 알림마당/공지사항
    INFORM_NOTICE_DETAIL        : "/inform/notice/detail", // 알림마당/공지사항상세
    INFORM_NOTICE_CREATE        : "/inform/notice/create", // 알림마당/공지사항등록
    INFORM_NOTICE_MODIFY        : "/inform/notice/modify", // 알림마당/공지사항수정
    INFORM_NOTICE_REPLY         : "/inform/notice/reply", // 알림마당/공지사항답글
    INFORM_GALLERY              : "/inform/gallery", // 알림마당/사이트갤러리
    INFORM_GALLERY_DETAIL       : "/inform/gallery/detail", // 알림마당/사이트갤러리상세
    INFORM_GALLERY_CREATE       : "/inform/gallery/create", // 알림마당/사이트갤러리등록
    INFORM_GALLERY_MODIFY       : "/inform/gallery/modify", // 알림마당/사이트갤러리수정
    INFORM_GALLERY_REPLY        : "/inform/gallery/reply", // 알림마당/사이트갤러리답글

    //jht
    INFORM_CATALOG             : "/inform/catalog", // 자료실/카달로그
    INFORM_CATALOG_DETAIL      : "/inform/catalog/detail", // 자료실/카달로그상세
    INFORM_CATALOG_CREATE      : "/inform/catalog/create", // 자료실/카달로그등록
    INFORM_CATALOG_MODIFY      : "/inform/catalog/modify", // 자료실/카달로그수정
    INFORM_MSA                 : "/inform/msa", // 자료실/자재승인원
    INFORM_MSA_DETAIL          : "/inform/msa/detail", // 자료실/자재승인원상세
    INFORM_MSA_CREATE          : "/inform/msa/create", // 자료실/자재승인원등록
    INFORM_MSA_MODIFY          : "/inform/msa/modify", // 자료실/자재승인원수정
    INFORM_CNTC                : "/inform/cntc", // 자료실/국세완납증명서
    INFORM_CNTC_DETAIL         : "/inform/cntc/detail", // 자료실/국세완납증명서상세
    INFORM_CNTC_CREATE         : "/inform/cntc/create", // 자료실/국세완납증명서등록
    INFORM_CNTC_MODIFY         : "/inform/cntc/modify", // 자료실/국세완납증명서수정
    INFORM_MANUAL              : "/inform/manual", // 자료실/매뉴얼
    INFORM_MANUAL_DETAIL       : "/inform/manual/detail", // 자료실/매뉴얼상세
    INFORM_MANUAL_CREATE       : "/inform/manual/create", // 자료실/매뉴얼등록
    INFORM_MANUAL_MODIFY       : "/inform/manual/modify", // 자료실/매뉴얼수정
    INFORM_SAM                 : "/inform/sam", // 자료실/유지관리지침서
    INFORM_SAM_DETAIL          : "/inform/sam/detail", // 자료실/유지관리지침서상세
    INFORM_SAM_CREATE          : "/inform/sam/create", // 자료실/유지관리지침서등록
    INFORM_SAM_MODIFY          : "/inform/sam/modify", // 자료실/유지관리지침서수정
    INFORM_INSTALL             : "/inform/install", // 자료실/설치도
    INFORM_INSTALL_DETAIL      : "/inform/install/detail", // 자료실/설치도상세
    INFORM_INSTALL_CREATE      : "/inform/install/create", // 자료실/설치도등록
    INFORM_INSTALL_MODIFY      : "/inform/install/modify", // 자료실/설치도수정
    INFORM_CD                  : "/inform/cd", // 자료실/결선도
    INFORM_CD_DETAIL           : "/inform/cd/detail", // 자료실/결선도상세
    INFORM_CD_CREATE           : "/inform/cd/create", // 자료실/결선도등록
    INFORM_CD_MODIFY           : "/inform/cd/modify", // 자료실/결선도수정

    //MALL
    MALL                       : "/mall", // 쇼핑몰
    MALL_MX                    : "https://www.mxmall.com",   //MX 쇼핑몰
    MALL_NV                    : "https://www.naver.com",   //네이버 쇼핑몰
    MALL_CP                    : "https://www.coupang.com",   //쿠팡 쇼핑몰

    //ADMIN
    ADMIN                      : "/admin", // 사이트관리
    ADMIN_SCHEDULE             : "/admin/schedule", // 사이트관리/일정관리
    ADMIN_SCHEDULE_DETAIL      : "/admin/schedule/detail", // 사이트관리/일정관리상세
    ADMIN_SCHEDULE_CREATE      : "/admin/schedule/create", // 사이트관리/일정관리생성
    ADMIN_SCHEDULE_MODIFY      : "/admin/schedule/modify", // 사이트관리/일정관리수정

    ADMIN_BOARD                : "/admin/board", // 사이트관리/게시판생성관리 목록
    ADMIN_BOARD_DETAIL         : "/admin/board/detail", // 사이트관리/게시판생성관리 상세
    ADMIN_BOARD_CREATE         : "/admin/board/create", // 사이트관리/게시판생성관리 등록
    ADMIN_BOARD_MODIFY         : "/admin/board/modify", // 사이트관리/게시판생성관리 상세/수정

    ADMIN_USAGE                : "/admin/usage", // 사이트관리/게시판사용관리 목록
    ADMIN_USAGE_DETAIL         : "/admin/usage/detail", // 사이트관리/게시판사용관리 상세
    ADMIN_USAGE_CREATE         : "/admin/usage/create", // 사이트관리/게시판사용관리 등록
    ADMIN_USAGE_MODIFY         : "/admin/usage/modify", // 사이트관리/게시판사용관리 상세/수정

    ADMIN_NOTICE               : "/admin/notice", // 사이트관리/공지사항관리 목록
    ADMIN_NOTICE_DETAIL        : "/admin/notice/detail", // 사이트관리/공지사항관리 상세
    ADMIN_NOTICE_CREATE        : "/admin/notice/create", // 사이트관리/공지사항관리 등록
    ADMIN_NOTICE_MODIFY        : "/admin/notice/modify", // 사이트관리/공지사항관리 수정
    ADMIN_NOTICE_REPLY         : "/admin/notice/reply", // 사이트관리/공지사항관리 답글 등록

    ADMIN_GALLERY              : "/admin/gallery", // 사이트관리/사이트갤러리관리
    ADMIN_GALLERY_DETAIL       : "/admin/gallery/detail", // 사이트관리/사이트갤러리관리 상세
    ADMIN_GALLERY_CREATE       : "/admin/gallery/create", // 사이트관리/사이트갤러리관리 등록
    ADMIN_GALLERY_MODIFY       : "/admin/gallery/modify", // 사이트관리/사이트갤러리관리 수정
    ADMIN_GALLERY_REPLY        : "/admin/gallery/reply", // 사이트관리/사이트갤러리관리 답글 등록

    ADMIN_MANAGER              : "/admin/manager", // 사이트관리/사이트관리자 암호변경 기능
    ADMIN_MEMBERS              : "/admin/members", // 사이트관리/회원관리 목록기능
    ADMIN_MEMBERS_DETAIL       : "/admin/members/detail", // 사이트관리/회원관리 상세
    ADMIN_MEMBERS_CREATE       : "/admin/members/create", // 사이트관리/회원관리 등록
    ADMIN_MEMBERS_MODIFY       : "/admin/members/modify", // 사이트관리/회원관리 상세/수정

    //MYPAGE
    MYPAGE_MODIFY      		   : "/mypage/modify", // 고객지원/마이페이지/회원 수정
    MYPAGE_CREATE       	   : "/mypage/create", // 고객지원/마이페이지/회원 등록
}

export default URL;