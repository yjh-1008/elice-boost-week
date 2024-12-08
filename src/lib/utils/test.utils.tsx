import { render } from '@testing-library/react';
import { useRouter } from 'next/router';
import mockRouter from 'next-router-mock';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

export function renderWithRouter(ui: React.ReactNode) {
  return render(
    <RouterContext.Provider value={mockRouter}>
      {ui}
    </RouterContext.Provider>
  );
}

// 라우터 초기 상태 설정 함수
export function setupRouter(initialUrl: string) {
  mockRouter.setCurrentUrl(initialUrl);
}