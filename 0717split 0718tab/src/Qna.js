import React, { Fragment } from 'react';
import qnalist from './json/qna.json';

const { qna } = qnalist;

function Qna(props) {
 
    const dtsclick = (num) => {
        const dts = document.querySelectorAll("#qna dt");
        if (dts[num]) { //dts[num]정의가 안됨. if사용 dts[num]이 있다면 사용해라
            dts.forEach((v, i) => {
                v.classList.remove('on');
            });
            dts[num].classList.add('on');
        }
    };
    
    return (
        <dl className='container my-5' id={props.keynm}>
            {
                qna.map((v, i) => (
                    <Fragment key={`qnalist${i}`}>
                        <dt className={`bg-dark text-white ${(i===0 ? 'on': null)}`} onClick={() => dtsclick(i)}>{v.Q}</dt>
                        <dd className='py-5'>{v.A}</dd>
                    </Fragment>
                ))
            }
        </dl>
    );
}

export default Qna;