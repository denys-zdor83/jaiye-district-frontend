import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders hero slider with headline", async ({ page }) => {
    await expect(page.locator("section[aria-label='Hero image slider']")).toBeVisible();
    await expect(page.getByText("Where African Flavours Come Alive")).toBeVisible();
  });

  test("hero slider auto-advances", async ({ page }) => {
    const firstHeadline = "Where African Flavours Come Alive";
    await expect(page.getByText(firstHeadline)).toBeVisible();

    // Wait for auto-play (5s + buffer)
    await page.waitForTimeout(6000);
    await expect(
      page.getByText("Cook With Confidence, Cook With Culture")
    ).toBeVisible();
  });

  test("manual slide navigation works", async ({ page }) => {
    await page.getByLabel("Next slide").click();
    await expect(
      page.getByText("Cook With Confidence, Cook With Culture")
    ).toBeVisible();
    await page.getByLabel("Previous slide").click();
    await expect(page.getByText("Where African Flavours Come Alive")).toBeVisible();
  });

  test("renders About section", async ({ page }) => {
    await page.getByRole("heading", {
      name: "Born From a Love of Nigerian Food & Culture",
    }).scrollIntoViewIfNeeded();
    await expect(
      page.getByRole("heading", {
        name: "Born From a Love of Nigerian Food & Culture",
      })
    ).toBeVisible();
  });

  test("renders Latest Posts section with 4 cards", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Latest Posts" })
    ).toBeVisible();
    const cards = page.locator("article");
    await expect(cards).toHaveCount(4);
  });

  test("navigates to Posts page from CTA", async ({ page }) => {
    await page.getByRole("link", { name: /View All Posts/i }).click();
    await expect(page).toHaveURL("/posts");
  });

  test("contact form shows success modal on valid submit", async ({ page }) => {
    await page.locator("#contacts").scrollIntoViewIfNeeded();
    await page.getByLabel("Name").fill("Test User");
    await page.getByLabel("Email").fill("test@example.com");
    await page.getByLabel("Message").fill("Hello from test");
    await page.getByRole("button", { name: /Send Message/i }).click();
    await expect(page.getByText("Message Sent!")).toBeVisible();
  });

  test("contact form shows error modal on empty submit", async ({ page }) => {
    await page.locator("#contacts").scrollIntoViewIfNeeded();
    await page.getByRole("button", { name: /Send Message/i }).click();
    await expect(page.getByText("Message Failed")).toBeVisible();
  });
});
