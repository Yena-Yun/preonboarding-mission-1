import styled from 'styled-components';
import { SearchInput } from './SearchInput';
import { ResultList } from './ResultList';
import { useAppSelector } from 'store';
import { selectResult } from 'store/fetchResultThunk';
import { useRef, useState } from 'react';

export const SearchBar = () => {
  const { results } = useAppSelector(selectResult);

  const resLength = results.length;
  const maxLength = resLength - 1;

  const listRef = useRef<HTMLUListElement>(null);

  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const handleMoveKeyboard = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // const keyCode = e.key;

    // if (keyCode === 'ArrowDown') {
    //   resLength > 0 && resLength <= maxLength
    //     ? dispatch(arrowDown(resLength))
    //     : dispatch(arrowDown(maxLength));
    // }

    // if (keyCode === 'ArrowUp') {
    //   resLength > 0 && resLength <= maxLength
    //     ? dispatch(arrowUp(resLength))
    //     : dispatch(arrowUp(maxLength));
    // }

    // if (keyCode === 'Escape') {
    //   dispatch(escape());
    // }
    if (resLength > 0) {
      switch (e.key) {
        case 'ArrowDown':
          setFocusedIndex(focusedIndex + 1);
          if (listRef.current?.childElementCount === focusedIndex + 1)
            setFocusedIndex(0);
          break;
        case 'ArrowUp':
          setFocusedIndex(focusedIndex - 1);
          if (focusedIndex <= 0) {
            // setKeyItems([]);
            setFocusedIndex(-1);
          }
          break;
        case 'Escape':
          // setKeyItems([]);
          setFocusedIndex(-1);
          break;
      }
    }
  };
  return (
    <Container>
      <Title>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </Title>
      <SearchInput handleMoveKeyboard={handleMoveKeyboard} />
      <ResultList listRef={listRef} focusedIndex={focusedIndex} />
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.flex.isFlex};
  ${({ theme }) => theme.flex.isColumn};
  ${({ theme }) => theme.flex.alignCenter};
  min-height: 100vh;
  padding-top: 6rem;
  background-color: ${({ theme }) => theme.color.secondary};
`;

const Title = styled.h1`
  text-align: center;
`;
