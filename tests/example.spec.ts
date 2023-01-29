import { test, expect } from "@playwright/test";

import AVAILABLE_DATA from "../src/data";

test("AVAILABLE_DATA items exist", async ({ page }) => {
  await page.goto("/");

  for (const data of AVAILABLE_DATA) {
    await expect(page.locator(`#${data.id}`)).toBeVisible();
  }
});
