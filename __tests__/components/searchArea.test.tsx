import React from 'react';
import { fireEvent, render, screen, act, renderHook } from '@testing-library/react';
import SearchArea from '../../src/components/common/SearchArea';
import '@testing-library/jest-dom';
import { describe, it, jest, beforeEach, expect } from '@jest/globals';
import { setupRouter } from '../../src/lib/utils/test.utils';
import useDebounce from '@/hooks/useDebounce';

jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: function MockIcon({ icon, ...props }) {
    return (
      <span 
        data-testid={`icon-${icon.iconName}`}
        className={`mock-icon ${props.className || ''}`}
        style={props.style}
      />
    );
  }
}));

describe('SearchArea 컴포넌트', () => {
  const mockOnSearch = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    setupRouter('/')
  });

  it('검색 입력창이 렌더링되어야 합니다', () => {
    //given
    render(<SearchArea />);
    //when

    //then
    expect(screen.getByRole('textbox')).toBeDefined();;
  });

  it("useDobounce가 정상적으로 동작해야합니다", () => {
    //given
    render(<SearchArea />);
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 300),
      { initialProps: { value: 'initial' } }
    );
    //when
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });

    //then
    // 값 변경
    rerender({ value: 'changed' });
    
    // 200ms 경과
    act(() => {
      jest.advanceTimersByTime(200);
    });

    // 아직 초기값이어야 함
    expect(result.current).toBe('initial')
  })

});
