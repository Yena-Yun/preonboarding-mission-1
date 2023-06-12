import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from 'store';
import { fetchResultThunk } from 'store/fetchResultThunk';
import { toggleIsOpen } from 'store/isOpenResultList';
import { useDebounce } from 'hooks/useDebounce';
import SearchIcon from 'assets/search.svg';

export const SearchInput = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const getSearchResults = () => {
    if (inputValue) {
      dispatch(fetchResultThunk(inputValue));
      dispatch(toggleIsOpen(true));
    }

    if (!inputValue) {
      dispatch(toggleIsOpen(false));
    }
  };

  const debouncedInput = useDebounce(getSearchResults, 400);

  useEffect(() => {
    debouncedInput();
  }, [inputValue]);

  useEffect(() => {
    dispatch(toggleIsOpen(false));
  }, []);

  return (
    <Container>
      <IconBox>
        <SearchIcon />
      </IconBox>
      <InputForm>
        <ElInput value={inputValue} onChange={handleChange} />
        <SubmitButton>검색</SubmitButton>
      </InputForm>
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

const InputForm = styled.form`
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
