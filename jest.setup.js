import '@testing-library/jest-dom';

// next/router 모킹
jest.mock('next/router', () => require('next-router-mock'));

// next/navigation 모킹 (App Router를 사용하는 경우)
jest.mock('next/navigation', () => require('next-router-mock/next-navigation'));

// FontAwesome 아이콘 모킹
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => null
}));

// next/image 모킹
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />
  }
}));