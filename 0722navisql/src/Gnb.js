import React from 'react'
import cafenavi from './json/cafenavi.json'

function Gnb() {
    const d1navi = cafenavi.filter((item)=>item.prnum == "")
    return (
       <div>
            <h1>Gnb</h1>
            <ul className='d-flex'>
            {
               d1navi.map((v,i) => {
                    return(
                        <li key={`gnbli${i}`}>
                            <li className='px-3' key={`gnbnavi${i}`}>{v.gnbnm}</li>
                            <ul>
                                {
                                cafenavi.filter((item)=> item.prnum === v.cateno ).map((vv, ii)=> <li>{vv.gnbnm}</li>  )
                                } 
                            </ul>

                        </li>
                    )
               })
            }
       </ul>
       </div>
    )
}

export default Gnb
