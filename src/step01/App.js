// 1.로딩페이지
import React, { useState, useEffect } from 'react';

function App() {
  // 상태 변수 설정
  const [isLoading, setIsLoading] = useState(true);
  const [loadCounter, setLoadCounter] = useState(10);
  
  useEffect(() => {
    console.log('useEffect 호출됨');
    const loadTimer = setInterval(() => {
      console.log(loadCounter);
      setLoadCounter(prevCounter => {
        const newCounter = prevCounter - 1;
        if (newCounter <= 0) {
          setIsLoading(false);
          clearInterval(loadTimer);
        }
        return newCounter;
      });
    }, 1000);
    
    // 클린업 함수: 컴포넌트 언마운트 시 타이머 클리어
    return () => clearInterval(loadTimer);
  }, [loadCounter]); // loadCounter를 의존성 배열에 추가

  console.log('render');
  return (
    <div>
      {isLoading ? `loading... ${loadCounter}` : 'We are ready'}
    </div>
  );
}

export default App;
