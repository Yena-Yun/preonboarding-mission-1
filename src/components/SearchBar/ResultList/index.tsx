import styled from 'styled-components';
import { ResultItem } from './ResultItem';
import { useAppSelector } from 'store/hooks/root';
import { selectResult } from 'store/hooks/fetchResultThunk';

export const SearchList = () => {
  const { results } = useAppSelector(selectResult);

  return (
    <Container>
      <SubTitle>추천 검색어</SubTitle>
      {results.map(({ id, name }) => (
        <ResultItem key={id} name={name} />
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
