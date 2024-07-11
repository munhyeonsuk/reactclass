// 기존에 객체를 선언합니다.
const person = {
    name: 'Alice',
    age: 30,
    city: 'Wonderland',
    myinfo : ['리액트','노드','뷰']
  };
  
  // 객체 구조 분해 할당을 사용하여 각 프로퍼티를 개별 변수에 할당합니다.
//   const { name, age, city } = person;

// 문제 : 리액트가 콘솔에 출력되도록 해주세요.( 구조할당 )
  const {myinfo} = person;
  console.log(myinfo[0])
  
