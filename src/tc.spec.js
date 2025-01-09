import { test, expect} from '@playwright/experimental-ct-core';

test('should work', async ({page}) => {
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - heading: Mounted
  `);
})