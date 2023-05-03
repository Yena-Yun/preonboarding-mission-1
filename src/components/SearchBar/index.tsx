import { SearchList } from './SearchList/SearchList';
import { SearchInput } from './SearchInput/SearchInput';
import styled from 'styled-components';

export const SearchBar = () => {
  return (
    <Container>
      <Title>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </Title>
      <SearchInput />
      <SearchList />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 6rem;
  background-color: #ccebfb;
`;

const Title = styled.h1`
  text-align: center;
`;
