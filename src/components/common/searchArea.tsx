'use client';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import type { Nullish } from '@/types.ts';
import React from 'react';
const Container = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 12px 0;
  border: 1px solid rgb(201,202,204);
  border-radius: 4px;
  padding: 12px 0px;
  background-color: white;
`;

const SearchInput = styled.input`
  border-radius 4px;
  width: 100%;
  &::placeholder {
    color: gray;
  }
  &:focus {
    outline: none;
  }
  border: none;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  margin: 0 16px;
  width: 16px;
  height: 16px;
`;

export default function SearchArea() {
  const searchParams = useSearchParams();  
  const [searchText, setSearchText] = useState<string | null>(searchParams.get('searchWord') || '');

  //TODO ... debounce 처리

  //useEffect를 통해 SearchParam에 값이 없다면 초기값을 설정해준다.
  useEffect(() => {
    if (!searchText) {
      setSearchText('');
    }
  }, [searchText]);

  return (
    <Container>
      <SearchIcon icon={faSearch} data-testid="search-icon" />  
      <SearchInput placeholder="배우고 싶은 언어, 기술을 검색해 보세요" value={searchText || ''} onChange={(e) => setSearchText(e.target.value)} data-testid="search-input" />
    </Container>
  );
}
