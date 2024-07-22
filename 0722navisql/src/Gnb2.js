import React from 'react';
import cafenavi from './json/cafenavi.json';

function Gnb() {
    // 상위 메뉴 필터링
    const d1navi = cafenavi.filter((item) => item.prnum === "");

    // 소메뉴 수집
    const submenus = {};  // key prnum

    for (let item of cafenavi) { // oject 
        if (item.prnum) { // 소메뉴들이 수집

            if (!submenus[item.prnum]) {
                submenus[item.prnum] = []; // 빈문자열을 넣고
            }
            submenus[item.prnum].push(item);
        }
    }
    //  submenus["1"] --> array
    // const submenus = {
    //     "1" : [ {
    //     "gnbnm" : "미션",
    //     "gnblink" : "misson",
    //     "prnum" : "1",
    //     "cateno" : "1"
    // },       
    // {
    //     "gnbnm" : "소싱철학",
    //     "gnblink" : "sourcing",
    //     "prnum" : "1",
    //     "cateno" : "2"
    // }  ],
    //     "2" : []
    //  }

    return (
        <div>
            <h1>Gnb2</h1>
            <ul className='d-flex'>
            {
                d1navi.map((v, i) => {
                    return (
                        <li className='px-3' key={`gnbnavi${i}`}>
                            {v.gnbnm}
                            <ul>
                                {
                                    // 소메뉴 매핑
                                    //api 외부 데이터 들어오면 서버자원
                                    submenus[v.cateno] && submenus[v.cateno].map((vv, ii) => (
                                        <li key={`submenu${ii}`}>{vv.gnbnm}</li>
                                    ))
                                }
                            </ul>
                        </li>
                    );
                })
            }
        </ul>
        </div>
    );
}

export default Gnb;
