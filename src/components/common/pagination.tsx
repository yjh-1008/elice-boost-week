import { useRouter } from 'next/router';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

interface PaginationProps {
  total: number;
  displaySize?: number;
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const PageNumber = styled.button<{ isActive?: boolean }>`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: ${props => props.isActive ? '#524fa1' : 'transparent'};
  color: ${props => props.isActive ? 'white' : '#999'};
  cursor: pointer;
  font-size: 14px;
  padding: 0;
  border-radius: 4px;

  &:hover {
    background-color: ${props => props.isActive ? '#524fa1' : '#f8f9fa'};
  }
`;

const ArrowButton = styled.button<{ disabled: boolean }>`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  color: ${props => props.disabled ? '#ccc' : '#222'};
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  padding: 0;
`;

export default function Pagination({ total, displaySize = 5 }: PaginationProps) {
  const router = useRouter();
  const currentPage = Number(router.query.offset) || 1;
  const [totalPages, setTotalPages] = useState<number>(total);
  const [currentGroup, setCurrentGroup] = useState<number>(1);
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        offset: page,
        count: 20
      }
    });
  };

  useEffect(() => {
    setTotalPages(Math.ceil(total / displaySize));
    setCurrentGroup(Math.ceil(currentPage / displaySize));
  }, [total]);

  const renderPageNumbers = () => {
    const pages = [];
    let startPage = ((currentGroup -1) * displaySize) + 1;
    let endPage = Math.min(currentGroup * displaySize, totalPages);
    // 시작 페이지 조정

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PageNumber
          key={i}
          isActive={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </PageNumber>
      );
    }
    return pages;
  };

  return (
    <PaginationContainer>
      <ArrowButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        data-testid="prev-button"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </ArrowButton>
      {renderPageNumbers()}
      <ArrowButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        data-testid="next-button"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </ArrowButton>
    </PaginationContainer>
  );
}
