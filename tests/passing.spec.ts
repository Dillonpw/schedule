import { test, expect } from "@playwright/test";

test.describe("Basic Interactions, designed to show success", () => {
  test.beforeEach(
    async ({ page }) => await page.goto("https://www.schedtrack.com/"),
  );

  test("Correct title", async ({ page }) => {
    await expect(page).toHaveTitle("Sched Track");
  });

  test("Nav menu links", async ({ page }) => {
    const featuresLink = page.locator('[data-testid="features"]');
    const pricingLink = page.locator('[data-testid="pricing"]');

    await page.getByRole("link", { name: "Sched Track" }).click();
    await expect(page).toHaveURL("https://www.schedtrack.com/");

    await page.getByRole("link", { name: "Features" }).click();
    await expect(page).toHaveURL("https://www.schedtrack.com/#features");
    await expect(featuresLink).toBeVisible();

    await page.getByRole("link", { name: "Pricing" }).click();
    await expect(page).toHaveURL("https://www.schedtrack.com/#pricing");
    await expect(pricingLink).toBeVisible();
  });

  //stripe donation test
  test("test hero stripe donation integration", async ({ page }) => {
    await page.getByRole("link", { name: "Donate" }).click();
    await expect(page).toHaveURL("https://buy.stripe.com/7sIaFa7EQeJzbW8aEG");
  });

  test("test layout stripe donation integration", async ({ page }) => {
    await page
      .getByRole("link", { name: "Help Us Keep the Lights On 💡" })
      .click();
    await expect(page).toHaveURL("https://buy.stripe.com/7sIaFa7EQeJzbW8aEG");
  });

  //faq section tests
  test.only("should display the FAQ section", async ({ page }) => {
    //locators
    const firstAccordion = page.locator(
      "text=Sched Track helps professionals manage their schedules more efficiently and conveniently.",
    );
    const secondAccordion = page.locator(
      "text=Sched Track allows professionals to create personalized schedules that fit their unique shift patterns and have those schedules saved for reference at a momnets notice.",
    );
    const thirdAccordion = page.locator(
      "text=Sched Track has one job, and it does it perfectly",
    );
    const fourthAccordion = page.locator(
      "text=Sched Track is free, although we do accept donations, the app is kept running out of appreciation for the people who need it.",
    );
    const fifthAccordion = page.locator(
      "text=Yes, Sched Track is designed to work seamlessly on desktop, mobile devices and everything in between.",
    );
    const sixthAccordion = page.locator(
      "text=We regularly update Sched Track to improve performance and add useful features based on user feedback.",
    );
    //first accordion
    await page
      .getByRole("button", {
        name: "What are the benefits of using Sched Track?",
      })
      .click();
    await expect(firstAccordion).toBeVisible();
    //second accordion
    await page
      .getByRole("button", { name: "How does Sched Track work?" })
      .click();
    await expect(firstAccordion).not.toBeVisible();
    await expect(secondAccordion).toBeVisible();
    //third accordion
    await page
      .getByRole("button", {
        name: "Is this app cluttered with features I won't use?",
      })
      .click();
    await expect(secondAccordion).not.toBeVisible();
    await expect(thirdAccordion).toBeVisible();
    //fourth accordion
    await page
      .getByRole("button", {
        name: "Does it cost an arm and a leg?",
      })
      .click();
    await expect(thirdAccordion).not.toBeVisible();
    await expect(fourthAccordion).toBeVisible();
    //fifth accordion
    await page
      .getByRole("button", {
        name: "Can I use Sched Track on any device?",
      })
      .click();
    await expect(fourthAccordion).not.toBeVisible();
    await expect(fifthAccordion).toBeVisible();
    //sixth accordion
    await page
      .getByRole("button", {
        name: "How often does Sched Track update its features?",
      })
      .click();
    await expect(fifthAccordion).not.toBeVisible();
    await expect(sixthAccordion).toBeVisible();
    //first accordion to close sixth
    await page
      .getByRole("button", {
        name: "What are the benefits of using Sched Track?",
      })
      .click();
    await expect(firstAccordion).toBeVisible();
    await expect(sixthAccordion).not.toBeVisible();
    //closing all accordions
    await page
      .getByRole("button", {
        name: "What are the benefits of using Sched Track?",
      })
      .click();
    await expect(firstAccordion).not.toBeVisible();
  });

  // Working text skipped to stop spam
  test.skip("sign in and account creation", async ({ page }) => {
    const email = process.env.TEST_EMAIL as string;
    await page.getByRole("link", { name: "Sign In" }).click();
    await expect(page).toHaveURL("https://www.schedtrack.com/signin");
    await page.getByPlaceholder("Email").click();
    await page.getByPlaceholder("Email").fill(email);
    await page.getByRole("button", { name: "Sign in with Email" }).click();
  });

  //after sign in verify account info is visible
  //Test fails google-side 400 error, manual test passes
  test.skip("Google sign in and generate schedule", async ({ page }) => {
    const email = process.env.TEST_EMAIL as string;
    const password = process.env.TEST_PASSWORD as string;
    await page.goto("https://www.schedtrack.com/");
    await page.getByRole("link", { name: "Sign In" }).click();
    await expect(page).toHaveURL("https://www.schedtrack.com/signin");
    await page.getByRole("button", { name: "Sign in with Google" }).click();
    await page.getByLabel("Email or phone").fill(email);
    await page.getByLabel("Email or phone").press("Enter");
    await page.getByLabel("Enter your password").fill(password);
    await page.getByRole("button", { name: "Next" }).click();
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page).toHaveURL("https://www.schedtrack.com/dashboard");
    await expect(page.getByTestId("sign-out")).toBeVisible();
  });

  test("contact page allows for message send", async ({ page }) => {
    const contactLink = page.locator('[data-testid="contactLink"]');
    const links = await page.locator(`[id="links"]`);
    await contactLink.click();
    await expect(page).toHaveURL("https://www.schedtrack.com/contact");
    await expect(links).toBeVisible();
  });

  //TODO
  //add credetial log in to allow for deeper testing on the api
});
