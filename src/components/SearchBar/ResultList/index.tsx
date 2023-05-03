import styled from 'styled-components';
import { ResultItem } from './ResultItem';
import { useAppSelector } from 'store';
import { selectResult } from 'store/fetchResultThunk';
import { ResultState } from 'types/searchResult';

export const ResultList = () => {
  const { results: searchResults } = useAppSelector(selectResult);

  return (
    <Container>
      <SubTitle>추천 검색어</SubTitle>
      {searchResults.length < 1 && <NoResultGuide>검색어 없음</NoResultGuide>}
      {searchResults.map(({ id, name }: ResultState) => (
        <ResultItem key={id} resultInfo={{ id, name }} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 36rem;
  padding: ${({ theme }) => theme.size.md} ${({ theme }) => theme.size.lg};
  border-radius: ${({ theme }) => theme.size.base};
  background-color: ${({ theme }) => theme.color.white};
  overflow: hidden;
`;

const SubTitle = styled.p`
  margin-bottom: ${({ theme }) => theme.size.xs};
  font-size: ${({ theme }) => theme.size.sm};
  color: ${({ theme }) => theme.color.gray};
`;

const NoResultGuide = styled.p``;
