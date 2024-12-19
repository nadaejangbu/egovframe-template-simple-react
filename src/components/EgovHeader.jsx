import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import * as EgovNet from 'api/egovFetch';

import URL from 'constants/url';
import CODE from 'constants/code';
import { getSessionItem, setSessionItem } from 'utils/storage';

function EgovHeader() {
    console.group("EgovHeader");
    console.log("[Start] EgovHeader ------------------------------");
 
    const sessionUser = getSessionItem('loginUser');
    const sessionUserId = sessionUser?.id;
    const sessionUserName = sessionUser?.name;
    const sessionUserSe = sessionUser?.userSe;

    const navigate = useNavigate();

    const logInHandler = () => { // 로그인 정보 없을 시
        navigate(URL.LOGIN);
		// PC와 Mobile 열린메뉴 닫기
		document.querySelector('.all_menu.WEB').classList.add('closed');
        document.querySelector('.btnAllMenu').classList.remove('active');
        document.querySelector('.btnAllMenu').title = '전체메뉴 닫힘';
		document.querySelector('.all_menu.Mobile').classList.add('closed');
    }
    const logOutHandler = () => {// 로그인 정보 존재할 때
        const logOutUrl = '/auth/logout';
        const requestOptions = {
            headers: {
                'Content-type': 'application/json',
            },
            credentials: 'include',
        }
        EgovNet.requestFetch(logOutUrl, requestOptions,
            function (resp) {
                console.log("===>>> logout resp= ", resp);
                if (parseInt(resp.resultCode) === parseInt(CODE.RCV_SUCCESS)) {
                    //onChangeLogin({ loginVO: {} });
                    setSessionItem('loginUser', {"id":""});
                    setSessionItem('jToken', null);
                    window.alert("로그아웃되었습니다!");
                    navigate(URL.MAIN);
					// PC와 Mobile 열린메뉴 닫기
					document.querySelector('.all_menu.WEB').classList.add('closed');
	                document.querySelector('.btnAllMenu').classList.remove('active');
	                document.querySelector('.btnAllMenu').title = '전체메뉴 닫힘';
					document.querySelector('.all_menu.Mobile').classList.add('closed');
                }
            }
        );
    }

    console.log("------------------------------EgovHeader [End]");
    console.groupEnd("EgovHeader");

    return (
        // <!-- header -->
        <div className="header">
            <div className="inner">
                <Link to={URL.MAIN} className="ico lnk_go_template" target="_blank">홈페이지 템플릿 소개 페이지로 이동</Link>

                <h1 className="logo">
                    <Link to={URL.MAIN} className="w"><img src="/assets/images/logo_w.png" alt="표준프레임워크포털 eGovFrame 심플홈페이지" /></Link>
                    <Link to={URL.MAIN} className="m"><img src="/assets/images/logo_m.png" alt="표준프레임워크포털 eGovFrame 심플홈페이지" /></Link>
                </h1>

                <div className="gnb">
                    <h2 className="blind">주메뉴</h2>
                    <ul>
                        <li><NavLink to={URL.ABOUT} className={({ isActive }) => (isActive ? "cur" : "")}>회사소개</NavLink></li>
                        <li><NavLink to={URL.INTRO} className={({ isActive }) => (isActive ? "cur" : "")}>제품소개</NavLink></li>
                        <li><NavLink to={URL.INFORM} className={({ isActive }) => (isActive ? "cur" : "")}>자료실</NavLink></li>
                        <li><NavLink to={URL.SUPPORT} className={({ isActive }) => (isActive ? "cur" : "")}>고객센터</NavLink></li>
                        <li><NavLink to={URL.MALL} className={({ isActive }) => (isActive ? "cur" : "")}>쇼핑몰</NavLink></li>
                        {sessionUserSe ==='ADM' &&
                            <li><NavLink to={URL.ADMIN} className={({ isActive }) => (isActive ? "cur" : "")}>사이트관리</NavLink></li>
                        }
                    </ul>
                </div>

                {/* <!-- PC web에서 보여지는 영역 --> */}
                <div className="user_info">
                    {/* 로그아웃 : 로그인 정보 있을때 */}
                    {sessionUserId &&
                        <>
                            <span className="person">{sessionUserName} </span> 님이, {sessionUserSe}로 로그인하셨습니다.
                            {sessionUserSe ==='USR' &&
                            <NavLink to={URL.MYPAGE_MODIFY} className={({ isActive }) => (isActive ? "btn login cur" : "btn login")}>마이페이지</NavLink>
                        	}
                            <button onClick={logOutHandler} className="btn">로그아웃</button>
                        </>
                    }
                    {/* 로그인 : 로그인 정보 없을 때 */}
                    {!sessionUserId &&
                        <>
                        <button onClick={logInHandler} className="btn login">로그인</button>
                        <NavLink to={URL.MYPAGE_CREATE} className={({ isActive }) => (isActive ? "btn login cur" : "btn login")}>회원가입</NavLink>
                        </>
                    }
                </div>
                {/* <!--// PC web에서 보여지는 영역 --> */}

                {/* <!-- right area --> */}
                <div className="right_a">
                    <button type="button" className="btn btnAllMenu" title="전체메뉴 닫힘">전체메뉴</button>
                    <button type="button" className="btn mobile btnAllMenuM" title="전체메뉴 닫힘">전체메뉴</button>
                </div>
            </div>

            {/* <!-- All menu : web --> */}
            <div className="all_menu WEB closed">
                <h2 className="blind">전체메뉴</h2>
                <div className="inner">
                    <div className="col">
                        <h3>회사소개</h3>
                        <ul>
                            <li><NavLink to={URL.ABOUT_SITE} className={({ isActive }) => (isActive ? "cur" : "")}>인사말</NavLink></li>
                            {/* <li><NavLink to={URL.ABOUT_HISTORY} className={({ isActive }) => (isActive ? "cur" : "")}>연혁</NavLink></li> */}
                            <li><NavLink to={URL.ABOUT_LOCATION} className={({ isActive }) => (isActive ? "cur" : "")}>오시는 길</NavLink></li>
                            <li><NavLink to={URL.ABOUT_ORGANIZATION} className={({ isActive }) => (isActive ? "cur" : "")}>인증, 특허</NavLink></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>제품소개</h3>
                        <ul>
                            {/* <li><NavLink to={URL.INTRO_WORKS} className={({ isActive }) => (isActive ? "cur" : "")}>주요사업 소개</NavLink></li>
                            <li><NavLink to={URL.INTRO_SERVICE} className={({ isActive }) => (isActive ? "cur" : "")}>대표서비스 소개</NavLink></li>
                            <li><NavLink to={URL.INTRO_WAMETER} className={({ isActive }) => (isActive ? "cur" : "")}>수도미터</NavLink></li> */}
                            <li><NavLink to={URL.INTRO_SERVICE1} className={({ isActive }) => (isActive ? "cur" : "")}>수도미터</NavLink></li>
                            <li><NavLink to={URL.INTRO_SERVICE2} className={({ isActive }) => (isActive ? "cur" : "")}>온수미터</NavLink></li>
                            <li><NavLink to={URL.INTRO_SERVICE3} className={({ isActive }) => (isActive ? "cur" : "")}>적산열량계</NavLink></li>
                            <li><NavLink to={URL.INTRO_SERVICE4} className={({ isActive }) => (isActive ? "cur" : "")}>원격 지시부</NavLink></li>
                            <li><NavLink to={URL.INTRO_SERVICE5} className={({ isActive }) => (isActive ? "cur" : "")}>컨버터</NavLink></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>고객센터</h3>
                        <ul>
                            <li><NavLink to={URL.SUPPORT_DOWNLOAD} className={({ isActive }) => (isActive ? "cur" : "")}>자료실</NavLink></li>
                            <li><NavLink to={URL.SUPPORT_QNA} className={({ isActive }) => (isActive ? "cur" : "")}>묻고 답하기</NavLink></li>
                            <li><NavLink to={URL.SUPPORT_APPLY} className={({ isActive }) => (isActive ? "cur" : "")}>서비스 신청</NavLink></li>
                            <li><NavLink to={URL.SUPPORT_CATALOG} className={({ isActive }) => (isActive ? "cur" : "")}>카달로그</NavLink></li>
                            <li><NavLink to={URL.SUPPORT_MSA} className={({ isActive }) => (isActive ? "cur" : "")}>자재승인원</NavLink></li>
                            <li><NavLink to={URL.SUPPORT_CNTC} className={({ isActive }) => (isActive ? "cur" : "")}>국세완납증명서</NavLink></li>
                            <li><NavLink to={URL.SUPPORT_MENUAL} className={({ isActive }) => (isActive ? "cur" : "")}>매뉴얼</NavLink></li>
                            <ul>
                                <li><NavLink to={URL.SUPPORT_SAM} className={({ isActive }) => (isActive ? "cur" : "")}>유지관리 지침서</NavLink></li>
                                <li><NavLink to={URL.SUPPORT_INSTALL} className={({ isActive }) => (isActive ? "cur" : "")}>설치도</NavLink></li>
                                <li><NavLink to={URL.SUPPORT_CD} className={({ isActive }) => (isActive ? "cur" : "")}>결선도</NavLink></li>
                            </ul>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>알림마당</h3>
                        <ul>
                            <li><NavLink to={URL.INFORM_DAILY}>오늘의 행사</NavLink></li>
                            <li><NavLink to={URL.INFORM_WEEKLY} className={({ isActive }) => (isActive ? "cur" : "")}>금주의 행사</NavLink></li>
                            <li><NavLink to={URL.INFORM_NOTICE} className={({ isActive }) => (isActive ? "cur" : "")}>공지사항</NavLink></li>
                            <li><NavLink to={URL.INFORM_GALLERY} className={({ isActive }) => (isActive ? "cur" : "")}>사이트 갤러리</NavLink></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>쇼핑몰</h3>
                        <ul>
                            <li><a href={'https://www.mxmall.com'} target='_blank' rel='noopener noreferrer'>MX 쇼핑몰</a></li>
                            <li><a href={'https://www.naver.com'} target='_blank' rel='noopener noreferrer'>네이버 쇼핑몰</a></li>
                            <li><a href={'https://www.coupang.com'} target='_blank' rel='noopener noreferrer'>쿠팡 쇼핑몰</a></li>
                        </ul>
                    </div>
                    {sessionUserSe ==='ADM' &&
                        <div className="col">
                            <h3>사이트관리</h3>
                            <ul>
                                <li><NavLink to={URL.ADMIN_SCHEDULE} className={({ isActive }) => (isActive ? "cur" : "")}>일정관리</NavLink></li>
                                <li><NavLink to={URL.ADMIN_BOARD} className={({ isActive }) => (isActive ? "cur" : "")}>게시판생성관리</NavLink></li>
                                <li><NavLink to={URL.ADMIN_USAGE} className={({ isActive }) => (isActive ? "cur" : "")}>게시판사용관리</NavLink></li>
                                <li><NavLink to={URL.ADMIN_NOTICE} className={({ isActive }) => (isActive ? "cur" : "")}>공지사항관리</NavLink></li>
                                <li><NavLink to={URL.ADMIN_GALLERY} className={({ isActive }) => (isActive ? "cur" : "")}>사이트갤러리관리</NavLink></li>
                                <li><NavLink to={URL.ADMIN_MANAGER} className={({ isActive }) => (isActive ? "cur" : "")}>사이트관리자 암호변경</NavLink></li>
								<li><NavLink to={URL.ADMIN_MEMBERS} className={({ isActive }) => (isActive ? "cur" : "")}>회원관리</NavLink></li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
            {/* <!-- All menu : mobile --> */}
            <div className="all_menu Mobile closed">
                <div className="user_info_m">
                    {/* 로그아웃 : 로그인 정보 있을때 */}
                    {sessionUserId &&
                        <>
                            <span className="person">{sessionUserName} </span> 님이, {sessionUserSe}로 로그인하셨습니다.
                            <button onClick={logOutHandler} className="btn logout">로그아웃</button>
                        </>
                    }

                    {/* 로그인 : 로그인 정보 없을 때 */}
                    {!sessionUserId &&
                        <>
                        <button onClick={logInHandler} className="btn login">로그인</button>
                        <NavLink to={URL.MYPAGE_CREATE} className={({ isActive }) => (isActive ? "btn login cur" : "btn login")}>회원가입</NavLink>
                        </>
                    }
                    <button className="btn noscript close" type="button">전체메뉴 닫기</button>
                </div>
                <div className="menu">
                    <h3><Link to={URL.ABOUT}>회사소개</Link></h3>
                    <div className="submenu closed">
                        <ul>
                            <li><NavLink to={URL.ABOUT_SITE} className={({ isActive }) => (isActive ? "cur" : "")}>소개</NavLink></li>
                            <li><NavLink to={URL.ABOUT_HISTORY} className={({ isActive }) => (isActive ? "cur" : "")}>연혁</NavLink></li>
                            <li><NavLink to={URL.ABOUT_ORGANIZATION} className={({ isActive }) => (isActive ? "cur" : "")}>조직소개</NavLink></li>
                            <li><NavLink to={URL.ABOUT_LOCATION} className={({ isActive }) => (isActive ? "cur" : "")}>찾아오시는 길</NavLink></li>
                        </ul>
                    </div>
                    <h3><Link to={URL.INTRO}>제품소개</Link></h3>
                    <div className="submenu closed">
                        <ul>
                            {/* <li><NavLink to={URL.INTRO_WORKS} className={({ isActive }) => (isActive ? "cur" : "")}>주요사업 소개</NavLink></li>
                            <li><NavLink to={URL.INTRO_SERVICE} className={({ isActive }) => (isActive ? "cur" : "")}>대표서비스 소개</NavLink></li> 
                            <li><NavLink to={URL.INTRO_WAMETER} className={({ isActive }) => (isActive ? "cur" : "")}>수도미터</NavLink></li> */}
                            <li><NavLink to={URL.INTRO_SERVICE1} className={({ isActive }) => (isActive ? "cur" : "")}>수도미터</NavLink></li>
                            <li><NavLink to={URL.INTRO_SERVICE2} className={({ isActive }) => (isActive ? "cur" : "")}>온수미터</NavLink></li>
                            <li><NavLink to={URL.INTRO_SERVICE3} className={({ isActive }) => (isActive ? "cur" : "")}>적산열량계</NavLink></li>
                            <li><NavLink to={URL.INTRO_SERVICE4} className={({ isActive }) => (isActive ? "cur" : "")}>원격 지시부</NavLink></li>
                            <li><NavLink to={URL.INTRO_SERVICE5} className={({ isActive }) => (isActive ? "cur" : "")}>컨버터</NavLink></li>
                        </ul>
                    </div>
                    <h3><Link to={URL.SUPPORT}>고객센터</Link></h3>
                    <div className="submenu closed">
                        <ul>
                            <li><NavLink to={URL.SUPPORT_DOWNLOAD} className={({ isActive }) => (isActive ? "cur" : "")}>자료실</NavLink></li>
                            <li><NavLink to={URL.SUPPORT_QNA} className={({ isActive }) => (isActive ? "cur" : "")}>묻고 답하기</NavLink></li>
                            <li><NavLink to={URL.SUPPORT_APPLY} className={({ isActive }) => (isActive ? "cur" : "")}>서비스 신청</NavLink></li>
                            <li><NavLink to={URL.SUPPORT_CATALOG} className={({ isActive }) => (isActive ? "cur" : "")}>카달로그</NavLink></li>
                            <li><NavLink to={URL.SUPPORT_MSA} className={({ isActive }) => (isActive ? "cur" : "")}>자재승인원</NavLink></li>
                            <li><NavLink to={URL.SUPPORT_CNTC} className={({ isActive }) => (isActive ? "cur" : "")}>국세완납증명서</NavLink></li>
                            <li><NavLink to={URL.SUPPORT_MENUAL} className={({ isActive }) => (isActive ? "cur" : "")}>매뉴얼</NavLink></li>
                            <ul>
                                <li><NavLink to={URL.SUPPORT_SAM} className={({ isActive }) => (isActive ? "cur" : "")}>유지관리 지침서</NavLink></li>
                                <li><NavLink to={URL.SUPPORT_INSTALL} className={({ isActive }) => (isActive ? "cur" : "")}>설치도</NavLink></li>
                                <li><NavLink to={URL.SUPPORT_CD} className={({ isActive }) => (isActive ? "cur" : "")}>결선도</NavLink></li>
                            </ul>
                        </ul>
                    </div>
                    <h3><Link to={URL.INFORM}>알림마당</Link></h3>
                    <div className="submenu closed">
                        <ul>
                            <li><NavLink to={URL.INFORM_DAILY}>오늘의 행사</NavLink></li>
                            <li><NavLink to={URL.INFORM_WEEKLY} className={({ isActive }) => (isActive ? "cur" : "")}>금주의 행사</NavLink></li>
                            <li><NavLink to={URL.INFORM_NOTICE} className={({ isActive }) => (isActive ? "cur" : "")}>공지사항</NavLink></li>
                            <li><NavLink to={URL.INFORM_GALLERY} className={({ isActive }) => (isActive ? "cur" : "")}>사이트 갤러리</NavLink></li>
                        </ul>
                    </div>
                    <h3><Link to={URL.MALL}>쇼핑몰</Link></h3>
                    <div className="submenu closed">
                        <ul>
                            <li><a href={'https://www.mxmall.com'} target='_blank' rel='noopener noreferrer'>MX 쇼핑몰</a></li>
                            <li><a href={'https://www.naver.com'} target='_blank' rel='noopener noreferrer'>네이버 쇼핑몰</a></li>
                            <li><a href={'https://www.coupang.com'} target='_blank' rel='noopener noreferrer'>쿠팡 쇼핑몰</a></li>
                        </ul>
                    </div>
                    {sessionUserSe ==='ADM' &&
                        <>
                            <h3><Link to={URL.ADMIN}>사이트관리</Link></h3>
                            <div className="submenu closed">
                                <ul>
                                    <li><NavLink to={URL.ADMIN_SCHEDULE} className={({ isActive }) => (isActive ? "cur" : "")}>일정관리</NavLink></li>
                                    <li><NavLink to={URL.ADMIN_BOARD} className={({ isActive }) => (isActive ? "cur" : "")}>게시판생성관리</NavLink></li>
                                    <li><NavLink to={URL.ADMIN_USAGE} className={({ isActive }) => (isActive ? "cur" : "")}>게시판사용관리</NavLink></li>
                                    <li><NavLink to={URL.ADMIN_NOTICE} className={({ isActive }) => (isActive ? "cur" : "")}>공지사항관리</NavLink></li>
                                    <li><NavLink to={URL.ADMIN_GALLERY} className={({ isActive }) => (isActive ? "cur" : "")}>사이트갤러리관리</NavLink></li>
                                    <li><NavLink to={URL.ADMIN_MANAGER} className={({ isActive }) => (isActive ? "cur" : "")}>사이트관리자 암호변경</NavLink></li>
									<li><NavLink to={URL.ADMIN_MEMBERS} className={({ isActive }) => (isActive ? "cur" : "")}>회원관리</NavLink></li>
                                </ul>
                            </div>
                        </>
                    }
                </div>
            </div>
            {/* <!--// All menu --> */}
        </div>
        // <!--// header -->
    );
}

export default EgovHeader;