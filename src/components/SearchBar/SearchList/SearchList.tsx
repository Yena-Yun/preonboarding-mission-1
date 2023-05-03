import styled from 'styled-components';
import { SearchItem } from './SearchItem';

export const SearchList = () => {
  const str = 'search';
  const array = str.split('');

  return (
    <Container>
      <SubTitle>추천 검색어</SubTitle>
      {array.map((item: string, id: number) => (
        <SearchItem key={id} item={item} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 36rem;
  padding: 1.2rem 1.5rem;
  border-radius: 1rem;
  background-color: #ffffff;
  overflow: hidden;
`;

const SubTitle = styled.span`
  font-size: 0.8rem;
  color: #849aad;
`;
