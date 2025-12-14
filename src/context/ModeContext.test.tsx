import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ModeProvider, useMode } from "./ModeContext";

function Tester() {
  const { mode, toggleMode } = useMode();
  return (
    <div>
      <span data-testid="mode">{mode}</span>
      <button onClick={toggleMode}>toggle</button>
    </div>
  );
}

describe("ModeContext", () => {
  it("toggles mode", () => {
    render(
      <ModeProvider>
        <Tester />
      </ModeProvider>
    );
    expect(screen.getByTestId("mode").textContent).toBe("bluebook");
    fireEvent.click(screen.getByText("toggle"));
    expect(screen.getByTestId("mode").textContent).toBe("blackbook");
  });
});
