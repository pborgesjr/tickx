import React from "react";
import { MutableSnapshot, RecoilRoot } from "recoil";
import { render, screen } from "@testing-library/react";
import GameProgress from "components/GameProgress";
import { gameOverState } from "state";

describe("Testing GameProgress component", () => {
  const renderComponent = (
    mockInitializeState?: (m: MutableSnapshot) => void
  ) => (
    <RecoilRoot initializeState={mockInitializeState}>
      <GameProgress />
    </RecoilRoot>
  );

  it("Should render the correct text when no one has started the game", () => {
    render(renderComponent());

    expect(screen.getByText(`Red's turn`)).toBeTruthy();
  });

  it("Should render the correct text when the player has won", () => {
    const mockInitializeState = ({ set }: MutableSnapshot) => {
      set(gameOverState, true);
    };

    render(renderComponent(mockInitializeState));

    expect(screen.getByText(`Red wins!`)).toBeTruthy();
  });
});
