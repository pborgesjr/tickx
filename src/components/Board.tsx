import { Flex, useMediaQuery } from "@chakra-ui/react";
import { boardRows, playerColor } from "const";
import { usePlayPiece } from "hooks";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { boardState, gameOverState, playerState } from "state";
import { Player } from "types";
import { Circle } from "./Circle";

const padCol = (col: number[]): number[] =>
  col.join("").padEnd(boardRows, "0").split("").map(Number);

export const Board: FC = () => {
  const play = usePlayPiece();
  const board = useRecoilValue(boardState);
  const player = useRecoilValue(playerState);
  const gameOver = useRecoilValue(gameOverState);

  const [isPortraitMode] = useMediaQuery("(max-height: 490px)");

  return (
    <Flex justify="center">
      {board.map((col, i) => (
        <Flex
          key={i}
          role="group"
          onClick={() => play(i)}
          flexDirection="column-reverse"
          cursor={gameOver ? "auto" : "pointer"}
        >
          {padCol(col).map((p, j) => (
            <Circle
              m={1}
              size={
                isPortraitMode
                  ? "40px"
                  : ["40px", "50px", "70px", "80px", "100px"]
              }
              key={`${i}-${j}`}
              boxShadow="inner"
              bg={playerColor[p as Player] || "gray.300"}
            />
          ))}
          <Circle
            m={1}
            size={
              isPortraitMode
                ? "40px"
                : ["40px", "50px", "70px", "80px", "100px"]
            }
            boxShadow="base"
            visibility="hidden"
            bg={playerColor[player]}
            _groupHover={{
              visibility: gameOver ? "hidden" : "visible",
            }}
          />
        </Flex>
      ))}
    </Flex>
  );
};
