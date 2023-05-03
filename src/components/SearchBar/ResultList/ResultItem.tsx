import styled from 'styled-components';
import SearchIcon from 'assets/search.svg';

interface SearchItemProps {
  name: string;
}

export const ResultItem = ({ name }: SearchItemProps) => {
  return (
    <Container>
      <IconBox>
        <SearchIcon />
      </IconBox>
      <Keyword>{name}</Keyword>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: ${({ theme }) => theme.size.full};
  height: 3rem;
  padding: ${({ theme }) => theme.size.xs} 0;
`;

const IconBox = styled.div`
  position: absolute;
  top: 30%;
  left: 0;
  width: ${({ theme }) => theme.size.md};
  height: ${({ theme }) => theme.size.md};
`;

const Keyword = styled.p`
  margin-left: 2.5rem;
  font-size: ${({ theme }) => theme.size.md};
`;
