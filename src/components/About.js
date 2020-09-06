import React from "react";
import qs from "qs";

function About({ location }) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  console.log(query)
  const detail = query.detail === 'true';
  return (
    <div>
      <h1>About Page</h1>
      <b>
        <p>안녕하세요 리액트 라우터 연습을 위한 페이지의 설명 페이지입니다.</p>
      </b>
      <p>현재 작업환경을 Mac os로 변경하였습니다</p>
      <p>커밋 확인</p>
      {detail && <p>쿼리의 디테일값이 true이므로 디테일페이지를 랜더링합니다.</p>}
    </div>
  );
}

export default About;
