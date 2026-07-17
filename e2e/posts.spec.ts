import { test, expect } from "@playwright/test";

test.describe("Posts page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/posts");
  });

  test("displays page header", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "All Posts" })
    ).toBeVisible();
  });

  test("displays post cards", async ({ page }) => {
    const articles = page.locator("article");
    await expect(articles.first()).toBeVisible();
  });

  test("pagination controls are rendered", async ({ page }) => {
    await expect(
      page.getByRole("navigation", { name: "Pagination" })
    ).toBeVisible();
  });

  test("clicking Read More navigates to single post", async ({ page }) => {
    await page.getByRole("link", { name: /Read More/i }).first().click();
    await expect(page).toHaveURL(/\/posts\/.+/);
    await expect(page.getByText("Back to Posts")).toBeVisible();
  });
});

test.describe("Single post page", () => {
  test("renders post content", async ({ page }) => {
    await page.goto("/posts/authentic-jollof-rice");
    await expect(
      page.getByRole("heading", {
        name: "The Art of Authentic Jollof Rice: A West African Staple",
      })
    ).toBeVisible();
  });

  test("prev/next navigation works", async ({ page }) => {
    await page.goto("/posts/egusi-soup");
    await expect(page.getByText("Previous Post")).toBeVisible();
    await expect(page.getByText("Next Post")).toBeVisible();
  });
});
