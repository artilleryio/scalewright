import { test as baseTest } from '@playwright/test';

type TestFunction = typeof baseTest;

interface WithPerformanceTracking {
  (base: TestFunction): TestFunction;
}

declare const withPerformanceTracking: WithPerformanceTracking;
export { withPerformanceTracking };
