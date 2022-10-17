import { ChakraProvider, Flex, useMediaQuery, VStack } from "@chakra-ui/react";
import { Board, GameControls, GameProgress } from "components";
import { FC } from "react";
import { RecoilRoot } from "recoil";

export const Home: FC = () => {
  const [isPortraitMode] = useMediaQuery("(max-height: 490px)");

  return (
    <ChakraProvider>
      <RecoilRoot>
        <Flex
          py={4}
          as={VStack}
          flexDirection={isPortraitMode ? "row" : "column"}
        >
          <Board />
          <Flex flexDirection="column">
            <GameProgress />
            <GameControls />
          </Flex>
        </Flex>
      </RecoilRoot>
    </ChakraProvider>
  );
};
