import React,{useState} from 'react'

function Entery() {
    let count = 0;
    const [num, setNum] = useState(0);
    return (
        <div>
            <button onClick={()=>{count = count + 1;
                            console.log(count);
                            setNum(num + 1); //상태변수의 값을 변경하는 상태함수
                            }
                            }>일반변수 count 하나씩 증가</button>
            <h1>나는 일반변수 count : {`${count}, ${num}`} </h1>
        </div>
    )
}

export default Entery
