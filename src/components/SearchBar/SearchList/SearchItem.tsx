import styled from 'styled-components';
import SearchIcon from 'assets/search.svg';

interface SearchItemProps {
  name: string;
}

export const SearchItem = ({ name }: SearchItemProps) => {
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
  width: 100%;
  height: 3rem;
  padding: 0.5rem 0;
`;

const IconBox = styled.div`
  position: absolute;
  top: 30%;
  left: 0;
  width: 1.2rem;
  height: 1.2rem;
`;

const Keyword = styled.p`
  margin-left: 2.5rem;
  font-size: 1.2rem;
`;
