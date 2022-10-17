import { render, fireEvent, screen } from "@testing-library/react";
import { MutableSnapshot, RecoilRoot } from "recoil";
import GameControls from "components/GameControls";
import React from "react";
import { boardState } from "state";

describe("Testing GameControls component", () => {
  const renderComponent = (
    mockInitializeState?: (m: MutableSnapshot) => void
  ) => (
    <RecoilRoot initializeState={mockInitializeState}>
      <GameControls />
    </RecoilRoot>
  );

  describe("Testing general behavior", () => {
    it("Should fire handleReset function when button is clicked", () => {
      render(renderComponent());

      fireEvent.click(screen.getByRole("button"));

      //TODO: expect functions to have been called
    });
  });
  describe("Testing rendering conditions", () => {
    test("If button is disabled", () => {
      const mockInitializeState = ({ set }: MutableSnapshot) => {
        set(boardState, [[], [], [], [], [], [], []]);
      };

      render(renderComponent(mockInitializeState));

      expect(screen.getByRole("button")).toBeDisabled();
    });
    test("If button is enabled", () => {
      const mockInitializeState = ({ set }: MutableSnapshot) => {
        set(boardState, [[1, 2], [], [], [], [], [], []]);
      };

      render(renderComponent(mockInitializeState));

      expect(screen.getByRole("button")).not.toBeDisabled();
    });
  });
});
