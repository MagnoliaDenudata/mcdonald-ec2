/* 작성자 : 백승준
 최종수정 : 2023-12-27
 내용 : 사회적 책임과 지원 > 지역사회 공헌 > 재단법인 로날드맥도날드하우스
*/


import './mcdonaldhouse.scss'
import { NavLink } from 'react-router-dom';

// http://localhost:3000/story/mcdonaldhouse

const mcdonaldhouse = () => {
    return(
        <>
        <div className="mhcontainer">
            <div className="inner">
                {/* 각 상세 페이지로 이동하기 위한 버튼 */}
            <ul className="inner_btn">
                    <li>
                        <NavLink to="/story/kidssoccer" role="button">
                            로날드 맥도날드 어린이 축구교실
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/story/happyburger" role="button">
                            행복의 버거 캠페인
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/story/safetyguard" role="button">
                            맥도날드 안전지킴 캠페인
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/story/mcdonaldhouse" role="button" className="on">
                            재단법인 로날드맥도날드하우스
                        </NavLink>
                    </li>
                </ul>
                {/* 큰 이미지와 내용 */}
                <div className="top">
                    <img src="../images/Story/mh1.jpg"></img>
                    <h2>
                        '재단법인 로날드맥도날드하우스'는 무엇인가요?
                    </h2>
                    <p className="txtinfo01">
                        RMHC(Ronald Mcdonald House Charities)는 아동 복지 사업을 실시하는 글로벌 비영리 법인으로
                        <br/>
                        현재 전세계 64개국에서 RMHC 하우스를 건립, 운영하고 있습니다.
                    </p>
                    <p className="txtinfo02">
                        한국에서는 RMHC Korea가 국내 1호 RMHC 하우스를 경남 양산 부산대학교 병원 부지 내에 건립중이며, 오는 2019년 하반기 오픈을 앞두고 있습니다.
                        <br/>
                        RMHC는 중증 환아를 둔 가족이 병원 인근에 머무르며 치료에 집중할 수 있도록 편안한 RMHC 하우스를 제공함으로써,
                        <br/>
                        아픈 어린이들이 가족의 돌봄과 지지를 받으며 건강한 사회의 일원으로 성장하도록 동행하고 있습니다.
                    </p>
                </div> 
                <div className='bottom'>
                    {/* 링크 없음 */}
                    <a className='btnrmhc'>
                        RMHC 바로가기    
                    </a>               
                </div>
            </div>
        </div>
        
        </>
    )
}

export default mcdonaldhouse;