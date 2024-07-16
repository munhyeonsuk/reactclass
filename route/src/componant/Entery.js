import React,{useState} from 'react'

function Entery() {
    let count = 0;
    //일반 변수 상태변수값을 받아서 출력하려면 return 출력식에서 처리하기
    const [num, setNum] = useState(0);
    return (
        <div>
            <button onClick={()=>{
                            setNum(num + 1);// 상태변수의 값을 변경하는 상태함수
                            count = num; //화살표함수 내에서 저장 안됨
                            }
                            }>일반변수 count 하나씩 증가</button>
            <h1>나는 일반변수 count : {`${count=num}`} </h1>
        </div>
    )
}

export default Entery
