import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchArea from '../../src/components/common/SearchArea';
import '@testing-library/jest-dom';
import { describe, it, jest, beforeEach, expect } from '@jest/globals';

jest.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: jest.fn().mockImplementation((param) => {
      if (param === 'searchWord') {
        return 'searchText';
      }
      return null;
    })
  })
}));

describe('SearchArea 컴포넌트', () => {
  const mockOnSearch = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('검색 입력창과 아이콘이 렌더링되어야 합니다', () => {
    //given
    render(<SearchArea />);
    //when

    //then
    expect(screen.getByRole('textbox')).toBeDefined();
    expect(screen.getByTestId('search-icon')).toBeDefined();
  });

  it('검색 창에 값이 입력되면 값이 업데이트가 되어야합니다.', async () => {
    //given
    render(<SearchArea />);
    //when
    const searchInput = await screen.findByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'searchText' } });
    //then
    expect(searchInput).toHaveValue('searchText');
  });
});
