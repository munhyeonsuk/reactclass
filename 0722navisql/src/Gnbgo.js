import React from 'react'
import godo from './json/godonavi.json'

function Gnbgo() {

    const d1info = godo.filter((item) => item["prnum"].split("|").length === 1 )
    const submenus = {};

    for (let item of godo) { 
        
        if (item.prnum.split('|')[1]) { // 소메뉴들이 수집 그리고 prnum이 동일한 경우만 수집

            if (!submenus[item.prnum.split('|')[0]]) {
                submenus[item.prnum.split('|')[0]] = []; // 초기값선언 빈문자열을 넣고
            }
            submenus[item.prnum.split('|')[0]].push(item);
        }
    }


    return (
        <ul>
            {  console.log(submenus) }
            {

                
              d1info  &&   d1info.map((v, i)=>{
                    return(
                       <li key={`gnbli${i}`} > {v.gnbnm} 
                       <ul>
                           {
                    godo.filter((item) => 
                       item["prnum"].split("|").length > 1 && item["prnum"].split("|")[0] === v.prnum )
                    .map((vv, ii)=> {
                            return(
                                <li key={`gnbli${ii}`}>{vv.gnbnm}</li>
                            )      
                    })                
                           }
                        </ul>                       
                       </li>
                    )
                })
            }
        </ul>
    )
}

export default Gnbgo
