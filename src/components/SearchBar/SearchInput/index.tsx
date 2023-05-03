import { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from 'store';
import { fetchResultThunk } from 'store/fetchResultThunk';
import SearchIcon from 'assets/search.svg';

export const SearchInput = () => {
  const dispatch = useAppDispatch();
  const [keyword, setKeyword] = useState('');

  const searchInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setKeyword(e.currentTarget.value);
  };

  const searchSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!keyword) return;

    dispatch(fetchResultThunk(keyword));
  };

  return (
    <Container>
      <IconBox>
        <SearchIcon />
      </IconBox>
      <InputForm onSubmit={searchSubmitHandler}>
        <ElInput value={keyword} onChange={searchInputHandler} />
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
