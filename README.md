# preonboarding-mission-1
원티드 프리온보딩 인턴십 1번째 기업 과제


## 🧨 구현 내역
* 검색바 UI 구현
* 키워드 검색 시 API로 호출된 자동완성된 결과값 표시

## ✨ 캐싱과 최적화
### 1. API 호출별로 로컬 캐싱 구현
* createAsyncThunk로 redux 내부에서 비동기 API 호출 처리
* private 변수에 호출된 결과값(storedResults)을 입력된 키워드(storedKeyword)와 함께 저장
* 이후 동일한 키워드로 검색하면 API를 호출하지 않고 캐싱 결과를 재사용

[ 코드 ]
```javascript
// store/fetchResultThunk.ts
...
let previousApiResult: StoredData[] = [];

export const fetchResultThunk = createAsyncThunk(
  'search/fetchResults',
  async (keyword: string) => {
    const storedData = previousApiResult.filter(
      (stored) => stored.storedKeyword === keyword
    );

    if (storedData.length > 0) {
      console.log('이전 결과 재사용');
      return storedData[0].storedResults;
    }

    const searchResults = await searchAPI.fetchResults(keyword);
    console.log('api로 새로운 데이터 호출');

    previousApiResult = [
      ...previousApiResult,
      { storedKeyword: keyword, storedResults: searchResults },
    ];

    return searchResults;
  }
);
```

### 2. throttle을 활용하여 입력마다 API를 호출하지 않도록 함
* debounce는 일정 시간 '이후' API를 호출하지만 throttle은 일정 시간'마다' API 호출
* 자동완성 검색의 특성상 기다린 후에 결과값을 보는 debounce보다 입력과 비슷하게 결과값을 볼 수 있는 throttle이 사용자 경험에 더 좋을 것이라고 판단

[ 코드 ]
```javascript
// components/SearchBar/SearchInput
  ...
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const throttlingRef = useRef(false);

  const handleThrottleSearch = () => {
    if (throttlingRef.current) {
      return;
    }

    if (throttlingRef.current) return;

    if (!inputRef.current?.value.trim()) return;

    throttlingRef.current = true;

    setTimeout(() => {
      throttlingRef.current = false;
      if (inputRef.current) {
        dispatch(fetchResultThunk(inputRef.current.value));
      }
    }, 400);
  };
  
  return (
      ...
        <ElInput
          ref={inputRef}
          value={inputRef.current?.value}
          onChange={handleThrottleSearch}
        />
      ...
  );
```

## 🛍 트러블 슈팅

📌 [vite.config.ts에서 proxy를 설정하여 CORS 에러 해결하기](https://velog.io/@yena1025/Vite%EC%97%90%EC%84%9C-CORS-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0%ED%95%98%EB%8A%94-%EB%B2%95) <br/>

📌 [throw Error로 api 결과값 타입에 포함되는 undefined 제거](https://velog.io/@yena1025/api-%EA%B2%B0%EA%B3%BC%EA%B0%92-%ED%83%80%EC%9E%85%EC%97%90-%EC%9E%90%EA%BE%B8-undefined%EA%B0%80-%ED%8F%AC%ED%95%A8%EB%90%A0-%EB%95%8C)


## 🧶 기술 스택
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux--Toolkit-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
