import { test, expect } from "@playwright/test";

test.describe("Events page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/events");
  });

  test("renders events heading", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Events" })).toBeVisible();
  });

  test("renders featured event title", async ({ page }) => {
    await expect(
      page.getByText("The Great Jollof Cook-Off 2026").first()
    ).toBeVisible();
  });

  test("renders agenda items", async ({ page }) => {
    await expect(page.getByText("Event Agenda")).toBeVisible();
    await expect(page.getByText("12:00 PM")).toBeVisible();
  });

  test("registration form shows success modal on valid submit", async ({
    page,
  }) => {
    await page.getByLabel("Name").fill("Ada");
    await page.getByLabel("Email").fill("ada@example.com");
    await page.getByRole("button", { name: /Register Now/i }).click();
    await expect(page.getByText("Registration Successful!")).toBeVisible();
  });

  test("registration form shows error modal when required fields empty", async ({
    page,
  }) => {
    await page.getByRole("button", { name: /Register Now/i }).click();
    await expect(page.getByText("Registration Failed")).toBeVisible();
  });
});
