import { test as base } from '@playwright/test';

import { withPerformanceTracking } from '@scalewright/performance-tracking';

const test = withPerformanceTracking(base);

export * from '@playwright/test';
export { test };
