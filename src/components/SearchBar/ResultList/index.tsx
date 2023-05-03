import styled from 'styled-components';
import { ResultItem } from './ResultItem';
import { useAppSelector } from 'store/hooks/root';
import { selectResult } from 'store/hooks/fetchResultThunk';
import { ResultState } from 'types/searchResult';

export const ResultList = () => {
  const { results } = useAppSelector(selectResult);

  return (
    <Container>
      <SubTitle>추천 검색어</SubTitle>
      {results.length < 1 && <NoResultGuide>검색어 없음</NoResultGuide>}
      {results.map(({ id, name }: ResultState) => (
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

const SubTitle = styled.p`
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: #849aad;
`;

const NoResultGuide = styled.p``;
