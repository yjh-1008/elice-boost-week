import { render, screen } from '@testing-library/react';
import CourseCard from '../../src/components/courseCard';
import '@testing-library/jest-dom';
import { describe, it, jest, expect, beforeEach } from '@jest/globals';
import { setupRouter } from '../../src/lib/utils/test.utils';

describe('CourseCard 컴포넌트', () => {
  const mockCourse = {
    logo_file_url: 'test-logo.png',
    course_type: 'NORMAL',
    tags: [],
    class_type: 'SELF',
    enroll_role_period: null,
    start_datetime: null,
    end_datetime: null,
    is_enroll_active: true,
    is_display: true,
    is_deleted: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    enrolled_role_end_datetime: null,
    begin_datetime: null,
    is_discounted: false,
    discounted_price: null,
    original_price: 0,
    price: 0,
    price_usd: 0,
    discounted_price_usd: 0,
    discount_rate: 0
  };

  beforeEach(() => {
    jest.clearAllMocks();
    setupRouter('/')
  });

  // ... 기존 테스트 케이스들 ...

  it('로고가 있는 경우 로고가 표시되어야 합니다', () => {
    //given 

    render(<CourseCard course={mockCourse} />);
    //when
    const logo = screen.getByTestId('course-logo');
    //then
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', mockCourse.logo_file_url);
  });


  it('로고 컨테이너가 올바른 크기를 가져야 합니다', () => {
    render(<CourseCard course={mockCourse} />);
    const logoWrapper = screen.getByTestId('course-logo').parentElement;
    expect(logoWrapper).toHaveStyle({
      height: '52px'
    });
  });
});
