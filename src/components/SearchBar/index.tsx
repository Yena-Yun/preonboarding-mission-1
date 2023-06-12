import styled from 'styled-components';
import { SearchInput } from './SearchInput';
import { ResultList } from './ResultList';
import { useAppSelector } from 'store';
import { selectIsOpenResults } from 'store/isOpenResultList';
import { TITLE_PHRASES } from './constants/titlePhrases';

export const SearchBar = () => {
  const { isOpenResults } = useAppSelector(selectIsOpenResults);

  const { line1, line2 } = TITLE_PHRASES;

  return (
    <Container>
      <Title>
        {line1}
        <br />
        {line2}
      </Title>
      <SearchInput />
      {isOpenResults && <ResultList />}
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
  margin-bottom: 2rem;
  text-align: center;
`;
