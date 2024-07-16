import React,{useState, useEffect} from 'react'

function Entery() {
    let count = 0;
    //일반 변수 상태변수값을 받아서 출력하려면 return 출력식에서 처리하기
    const [num, setNum] = useState(0);//랜더링
    useEffect(()=>{
        document.body.style.background = 'red'
    },[]);
    useEffect(()=>{
        document.querySelector('button').addEventListener('click', ()=>{
            setNum(num + 1);
        })
    },[num])//랜더링 끝나고 나서 html태그로 이해

    return (
        <div>
            <button>일반변수 count 하나씩 증가</button>
            <h1>나는 일반변수 count : {`${count=num}`} </h1>
        </div>
    )
}

export default Entery
