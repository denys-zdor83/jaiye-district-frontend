import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SectionTitle } from "@/components/ui/SectionTitle";

describe("SectionTitle", () => {
  it("renders the title", () => {
    render(<SectionTitle title="Latest Posts" />);
    expect(
      screen.getByRole("heading", { name: "Latest Posts" })
    ).toBeInTheDocument();
  });

  it("renders optional label and subtitle", () => {
    render(
      <SectionTitle
        label="Fresh From the Kitchen"
        title="Latest Posts"
        subtitle="Recipes served fresh."
      />
    );
    expect(screen.getByText("Fresh From the Kitchen")).toBeInTheDocument();
    expect(screen.getByText("Recipes served fresh.")).toBeInTheDocument();
  });

  it("does not render label span when label is omitted", () => {
    const { container } = render(<SectionTitle title="Posts" />);
    expect(container.querySelector("span")).not.toBeInTheDocument();
  });
});
