import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Modal } from "@/components/ui/Modal";
import type { ModalState } from "@/types";

describe("Modal", () => {
  const closedState: ModalState = { open: false, type: null, context: null };
  const successState: ModalState = {
    open: true,
    type: "success",
    context: "contact",
  };
  const errorState: ModalState = {
    open: true,
    type: "error",
    context: "event",
  };

  it("renders nothing when closed", () => {
    const { container } = render(
      <Modal state={closedState} onClose={jest.fn()} />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it("renders success title for contact context", () => {
    render(<Modal state={successState} onClose={jest.fn()} />);
    expect(screen.getByText("Message Sent!")).toBeInTheDocument();
  });

  it("renders error title for event context", () => {
    render(<Modal state={errorState} onClose={jest.fn()} />);
    expect(screen.getByText("Registration Failed")).toBeInTheDocument();
  });

  it("calls onClose when backdrop is clicked", () => {
    const onClose = jest.fn();
    render(<Modal state={successState} onClose={onClose} />);
    // Click the backdrop (the outer dialog div)
    fireEvent.click(screen.getByRole("dialog"));
    expect(onClose).toHaveBeenCalled();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = jest.fn();
    render(<Modal state={successState} onClose={onClose} />);
    fireEvent.click(screen.getByRole("button", { name: /close/i }));
    expect(onClose).toHaveBeenCalled();
  });
});
