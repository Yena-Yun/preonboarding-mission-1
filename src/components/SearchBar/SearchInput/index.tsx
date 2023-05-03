import { useRef } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchResultThunk, selectResult } from 'store/fetchResultThunk';
import SearchIcon from 'assets/search.svg';

interface SearchInputProps {
  handleMoveKeyboard: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ handleMoveKeyboard }: SearchInputProps) => {
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);
  const throttlingRef = useRef(false);

  const handleThrottleSearch = () => {
    console.log(inputRef.current?.value);

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
    <Container>
      <IconBox>
        <SearchIcon />
      </IconBox>
      <InputBox>
        <ElInput
          ref={inputRef}
          value={inputRef.current?.value}
          onChange={handleThrottleSearch}
          onKeyDown={handleMoveKeyboard}
          autoFocus
        />
        <SubmitButton>검색</SubmitButton>
      </InputBox>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 36rem;
  height: 4rem;
  margin: ${({ theme }) => theme.size.xs};
  border-radius: 10rem;
  background-color: ${({ theme }) => theme.color.white};
  overflow: hidden;
`;

const IconBox = styled.div`
  position: absolute;
  top: 30%;
  left: 5%;
  width: ${({ theme }) => theme.size.lg};
  height: ${({ theme }) => theme.size.lg};
`;

const InputBox = styled.div`
  ${({ theme }) => theme.flex.isFlex};
  height: ${({ theme }) => theme.size.full};
`;

const ElInput = styled.input`
  flex: 5;
  margin-left: 5rem;
  font-size: ${({ theme }) => theme.size.xl};
`;

const SubmitButton = styled.button`
  flex: 1;
  height: ${({ theme }) => theme.size.full};
  font-size: ${({ theme }) => theme.size.md};
  font-weight: ${({ theme }) => theme.weight.semibold};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary};
  cursor: ${({ theme }) => theme.cursor.pointer};
`;
