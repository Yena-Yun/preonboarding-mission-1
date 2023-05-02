import styled from 'styled-components';
import SearchIcon from 'assets/search.svg';

export const SearchInput = () => {
  return (
    <Container>
      <IconBox>
        <SearchIcon />
      </IconBox>
      <InputBox>
        <ElInput />
        <SubmitButton>검색</SubmitButton>
      </InputBox>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 36rem;
  height: 4rem;
  margin: 0.5rem;
  border-radius: 10rem;
  background-color: #ffffff;
  overflow: hidden;
`;

const IconBox = styled.div`
  position: absolute;
  top: 30%;
  left: 5%;
  width: 1.4rem;
  height: 1.4rem;
`;

const InputBox = styled.form`
  display: flex;
  height: 100%;
`;

const ElInput = styled.input`
  flex: 5;
  margin-left: 5rem;
  font-size: 1.6rem;
`;

const SubmitButton = styled.button`
  flex: 1;
  height: 100%;
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  background-color: #3b7ddb;
  cursor: pointer;
`;
