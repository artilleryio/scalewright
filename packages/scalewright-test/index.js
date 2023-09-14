const { test: base } = require('@playwright/test');

const { withPerformanceTracking } = require('@scalewright/performance-tracking');

const test = withPerformanceTracking(base);

module.exports = require('@playwright/test');
module.exports.test = test;
