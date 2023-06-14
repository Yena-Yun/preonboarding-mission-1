# 📚 Preonboarding 1번째 기업 과제

## 🧪 실행 방법

1. git clone
2. yarn install
3. ** **yarn dev** (Vite 환경)
4. 터미널 링크를 눌러 화면 실행

![녹화_2023_05_04_18_12_14_660](https://user-images.githubusercontent.com/68722179/236162184-44f942d1-2a37-449e-ba74-ca2d92e07b58.gif)


## 🧶 기술 스택
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux--Toolkit-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## 🔎 작업 내역: 캐싱과 입력 최적화
### 1. 입력된 키워드 기준으로 캐싱 구현
* redux-toolkit의 Thunk 함수에서 **비동기 API 호출을 처리하는 과정에서 캐싱 구현**
* 입력한 키워드와 그에 맞는 검색 결과를 private 변수에 캐싱
* 이후 **동일한 키워드로 재검색하면 API를 새로 호출하지 않고 캐싱된 결과를 재사용**

### 2. debounce로 입력 후 일정 시간 후에 API 호출
* debounce를 lodash와 같은 라이브러리 없이 구현
* 커스텀 hook을 활용하여 뷰 로직이 있는 컴포넌트에서 상태 로직 분리
* 결과 리스트 보여주기(isOpen)와 API 호출 로직을 400ms마다 한 번씩 실행


## 🏏 트러블 슈팅

클릭 시  **블로그 기록**으로 이동합니다.

### 🧙‍♀️ [프로젝트 개선기](https://velog.io/@yena1025/React%EC%9D%98-%EC%A0%9C%EC%96%B4-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%99%80-%EB%B9%84%EC%A0%9C%EC%96%B4-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8) ✨

#### 📌 [vite.config.ts에서 proxy를 설정하여 CORS 에러 해결](https://velog.io/@yena1025/Vite%EC%97%90%EC%84%9C-CORS-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0%ED%95%98%EB%8A%94-%EB%B2%95) <br/>

#### 📌 [throw Error로 api 결과값 타입에 포함되는 undefined 제거](https://velog.io/@yena1025/api-%EA%B2%B0%EA%B3%BC%EA%B0%92-%ED%83%80%EC%9E%85%EC%97%90-%EC%9E%90%EA%BE%B8-undefined%EA%B0%80-%ED%8F%AC%ED%95%A8%EB%90%A0-%EB%95%8C)

