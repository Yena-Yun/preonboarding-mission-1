import styled from 'styled-components';
import SearchIcon from 'assets/search.svg';

interface SearchItemProps {
  resultInfo: {
    id: number;
    name: string;
  };
  focusedIndex: number;
}

export const ResultItem = ({ resultInfo, focusedIndex }: SearchItemProps) => {
  const { id, name } = resultInfo;

  return (
    <Container focused={id === focusedIndex}>
      <IconBox>
        <SearchIcon />
      </IconBox>
      <Keyword>{name}</Keyword>
    </Container>
  );
};

const Container = styled.li<{ focused: boolean }>`
  position: relative;
  width: ${({ theme }) => theme.size.full};
  height: 3rem;
  padding: ${({ theme }) => theme.size.xs} 0;
  background-color: ${({ focused, theme }) => focused && theme.color.secondary};
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
