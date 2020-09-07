# 👓React Router을 연습합니다.

페이지를 새로 요청하는 것이 아닌 component만 리렌더링을 함으로써
비용을 감소시킬 수 있는 Router에 대한 기본을 연습합니다.

## 🧨연습할 STACK
<br>-react-router-dom.
<br>-BrowserRoute
<br>-Route
<br>-Link

## 👏🏻작업환경 mac os로 변경 2020/09/04

query, qs, sub-router, qs parse

### 👏🏻History 객체내부 살펴보기

쓸만해 보이는 것
📌 goBack, goForward, replace, push, block 모두 route와 관련된 것

goHome 과 replace의 차이점은 방문기록을 남기느냐 안남기느냐
block으로 페이지이탈방지 가능

### ✏️withRoute
match와 location의 차이
<p>
📌match는 현재 랜더링된 위치를 기준으로 파라미터 매치값을 가져오고 로케이션은
  어디서 불러오든 항상 똑같은 정보를 지닌다.
 </p>