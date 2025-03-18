/// <reference types="cypress" />

import { defineConfig } from "cypress";

export default defineConfig({
  // 컴포넌트 테스트 설정
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
  // 통합 테스트 설정
  e2e: {
    supportFile: "cypress/support/e2e.ts", // 지원 파일 설정
    setupNodeEvents() {
      // 이벤트 처리 로직
    },
    baseUrl: "http://localhost:5173", // 테스트를 희망하는 URL
    // 테스트 환경 변수 설정
    env: {
      TEST_EMAIL: "admin@naver.com",
      TEST_PASSWORD: "admin@naver.com",
    },
  },
});
