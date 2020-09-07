import React, { useEffect } from "react";

function HistorySample({ history }) {
  const goBack = () => {
    history.goBack();
  };

  const goHome = () => {
    history.push("/");
  };

  useEffect(() => {
    console.log(history);
    const unBlock = () => {
        history.block('정말 페이지를 떠납니까?')
    }
    return () => {
    unBlock();
    };
  }, [history]);

  return (
    <div>
        <button onClick={goBack}>뒤로</button>
        <button onClick={goHome}>홈으로</button>
    </div>
)
}


export default HistorySample;
